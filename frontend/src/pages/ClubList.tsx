import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

export default function IsCellEditableGrid() {
  return (
    <Box
      sx={(theme) => ({
        height: 400,
        width: '100%', '& .MuiDataGrid-cell--editable': {
          bgcolor: 'rgb(217 243 190)', ...theme.applyStyles('dark', { bgcolor: '#376331', }),
        },
      })}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        isCellEditable={(params) => params.id === 1}
      />
    </Box>
  );
}

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 180, editable: true },
  { field: 'description', headerName: 'Description', width: 180, editable: true },

  {
    field: 'members',
    headerName: 'Members',
    width: 240,
    editable: true,
  },
 
];

const rows: GridRowsProp = [
  {
    id: 1,
    name: "Club 1",
    description: "Club 1 description",
    members: "you",
  },
  {
    id: 2,
    name: "Club 2",
    description: "Club 2 description",
    members: "not you :(",
  },
];