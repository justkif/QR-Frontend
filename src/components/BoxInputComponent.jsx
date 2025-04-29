export default function BoxInputComponent({ value, setValue, placeholder }) {
    return (
        <input
            type='text'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className='w-full border px-3 py-2 rounded mt-2'
            placeholder={`${placeholder}`}
            required
        />
    );
}
