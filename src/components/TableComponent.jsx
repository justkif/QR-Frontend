import useRunnerGetAll from '../features/manager/hooks/useRunnerGetAll';
import useUserGetAll from '../features/user/hooks/useUserGetAll';
import FunctionButtonComponent from './/FunctionButtonComponent';

export default function Table({ type, data, onClick }) {
    const {
        manager,
        ConvertTime
    } = useRunnerGetAll();
    const {
        userHeaders
    } = useUserGetAll();
    return (
        <div className='overflow-auto max-h-[80vh] shadow-2xl'>
            <table className='table-auto w-full'>
                <thead>
                    <tr className='font shadow-lg'>
                        {type === 'manager' && 
                            manager.map((header) => (
                                <th key={header} className='px-4 py-4 text-left'>{header}</th>
                            ))
                        }
                        {type === 'user' && 
                            userHeaders.map((header) => (
                                <th key={header} className='px-4 py-4 text-left'>{header}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {type === 'manager' && (
                        data.map((runner) => (
                            <tr key={runner.ordinalNumber} className='even:bg-gray-100'>
                                {manager.map((header) => (
                                    <td 
                                        key={header} 
                                        className={`px-4 py-4 
                                            ${header === 'ordinalNumber' ? 'text-blue-500 underline decoration-blue-500' : ''}
                                        `}>
                                            {header === 'isPresent' ? (
                                                runner.isPresent ? 'Yes' : 'No'
                                            ) : header === 'timePresent' ? (
                                                ConvertTime(runner.timePresent)
                                            ) : (
                                                runner[header]
                                            )}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                    {type === 'user' && (
                        data.map((user) => (
                            <tr key={user.username} className='even:bg-gray-100'>
                                {userHeaders.map((header) => (
                                    <td key={header} className='px-4 py-4'>
                                        {header === 'actions' ? (
                                            <div className='flex space-x-10 text-white'>
                                                <FunctionButtonComponent 
                                                    onClick={() => onClick('updatePasswordAdmin', user.username)}
                                                    label={'Change Password'}
                                                />
                                                <FunctionButtonComponent 
                                                    onClick={() => onClick('updateRole', user.username)}
                                                    label={'Change Role'}
                                                />
                                            </div>
                                        ) : (
                                            user[header]
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
