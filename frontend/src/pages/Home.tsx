import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getUser, logout } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
import { getClubs } from "../slices/clubSlice";
import NavBar from "./components/NavBar";


const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);
  const userProfileInfo = useAppSelector((state) => state.auth.userProfileData);

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
      console.log(clubs[0])
  };

  return (
    <>
      <NavBar />
      <h1>Home</h1>
      <h4>Name: {userProfileInfo?.name}</h4>
      <h4>Email: {userProfileInfo?.email}</h4>
      
      <input type="text"></input>

      <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleClubs}>
        Get Club
      </Button>
      <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleLogout}>
        Logout
      </Button>
    </>
  );
};

export default Home;