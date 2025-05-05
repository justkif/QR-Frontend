export default async function registerUser(username, password, role) {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    try {
        const response = await fetch(`${backendUrl}/user/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': `${localStorage.getItem('token')}` 
            },
            body: JSON.stringify({ username, password, role })
        });
        if (!response.ok) throw new Error(await response.json());
        return await response.json(); 
    } catch (err) {
        throw err.message;
    }
}
