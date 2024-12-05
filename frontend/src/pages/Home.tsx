import React, { useEffect } from "react";
import { Button, Grid2 } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getUser, logout } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
import { getClubs } from "../slices/clubSlice";
import NavBar from "./components/NavBar";
import ClubCard from "./components/ClubCard";
import "./Home.css";


const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);

  const clubs = useAppSelector((state) => state.club.clubs);

  useEffect(() => {
    if (basicUserInfo) {
      dispatch(getUser(basicUserInfo.id));
    }
  }, [basicUserInfo]);

  useEffect(() => {
    dispatch(getClubs());
  }, [clubs]);
  
  //console.log(basicUserInfo)
  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate("/login");
    } catch (e) {
      console.error(e);
    }
  };

  const handleClubs = async () => {
    if (clubs)
      console.log(clubs)
  };
  const handleCreateClubs = async () => {
    navigate("/clubs")
  };

  const CreateClubCards = () => {
    if (clubs) {
      return clubs.map((clubs: any) => (
        <Grid2 size="auto">
          <ClubCard name={clubs.name} description={clubs.description} user={basicUserInfo?.name} />
        </Grid2>
      ))
    }

    return (
      <p>No clubs found.</p>
    )
  }

  return (
    <>
      <NavBar />
      <div className='body'>
        <h1>Home</h1>
        <h4>My Clubs</h4>

        <Grid2 container spacing={2}>
          <CreateClubCards />
        </Grid2>
        
        
        <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleCreateClubs}>
          Create Club
        </Button>
        <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleClubs}>
          Get Club
        </Button>
        <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </>
  );
};

export default Home;