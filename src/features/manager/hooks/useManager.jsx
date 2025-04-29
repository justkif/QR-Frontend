import { useEffect } from 'react';
import exportExcel from '../apis/exportExcel'
import runnerGetAll from '../apis/runnerGetAll';
import runnerCreateOne from '../apis/runnerCreateOne';
import useLoading from '../../../hooks/useLoading';
import useNotification from '../../../hooks/useNotification';
import useTable from '../../../hooks/useTable';
import useModal from '../../../hooks/useModal';

export default function useManager() {
    const { showLoading, hideLoading, Loading } = useLoading();
    const { notify, Notification } = useNotification();
    const { showModal, hideModal, Modal } = useModal();
    const { table, Table } = useTable();
    const handleRunnerGetAll = async () => {
        try {
            showLoading();
            table({
                type: 'manager',
                data: await runnerGetAll()
            });
        } catch (err) {
        } finally {
            hideLoading();
        }
    }
    const handleRunnerCreateOne = async (ordinalNumber, fullName, gender, area) => {
        try {
            showLoading();
            hideModal();
            const response = await runnerCreateOne(ordinalNumber, fullName, gender, area);
            notify({ success: [
                `ordinalNumber: ${response.ordinalNumber}`,
                `fullName: ${response.fullName}`,
                `gender: ${response.gender}`,
                `area: ${response.area}`
            ].join(', ')});
            handleRunnerGetAll();
        } catch (err) {
            notify({ error: err });
        } finally {
            hideLoading();
        }
    }
    const handleModal = () => {
        showModal({
            type: 'runnerCreateOne',
            cancel: hideModal,
            confirm: handleRunnerCreateOne
        });
    }
    useEffect(() => {
        handleRunnerGetAll();
    }, []);
    return {
        handleModal,
        exportExcel,
        Loading,
        Notification,
        Modal,
        Table
    }
}
