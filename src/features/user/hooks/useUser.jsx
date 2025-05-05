import { useEffect } from 'react';
import registerUser from '../apis/registerUser';
import userGetAll from '../apis/userGetAll';
import updatePasswordAdmin from '../apis/updatePasswordAdmin';
import updateRole from '../apis/updateRole';
import useLoading from '../../../hooks/useLoading';
import useNotification from '../../../hooks/useNotification';
import useTable from '../../../hooks/useTable';
import useModal from '../../../hooks/useModal';

export default function useUser() {
    const { showLoading, hideLoading, Loading } = useLoading();
    const { notify, Notification } = useNotification();
    const { showModal, hideModal, Modal } = useModal();
    const { table, Table } = useTable();
    const handleUserGetAll = async () => {
        try {
            showLoading();
            table({
                type: 'user',
                data: await userGetAll(),
                onClick: handleModal
            });
        } catch (err) {
        } finally {
            hideLoading();
        }
    }
    const handleModal = (type, username) => {
        showModal({
            data: username ?? null,
            type: type,
            cancel: hideModal,
            confirm: handleConfirm
        });
    }
    const handleConfirm = async (type, username, arg1, arg2, arg3) => {
        try {
            showLoading();
            hideModal();
            if (type === 'registerUser') {
                const response = await registerUser(arg1, arg2, arg3);
                notify({ success: `${response} has been created.` });
                handleUserGetAll();
            } else if (type === 'updatePasswordAdmin') {
                const response = await updatePasswordAdmin(username, arg1); 
                notify({ success: `${response} password has changed.` });
            } else if (type === 'updateRole') {
                const response = await updateRole(username, arg1); 
                notify({ success: `${response.username} has become ${response.role}.` });
                handleUserGetAll();         
            } 
        } catch (err) {
            notify({ error: err });
        } finally {
            hideLoading();
        }
    }
    useEffect(() => {
        handleUserGetAll();
    }, []);
    return {
        handleModal,
        Loading,
        Notification,
        Modal,
        Table
    }
}
