import { useState } from 'react';
import LoadingComponent from '../components/LoadingComponent';

export default function useLoading() {
    const [loading, setLoading] = useState(false);
    const showLoading = () => setLoading(true);
    const hideLoading = () => setLoading(false);
    const Loading = () => loading ? <LoadingComponent /> : null;
    return { showLoading, hideLoading, Loading }
}
