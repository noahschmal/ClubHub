import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";

type Club = {
  name: string;
  description: string;
};

type ClubBasicInfo = {
  id: string;
  name: string;
  description: string;
};

type ClubProfileData = {
    description: string;
  email: string;
};

type AuthApiState = {
  basicClubInfo?: ClubBasicInfo | null;
  clubProfileData?: ClubProfileData | null;
  status: "idle" | "loading" | "failed";
  error: string | null;
};

const initialState: AuthApiState = {
  basicClubInfo: localStorage.getItem("clubInfo")
    ? JSON.parse(localStorage.getItem("clubInfo") as string)
    : null,
  clubProfileData: undefined,
  status: "idle",
  error: null,
};


export const createClub = createAsyncThunk("createClub", async (data: Club) => {
    const response = await axiosInstance.post(
      "/createClub",
      data
    );
    const resData = response.data;
  
    localStorage.setItem("clubInfo", JSON.stringify(resData));
  
    return resData;
  });

export const getClub = createAsyncThunk(
  "clubs/profile",
  async (clubId: string) => {
    const response = await axiosInstance.get(
      `/clubs/${clubId}`
    );
    return response.data;
  }
);

const clubSlice = createSlice({
    name: "club",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(createClub.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(
            createClub.fulfilled,
          (state, action: PayloadAction<ClubBasicInfo>) => {
            state.status = "idle";
            state.basicClubInfo = action.payload;
          }
        )
        .addCase(createClub.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message || "CreateClub failed";
        })
        .addCase(getClub.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(getClub.fulfilled, (state, action) => {
          state.status = "idle";
          state.clubProfileData = action.payload;
        })
        .addCase(getClub.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message || "Get club data failed";
        });
    },
  });

export default clubSlice.reducer;