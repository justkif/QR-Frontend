export default async function getScanned() {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    try {
        const response = await fetch(`${backendUrl}/user/scanned`, {
            headers: { 'token': `${localStorage.getItem('token')}` }
        });
        if (!response.ok) throw new Error(await response.json());
        return await response.json(); 
    } catch (err) {
        throw err.message;
    }
}
