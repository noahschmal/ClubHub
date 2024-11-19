import React, { useEffect } from "react";
import { getClubs } from "../slices/clubSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { Button } from "@mui/material";


const ClubList = () => {

  const dispatch = useAppDispatch();

  const basicClubInfo = useAppSelector((state) => state.club.basicClubInfo);
  
  useEffect(() => {
    dispatch(getClubs());
  }, [basicClubInfo]);

  console.log(basicClubInfo);

  

  const handleClubs = async () => {
    console.log(basicClubInfo)
  };

  return (
    <>
      <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleClubs}>
        Get Club
      </Button>
    </>
  );
}

export default ClubList;