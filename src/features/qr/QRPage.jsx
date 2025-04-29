import useQR from './hooks/useQR';

export default function QRPage() {
    const {
        src,
        width,
        username,
        fullName,
        area,
        Loading,
        Notification
    } = useQR();
    return (
        <div>
            {src && (
                <div className='flex flex-col items-center'>
                    <img 
                        src={src} 
                        className={width <= 500 ? 'w-full' : ''} 
                        style={width > 500 ? { width: `${width / 3}px` } : {}}
                    />
                    <p className='text-center font-semibold text-2xl'>
                        {username} - {fullName} - {area}
                        </p>
                </div>
            )}
            {Loading()}
            {Notification()}
        </div>
    );
}
