import useUpdatePassword from './hooks/useUpdatePassword';
import LineInputComponent from '../../components/LineInputComponent';
import SubmitButtonComponent from '../../components/SubmitButtonComponent';

export default function UpdatePasswordPage() {
    const {
        password,
        setPassword,
        newPassword,
        setNewPassword,
        verifyNewPassword,
        setVerifyNewPassword,
        handleUpdatePassword,
        Loading,
        Notification
    } = useUpdatePassword();
    return (
        <div className='flex items-center justify-center h-8/9'>
            <div className='loginColor p-6'>
                <h2 className='text-center text-lg font-semibold'>Change Password</h2>
                <form onSubmit={handleUpdatePassword}>
                    <LineInputComponent
                        type={'password'}
                        value={password}
                        setValue={setPassword}
                        placeholder={'Enter your old password'}
                    />
                    <LineInputComponent
                        type={'password'}
                        value={newPassword}
                        setValue={setNewPassword}
                        placeholder={'Enter your new password'}
                    />
                    <LineInputComponent
                        type={'password'}
                        value={verifyNewPassword}
                        setValue={setVerifyNewPassword}
                        placeholder={'Re-enter new password'}
                    />
                    <SubmitButtonComponent />
                </form>
            </div>
            {Loading()}
            {Notification()}
        </div>
    );
}
