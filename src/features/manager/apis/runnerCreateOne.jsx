export default async function runnerCreateOne(ordinalNumber, fullName, gender, area) {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    try {
        const response = await fetch(`${backendUrl}/runner`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': `${localStorage.getItem('token')}` 
            },
            body: JSON.stringify({ ordinalNumber, fullName, gender, area })
        });
        if (!response.ok) throw new Error(await response.json());
        return await response.json(); 
    } catch (err) {
        throw err.message;
    }
}
