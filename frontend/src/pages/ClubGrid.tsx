import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowId, GridRowParams, GridRowsProp } from '@mui/x-data-grid';
import NavBar from "./components/NavBar";
import { Button, Stack } from '@mui/material';
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { useEffect } from 'react';
import { getClubs } from "../slices/clubSlice";
import { getUser } from "../slices/authSlice";

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
  
  const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);
  const clubs = useAppSelector((state) => state.club.clubs);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (basicUserInfo) {
      dispatch(getUser(basicUserInfo.id));
    }
  }, [basicUserInfo]);

  useEffect(() => {
    dispatch(getClubs());
  }, [clubs]);

  const handleJoin = (name: string) => {
    console.log(name + " " + basicUserInfo?.name)
  }
  

  let admins = useAppSelector((state) => state.auth.basicUserInfo);

  React.useEffect(() => {
    const rows: DataRowModel[] = [];
    
    if (clubs) {
      for (let i = 0; i < clubs.length; i += 1) {
        const row: DataRowModel = {
          id: i,
        };

        row['name'] = clubs[i].name;
        row['description'] = clubs[i].description
        row['admins'] = clubs[i].admins
        row['members'] = clubs[i].members

        rows.push(row);
      }
    }

    const columns: GridColDef[] = [
      { field: 'name', headerName: 'Name', width: 180, editable: true },
      { field: 'description', headerName: 'Description', width: 180, editable: true },
      { field: 'admins', headerName: 'Admins', width: 180, editable: false },
      { field: 'members', headerName: 'Members', width: 180, editable: false },
      {
        field: "join",
        headerName: "",
        sortable: false,
        renderCell: ({ row }: Partial<GridRowParams>) =>
          <Button onClick={() => handleJoin(row['name'])}>
            Join
          </Button>,
      },
    ];

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