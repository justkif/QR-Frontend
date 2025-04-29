import ConvertTime from '../../../utils/ConvertTime';

export default function useRunnerGetAll() {
    const manager = [
        'ordinalNumber', 
        'fullName', 
        'gender', 
        'area', 
        'isPresent', 
        'timePresent', 
        'whoScan', 
        'imageLink'
    ]
    return {
        manager,
        ConvertTime
    }
}
