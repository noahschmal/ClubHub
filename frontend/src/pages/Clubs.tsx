import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createClub } from "../slices/clubSlice";
import React, { useEffect } from "react";
import { getUser } from "../slices/authSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";


const CreateClub = () => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");


  const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);


  useEffect(() => {
    if (basicUserInfo) {
      dispatch(getUser(basicUserInfo.id));
    }
  }, [basicUserInfo]);

  const handleCreateClub = async () => {
    // This is only a basic validation of inputs. Improve this as needed.
    if (name && description) {
      try {
        await dispatch(
          createClub({
            name,
            admin: basicUserInfo?.id,
            description,
          })
        ).unwrap();
      } catch (e) {
        console.error(e);
      }
    } else {
      // Show an error message.
    }
  };

  return (
    <>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Create Club</Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Club Name"
              name="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="description"
              name="Club Description"
              label="Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleCreateClub}
            >
              Create Club
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default CreateClub;