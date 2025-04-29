import HandleViewButtonComponent from './components/HandleViewButtonComponent';
import useScanner from './hooks/useScanner';

export default function ScannerPage() {
    const {
        view,
        handleView,
        Modal,
        scanned,
        ConvertTime,
        Loading,
        Notification
    } = useScanner();
    return (
        <div className='overflow-auto h-screen'>
            <div className='flex justify-center mt-5'>
                <div className='relative text-white bg-black p-1 rounded font-semibold'>
                    <div
                        className={`absolute bgColor top-1 bottom-1 transition-all duration-200 rounded
                            ${view === 'scanner' ? 'left-1' : 'left-1/2'}
                        `}
                        style={{ width: 'calc(50% - 0.25rem)' }}
                    ></div>
                    <HandleViewButtonComponent handleView={handleView} label={'Scanner'} />
                    <HandleViewButtonComponent handleView={handleView} label={'History'} />
                </div>
            </div>
            {view === 'scanner' && <div id='reader' className='w-full mt-10'></div>}
            {view === 'history' && (
                <div className='mt-4 overflow-y-auto max-h-[80vh] px-2'>
                    <ul className='flex flex-col items-center text-white text-lg'>
                        {scanned.map((runner) => (
                            <li 
                                className='bg-gray-700 w-5/6 rounded p-2 mt-2'
                                key={runner.ordinalNumber}
                            >
                                <div>
                                    {runner.ordinalNumber} - {runner.fullName}
                                </div>
                                <div>
                                    {runner.gender} - {runner.area}
                                </div>
                                <div className='text-right text-base'>
                                    {ConvertTime(runner.timePresent)}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {Modal()}
            {Loading()}
            {Notification()}
        </div>
    );
}
