import { useState, useRef, useEffect } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import getOne from '../apis/getOne';
import scanQR from '../apis/scanQR';
import getScanned from '../apis/getScanned';
import ConvertTime from '../../../utils/ConvertTime';
import useLoading from '../../../hooks/useLoading';
import useNotification from '../../../hooks/useNotification';
import useModal from '../../../hooks/useModal';

export default function useScanner() {
    const { showLoading, hideLoading, Loading } = useLoading();
    const { notify, Notification } = useNotification();
    const { showModal, hideModal, Modal } = useModal();
    const [view, setView] = useState('scanner');
    const scannerRef = useRef(null);
    const isScanning = useRef(false);
    const runnerIdRef = useRef(null);
    const [scanned, setScanned] = useState([]);
    const handleView = () => {
        if (view === 'scanner') {
            setView('history');
        } else {
            setView('scanner');
        }
    }
    const qrCodeSuccessCallback = async (runnerId) => {
        try {
            if (isScanning.current) {
                await stopScan();
                showLoading();
                const response = await getOne(runnerId);
                runnerIdRef.current = runnerId;
                const confirm = [
                    `ordinalNumber: ${response.ordinalNumber}`,
                    `fullName: ${response.fullName}`,
                    `gender: ${response.gender}`,
                    `area: ${response.area}`,
                    `isPresent: ${response.isPresent}`,
                    `timePresent: ${ConvertTime(response.timePresent)}`,
                    `whoScan: ${response.whoScan}`,
                    `imageLink: ${response.imageLink}`
                ].join('\n');
                showModal({
                    data: confirm,
                    type: 'confirm',
                    cancel: handleCancel,
                    confirm: handleConfirm
                });
            }
        } catch (err) {
            startScan();
        } finally {
            hideLoading();
        }
    }
    const qrCodeErrorCallback = () => {
        startScan();
        hideLoading();
    }
    const startScan = () => {
        if (!scannerRef.current) {
            const html5QrcodeScanner = new Html5Qrcode('reader');
            html5QrcodeScanner.start(
                { facingMode: 'environment' },
                {
                    fps: 5,
                    qrbox: 240
                },
                qrCodeSuccessCallback,
                qrCodeErrorCallback
            );
            scannerRef.current = html5QrcodeScanner;
            isScanning.current = true;
        }
    }
    const stopScan = async () => {
        try {
            if (scannerRef.current && isScanning.current) {
                await scannerRef.current.stop();
                await scannerRef.current.clear();
                scannerRef.current = null;
                isScanning.current = false;
            }
        } catch (err) {
        }
    }
    const handleCancel = () => {
        hideModal();
        startScan();
    }
    const handleConfirm = async () => {
        try {
            showLoading();
            hideModal();
            notify({ success: await scanQR(runnerIdRef.current) });
        } catch (err) {
            notify({ error: err });
        } finally {
            hideLoading();
            startScan();
        }
    }
    const handleHistory = async () => {
        try {
            showLoading();
            const response = await getScanned();
            const data = await Promise.all(response.map(id => getOne(id)));
            setScanned(data);
        } catch (err) {
        } finally {
            hideLoading();
        }
    }
    useEffect(() => {
        if (view === 'scanner') {
            startScan();
        } else {
            stopScan();
            handleHistory();
        }
        return () => stopScan();
    }, [view]);
    return {
        view,
        handleView,
        Modal,
        scanned,
        ConvertTime,
        Loading,
        Notification
    }
}
