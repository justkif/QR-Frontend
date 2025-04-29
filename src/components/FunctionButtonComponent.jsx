export default function FunctionButtonComponent({ ml, onClick, label }) {
    return (
        <button 
            className={`px-4 py-2 rounded bgColor text-white font-semibold my-4
                ${ml && 'ml-3'}
            `}
            onClick={onClick}
        >{label}
        </button>
    );
}
