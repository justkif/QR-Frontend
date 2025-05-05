import { useState } from 'react';
import TableComponent from '../components/TableComponent';

export default function useTable() {
    const [tableData, setTableData] = useState(null);
    const table = (data) => setTableData(data);
    const Table = () => tableData ?
        <TableComponent
            type={tableData.type}
            data={tableData.data}
            onClick={tableData.onClick}
        />
    : null;
    return { table, Table }
}
