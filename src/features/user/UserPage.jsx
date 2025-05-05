import useUser from './hooks/useUser';
import FunctionButtonComponent from '../../components/FunctionButtonComponent';

export default function UserPage() {
    const {
        handleModal,
        Loading,
        Notification,
        Modal,
        Table
    } = useUser();
    return (
        <div>
            <FunctionButtonComponent
                onClick={() => handleModal('registerUser')}
                label={'Create User'}
            />
            {Loading()}
            {Notification()}
            {Modal()}
            {Table()}
        </div>
    );
}
