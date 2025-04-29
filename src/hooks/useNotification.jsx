import { useState, useRef } from 'react';
import NotificationComponent from '../components/NotificationComponent';

export default function useNotification() {
    const [type, setType] = useState('');
    const [message, setMessage] = useState('');
    const [render, setRender] = useState(false);
    const [visible, setVisible] = useState(false);
    const showTimeout = useRef(null);
    const hideTimeout = useRef(null);
    const unmountTimeout = useRef(null);
    const clearTimers = () => {
        clearTimeout(showTimeout.current);
        clearTimeout(hideTimeout.current);
        clearTimeout(unmountTimeout.current);
    }
    const notify = ({ error, success }) => {
        if (!error && !success) return;
        clearTimers();
        setType(error ? 'error' : 'success');
        setMessage(error || success);
        setRender(true);
        showTimeout.current = setTimeout(() => setVisible(true), 10);
        hideTimeout.current = setTimeout(() => setVisible(false), 2000);
        unmountTimeout.current = setTimeout(() => setRender(false), 2200);
    }
    const Notification = () => render ? 
        <NotificationComponent type={type} visible={visible} message={message} /> 
    : null;
    return { notify, Notification }
}
