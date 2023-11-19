import {Box} from "@mui/material";
import React from "react";
import {DataGrid} from "@mui/x-data-grid";

function QualificationDataGrid(params) {
    const {data} = params;

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    const columns = [
        {
            field: 'title',
            headerName: '資格名',
            width: 150,
        },
        {
            field: 'rank',
            headerName: '等級',
            width: 150,
        },
        {
            field: 'date',
            headerName: '取得年',
            type: 'number',
            width: 110,
        },
    ];

    return (
        <Box sx={{ width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                disableRowSelectionOnClick
                hideFooter
                disableColumnFilter
                disableColumnSelector
                disableEval
                disableColumnMenu
                disableVirtualization
                disableDensitySelector

            />
        </Box>
    );
}

export default QualificationDataGrid;