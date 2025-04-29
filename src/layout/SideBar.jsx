import { HiOutlineMenu } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import useSideBar from '../hooks/useSideBar';
import { Link } from 'react-router-dom';

export default function SideBar() {
    const {
        menu, 
        handleMenu, 
        menuRef, 
        username, 
        role, 
        location, 
        visibleItems, 
        logout 
    } = useSideBar();
    return (
        <div>
            <HiOutlineMenu className='size-[30px]' onClick={handleMenu} />
            {menu && (
                <div
                    ref={menuRef}
                    className='fixed top-0 left-0 w-64 h-full bg-white z-30 p-4 shadow-2xl'
                >
                    <div className='flex mb-2'>
                        <MdOutlineClose className='size-[30px]' onClick={handleMenu} />
                        <p className='text-lg ml-4'>{role} - {username}</p>
                    </div>
                    <ul>
                        {visibleItems.map((item) => (
                            <li
                                className={`flex items-center py-2 px-3 my-1 font-medium text-gray-600 rounded-md
                                    ${location.pathname === item.to && 'bg-gradient-to-tr from-yellow-500 to-yellow-200 text-yellow-800'}
                                `}
                                key={item.to}
                            ><Link to={item.to} className='w-full h-full' onClick={handleMenu}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={logout}
                        className='flex items-center py-2 px-3 font-medium text-gray-600 w-full'
                    >Logout
                    </button>
                </div>
            )}
        </div>
    );
}
