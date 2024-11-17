import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Clubs from "./pages/Clubs";
import DefaultLayout from "./layout/defaultLayout";
import ProtectedLayout from "./layout/protectedLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/clubs" element={<Clubs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
