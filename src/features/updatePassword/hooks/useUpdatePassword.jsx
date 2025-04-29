import { useState } from 'react';
import updatePassword from '../apis/updatePassword';
import useLoading from '../../../hooks/useLoading';
import useNotification from '../../../hooks/useNotification';

export default function useUpdatePassword() {
    const { showLoading, hideLoading, Loading } = useLoading();
    const { notify, Notification } = useNotification();
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [verifyNewPassword, setVerifyNewPassword] = useState('');
    const handleUpdatePassword = async (event) => {
        event.preventDefault();
        try {
            if (newPassword !== verifyNewPassword) {
                throw 'Passwords dont match.';
            }
            showLoading();
            notify({ success: await updatePassword(password, newPassword)});
        } catch (err) {
            notify({ error: err });
        } finally {
            hideLoading();
        }
    }
    return {
        password,
        setPassword,
        newPassword,
        setNewPassword,
        verifyNewPassword,
        setVerifyNewPassword,
        handleUpdatePassword,
        Loading,
        Notification
    }
}
