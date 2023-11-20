import {Box} from "@mui/material";
import React from "react";
import {DataGrid} from "@mui/x-data-grid";

function QualificationDataGrid(params) {
    const {data} = params;

    const columns = [
        {
            field: 'title',
            headerName: '資格名',
            width: 180,
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