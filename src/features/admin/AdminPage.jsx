import useAdmin from './hooks/useAdmin';

export default function AdminPage() {
    const {
        scan,
        handleUpdateScan,
        handleModal,
        Loading,
        Notification,
        Modal
    } = useAdmin();
    return ( 
        <ul className='text-white text-lg flex flex-col items-center'>
            <li className='bg-gray-700 rounded p-2 mt-2 flex items-center w-3/4'>
                <span className='ml-4'>Scan</span>
                <button 
                    className={`px-5 py-2 rounded ml-auto
                        ${scan ? 'bg-green-500' : 'bg-red-500'}
                    `}
                    onClick={handleUpdateScan}
                >{scan ? 'ON' : 'OFF'}
                </button>
            </li>
            <li className='bg-gray-700 rounded p-2 mt-2 flex items-center w-3/4'>
                <span className='ml-4'>Reset</span>
                <button 
                    className='px-5 py-2 rounded ml-auto bg-blue-500'
                    onClick={handleModal}
                >Reset
                </button>
            </li>
            {Loading()}
            {Notification()}
            {Modal()}
        </ul>
    );
}
