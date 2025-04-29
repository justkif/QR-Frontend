import { useState, useEffect } from 'react';
import generateQR from '../apis/generateQR';
import useLoading from '../../../hooks/useLoading';
import useNotification from '../../../hooks/useNotification';
import GetAttribute from '../../../utils/GetAttribute';

export default function useQR() {
    const { showLoading, hideLoading, Loading } = useLoading();
    const { notify, Notification } = useNotification();
    const [src, setSrc] = useState('');
    const [width, setWidth] = useState(undefined);
    const username = GetAttribute('username');
    const fullName = GetAttribute('fullName');
    const area = GetAttribute('area');
    useEffect(() => {
        const handleQR = async () => {
            try {
                showLoading();
                setSrc(await generateQR());
            } catch (err) {
                notify({ error: err });
            } finally {
                hideLoading();
            }
        }
        handleQR();
    }, []);
    useEffect(() => {
        const handleSize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleSize);
        handleSize();
        return () => window.removeEventListener('resize', handleSize);
    }, []);
    return {
        src,
        width,
        username,
        fullName,
        area,
        Loading,
        Notification
    }
}
