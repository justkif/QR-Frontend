import useRunnerCreateOne from '../features/manager/hooks/useRunnerCreateOne';
import useRegisterUser from '../features/user/hooks/useRegisterUser';
import useUpdatePasswordAdmin from '../features/user/hooks/useUpdatePasswordAdmin';
import useUpdateRole from '../features/user/hooks/useUpdateRole';
import BoxInputComponent from './BoxInputComponent';
import DropdownComponent from './DropdownComponent';

export default function ModalComponent({ data, type, cancel, confirm }) {
    const {
        ordinalNumber,
        setOrdinalNumber,
        fullName,
        setFullName,
        gender,
        setGender,
        area,
        setArea
    } = useRunnerCreateOne();
    const {
        username,
        setUsername,
        password,
        setPassword,
        role,
        setRole
    } = useRegisterUser();
    const {
        newPassword,
        setNewPassword
    } = useUpdatePasswordAdmin();
    const {
        newRole,
        setNewRole
    } = useUpdateRole();
    return (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,0.7)]'>
            <div className='bg-white p-6 rounded-lg shadow-lg max-w-lg font-bold w-11/12'>
                {type === 'confirm' && <p className='whitespace-pre-wrap text-left'>{data}</p>}
                {type === 'runnerCreateOne' && (
                    <div>
                        <BoxInputComponent 
                            value={ordinalNumber}
                            setValue={setOrdinalNumber}
                            placeholder={'Enter a ordinal number'}
                        />
                        <BoxInputComponent 
                            value={fullName}
                            setValue={setFullName}
                            placeholder={'Enter a full name'}
                        />
                        <DropdownComponent 
                            value={gender}
                            setValue={setGender}
                            options={[
                                { value: 'male', label: 'male' },
                                { value: 'female', label: 'female' }
                            ]}
                        />
                        <DropdownComponent 
                            value={area}
                            setValue={setArea}
                            options={[
                                { value: 'ARHN', label: 'ARHN' },
                                { value: 'ARSG', label: 'ARSG' }
                            ]}
                        />
                    </div>
                )}
                {type === 'reset' && <p className='text-black text-center'>Reset all scan data?</p>}
                {type === 'registerUser' && (
                    <div>
                        <BoxInputComponent 
                            value={username}
                            setValue={setUsername}
                            placeholder={'Enter a username'}
                        />
                        <BoxInputComponent 
                            value={password}
                            setValue={setPassword}
                            placeholder={'Enter a password'}
                        />
                        <DropdownComponent 
                            value={role}
                            setValue={setRole}
                            options={[
                                { value: 'runner', label: 'runner' },
                                { value: 'scanner', label: 'scanner' },
                                { value: 'manager', label: 'manager' }
                            ]}
                        />
                    </div>
                )}
                {type === 'updatePasswordAdmin' && 
                    <BoxInputComponent 
                        value={newPassword}
                        setValue={setNewPassword}
                        placeholder={`Enter a new password for ${data}`}
                    />
                }
                {type === 'updateRole' && (
                    <div>
                        <p className='text-black text-center'>Change role of {data}</p>
                        <DropdownComponent 
                            value={newRole}
                            setValue={setNewRole}
                            options={[
                                { value: 'runner', label: 'runner' },
                                { value: 'scanner', label: 'scanner' },
                                { value: 'manager', label: 'manager' }
                            ]}
                        />
                    </div>
                )}
                <div className='flex items-center'>
                    <button
                        className='px-4 py-2 bg-red-500 text-white rounded mt-4 mx-auto w-auto mr-10'
                        onClick={cancel}
                    >Cancel
                    </button>
                    <button
                        className='px-4 py-2 bg-green-500 text-white rounded mt-4 mx-auto w-auto'
                        onClick={() => {
                            if (type === 'runnerCreateOne') {
                                confirm(ordinalNumber, fullName, gender, area);
                            } else if (type === 'registerUser') {
                                confirm(type, null, username, password, role);
                            } else if (type === 'updatePasswordAdmin') {
                                confirm(type, data, newPassword);
                            } else if (type === 'updateRole') {
                                confirm(type, data, newRole);
                            } else {
                                confirm();
                            }
                        }}
                    >Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}
