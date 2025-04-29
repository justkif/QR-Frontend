import { jwtDecode } from 'jwt-decode';

export default function GetAttribute(attribute) {
    try {
        const token = localStorage.getItem('token');
        if (!token) return null;
        const decoded = jwtDecode(token);
        return decoded[attribute];
    } catch (err) {
        return null;
    }
}
