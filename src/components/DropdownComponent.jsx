export default function DropdownComponent({ value, setValue, options }) {
    return (
        <select
            className='w-full border px-3 py-2 rounded mt-2'
            value={value}
            onChange={(e) => setValue(e.target.value)}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
