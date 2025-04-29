import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginUser from '../apis/loginUser';
import useLoading from '../../../hooks/useLoading';
import useNotification from '../../../hooks/useNotification';

export default function useLogin() {
    const { showLoading, hideLoading, Loading } = useLoading();
    const { notify, Notification } = useNotification();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            showLoading();
            localStorage.setItem('token', await loginUser(username, password));
            navigate(`/`);
        } catch (err) {
            notify({ error: err });
        } finally {
            hideLoading();
        }
    }
    return {
        username,
        setUsername,
        password,
        setPassword,
        Loading,
        Notification,
        handleLogin
    }
}
