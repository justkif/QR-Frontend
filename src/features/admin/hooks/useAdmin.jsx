import { useEffect, useState } from 'react';
import getScan from '../apis/getScan';
import updateScan from '../apis/updateScan';
import reset from '../apis/reset';
import useLoading from '../../../hooks/useLoading';
import useNotification from '../../../hooks/useNotification';
import useModal from '../../../hooks/useModal';

export default function useAdmin() {
    const { showLoading, hideLoading, Loading } = useLoading();
    const { notify, Notification } = useNotification();
    const { showModal, hideModal, Modal } = useModal();
    const [scan, setScan] = useState(false);
    const handleGetScan = async () => {
        try {
            showLoading();
            setScan(await getScan());
        } catch (err) {
        } finally {
            hideLoading();
        }
    }
    const handleUpdateScan = async () => {
        try {
            showLoading();
            await updateScan();
            await handleGetScan();
        } catch (err) {
        } finally {
            hideLoading();
        }
    }
    const handleModal = () => {
        showModal({
            type: 'reset',
            cancel: hideModal,
            confirm: handleReset
        });
    }
    const handleReset = async () => {
        try {
            showLoading();
            hideModal();
            notify({ success : await reset() });
        } catch (err) {
        } finally {
            hideLoading();
        }
    }
    useEffect(() => {
        handleGetScan();
    } ,[scan]);
    return {
        scan,
        handleUpdateScan,
        handleModal,
        Loading,
        Notification,
        Modal
    }
}
