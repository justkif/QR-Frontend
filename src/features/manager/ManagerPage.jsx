import useManager from './hooks/useManager';
import FunctionButtonComponent from '../../components/FunctionButtonComponent';

export default function ManagerPage() {
    const {
        handleModal,
        exportExcel,
        Loading,
        Notification,
        Modal,
        Table
    } = useManager();
    return (
        <div>
            <FunctionButtonComponent 
                onClick={exportExcel}
                label={'Export Excel'}
            />
            <FunctionButtonComponent 
                ml={true}
                onClick={handleModal}
                label={'Create Runner'}
            />
            {Loading()}
            {Notification()}
            {Modal()}
            {Table()}
        </div>
    );
}
