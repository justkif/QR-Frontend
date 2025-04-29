import useLogin from './hooks/useLogin';
import LineInputComponent from '../../components/LineInputComponent';
import SubmitButtonComponent from '../../components/SubmitButtonComponent';

export default function LoginPage() {
    const {
        username,
        setUsername,
        password,
        setPassword,
        Loading,
        Notification,
        handleLogin
    } = useLogin();
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='loginColor p-6'>
                <h2 className='text-center text-lg font-semibold'>Login</h2>
                <form onSubmit={handleLogin}>
                    <LineInputComponent
                        type={'text'}
                        value={username}
                        setValue={setUsername}
                        placeholder={'Enter your username'}
                    />
                    <LineInputComponent
                        type={'password'}
                        value={password}
                        setValue={setPassword}
                        placeholder={'Enter your password'}
                    />
                    <SubmitButtonComponent />
                </form>
            </div>
            {Loading()}
            {Notification()}
        </div>
    );
}
