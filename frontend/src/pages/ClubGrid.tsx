import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowId, GridRowParams, GridRowsProp } from '@mui/x-data-grid';
import NavBar from "./components/NavBar";
import { Button, Stack } from '@mui/material';
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { useEffect } from 'react';
import { getClubs } from "../slices/clubSlice";



const handleJoin = (row: GridRowParams) => {
  console.log(row)
}

const columns_club: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 180, editable: true },
  { field: 'description', headerName: 'Description', width: 180, editable: true },
  { field: 'admins', headerName: 'Admins', width: 180, editable: false },
  { field: 'members', headerName: 'Members', width: 180, editable: false },
  {
    field: "join",
    headerName: "",
    sortable: false,
    renderCell: ({ row }: Partial<GridRowParams>) =>
      <Button onClick={() => handleJoin(row)}>
        Join
      </Button>,
  },
];

export interface DataRowModel {
  id: GridRowId;
  [price: string]: number | string;
}

export interface GridData {
  columns: GridColDef[];
  rows: DataRowModel[];
}

function useData(rowLength: number, columnLength: number) {
  const [data, setData] = React.useState<GridData>({ columns: [], rows: [] });

  const clubs = useAppSelector((state) => state.club.basicClubInfo);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getClubs());
  }, [clubs]);

  React.useEffect(() => {
    const rows: DataRowModel[] = [];

    for (let i = 0; i < rowLength; i += 1) {
      const row: DataRowModel = {
        id: i,
      };

      if (clubs) {
        row['name'] = clubs.name;
        row['description'] = clubs.description
      }

      rows.push(row);
    }

    const columns: GridColDef[] = columns_club;

    setData({
      rows,
      columns,
    });
  }, [rowLength, columnLength]);

  return data;
}

export default function ClubGrid() {

  const data = useData(100, 3);

  return (
    <>
     <NavBar />
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid {...data} columnBufferPx={100} />
    </div>
    </>
  );
}

// export default function ClubGrid() {
//   return (
//     <>
//       <NavBar />
//       <Box
//         sx={(theme) => ({
//           height: 400,
//           width: '100%',
//           '& .MuiDataGrid-cell--editable': {
//             bgcolor: 'rgb(217 243 190)',
//             ...theme.applyStyles('dark', {
//               bgcolor: '#376331',
//             }),
//           },
//         })}
//       >
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           isCellEditable={(params) => params.id !== 5}
//         />
//       </Box>
//     </>
//   );
// }

// const columns: GridColDef[] = [
//   { field: 'name', headerName: 'Name', width: 180, editable: true },
//   { field: 'description', headerName: 'Description', width: 180, editable: true },
//   { field: 'admins', headerName: 'Admins', width: 180, editable: false },
//   { field: 'members', headerName: 'Members', width: 180, editable: false },
//   {
//     field: "join",
//     headerName: "",
//     sortable: false,
//     renderCell: ({ row }: Partial<GridRowParams>) =>
//       <Button onClick={() => handleJoin(row)}>
//         Join
//       </Button>,
//   },
// ];

// const rows: GridRowsProp = [
//   {
//     id: 1,
//     name: "Club 1",
//     description: "Description for Club 1",
//     admins: "Noah Schmalenberger",
//     members: "Joshua Mowrey"
//   },
//   {
//     id: 2,
//     name: "Club 2",
//     description: "Description for Club 2",
//     admins: "Noah Schmalenberger",
//     members: "Joshua Mowrey"
//   },
//   {
//     id: 3,
//     name: "Club 3",
//     description: "Description for Club 3",
//     admins: "Noah Schmalenberger",
//     members: "Joshua Mowrey"
//   },
//   {
//     id: 4,
//     name: "Club 4",
//     description: "Description for Club 4",
//     admins: "Noah Schmalenberger",
//     members: "Joshua Mowrey"
//   },
//   {
//     id: 5,
//     name: "Club 5",
//     description: "Description for Club 5",
//     admins: "Josua Mowrey",
//     members: "Noah Schmalenberger"
//   },
// ];