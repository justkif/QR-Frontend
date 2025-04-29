export default function LineInputComponent({ type, value, setValue, placeholder }) {
    return (
        <div className='border-b-2 border-b-black'>
            <input 
                type={`${type}`}
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                className='p-2 mt-4 outline-none'
                placeholder={`${placeholder}`}                        
                required 
            />
        </div>
    );
}
