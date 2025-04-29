export default function HandleViewButtonComponent({ handleView, label }) {
    return (
        <button 
            className='relative px-10 py-2 rounded w-1/2' 
            onClick={handleView}
        >{label}
        </button>
    );
}
