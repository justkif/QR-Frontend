import { useState } from 'react';
import ModalComponent from '../components/ModalComponent';

export default function useModal() {
    const [modalData, setModalData] = useState(null);
    const showModal = (data) => setModalData(data);
    const hideModal = () => setModalData(null);
    const Modal = () => modalData ? 
        <ModalComponent
            data={modalData.data}
            type={modalData.type}
            cancel={modalData.cancel}
            confirm={modalData.confirm}
        />
    : null;
    return { showModal, hideModal, Modal }
}
