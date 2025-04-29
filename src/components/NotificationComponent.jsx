export default function NotificationComponent({ type, visible, message }) {
  return (
    <div
      className={`absolute top-15 left-1/2 -translate-x-1/2 px-4 py-3 rounded shadow-md 
        z-20 w-auto text-center transition-all duration-300 font-semibold
        ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        ${type === 'error' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}
      `}
    >{message}
    </div>
  );
}
