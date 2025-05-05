import { useState } from 'react';

export default function useUpdatePasswordAdmin() {
    const [newPassword, setNewPassword] = useState('');
    return {
        newPassword,
        setNewPassword
    }
}
