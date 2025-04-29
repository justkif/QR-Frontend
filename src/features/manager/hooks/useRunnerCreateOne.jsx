import { useState } from 'react';

export default function useRunnerCreateOne() {
    const [ordinalNumber, setOrdinalNumber] = useState('');
    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState('male');
    const [area, setArea] = useState('ARHN');
    return {
        ordinalNumber,
        setOrdinalNumber,
        fullName,
        setFullName,
        gender,
        setGender,
        area,
        setArea
    }
}
