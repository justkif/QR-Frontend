import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import GetAttribute from '../utils/GetAttribute';
import useLogout from './useLogout';

export default function useSideBar() {
    const [menu, setMenu] = useState(false);
    const menuRef = useRef();
    const username = GetAttribute('username');
    const role = GetAttribute('role');
    const location = useLocation();
    const logout = useLogout();
    const items = [
        { label: 'QR', to: '/' },
        { label: 'Change Password', to: '/password' },
        { label: 'Scanner', to: '/scanner', role: ['scanner', 'manager', 'admin'] },
        { label: 'Manager', to: '/manager', role: ['manager', 'admin'] },
        { label: 'Admin', to: '/admin', role: ['admin'] },
        { label: 'User', to: '/admin/user', role: ['admin'] }
    ]
    const visibleItems = items.filter(
        (item) => !item.role || item.role.includes(role)
    );
    const handleMenu = () => setMenu(!menu);
    useEffect(() => {
        const handler = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenu(false);
            }
        }
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);
    return {
        menu,
        handleMenu,
        menuRef,
        username,
        role,
        location,
        visibleItems,
        logout
    }
}
