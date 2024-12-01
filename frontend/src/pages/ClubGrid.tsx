import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

export default function ClubGrid() {
  return (
    <Box
      sx={(theme) => ({
        height: 400,
        width: '100%',
        '& .MuiDataGrid-cell--editable': {
          bgcolor: 'rgb(217 243 190)',
          ...theme.applyStyles('dark', {
            bgcolor: '#376331',
          }),
        },
      })}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        isCellEditable={(params) => params.id !== 5}
      />
    </Box>
  );
}

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 180, editable: true },
  { field: 'description', headerName: 'Description', width: 180, editable: true },
  { field: 'admins', headerName: 'Admins', width: 180, editable: false },
  { field: 'members', headerName: 'Members', width: 180, editable: false },
];

const rows: GridRowsProp = [
  {
    id: 1,
    name: "Club 1",
    description: "Description for Club 1",
    admins: "Noah Schmalenberger",
    members: "Joshua Mowrey"
  },
  {
    id: 2,
    name: "Club 2",
    description: "Description for Club 2",
    admins: "Noah Schmalenberger",
    members: "Joshua Mowrey"
  },
  {
    id: 3,
    name: "Club 3",
    description: "Description for Club 3",
    admins: "Noah Schmalenberger",
    members: "Joshua Mowrey"
  },
  {
    id: 4,
    name: "Club 4",
    description: "Description for Club 4",
    admins: "Noah Schmalenberger",
    members: "Joshua Mowrey"
  },
  {
    id: 5,
    name: "Club 5",
    description: "Description for Club 5",
    admins: "Josua Mowrey",
    members: "Noah Schmalenberger"
  },
];