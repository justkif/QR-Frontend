import { useState } from 'react';

export default function useUpdateRole() {
    const [newRole, setNewRole] = useState('runner');
    return {
        newRole,
        setNewRole
    }
}
