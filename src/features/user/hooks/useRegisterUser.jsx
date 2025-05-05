import { useState } from 'react';

export default function useRegisterUser() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('runner');
    return {
        username,
        setUsername,
        password,
        setPassword,
        role,
        setRole
    }
}
