import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getUser, logout } from "../slices/authSlice";
import { getClubs } from "../slices/clubSlice";
import NavBar from "./components/NavBar";
import "./Home.css";


const Account = () => {
  const dispatch = useAppDispatch();

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

  return (
    <>
      <NavBar />
      <div className='body'>
        <h1>Home</h1>
        <h4>Name: {userProfileInfo?.name}</h4>
        <h4>Email: {userProfileInfo?.email}</h4>
      </div>
    </>
  );
};

export default Account;