//import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
//import axiosInstance from "../api/axiosInstance";
//
//type Event = {
//  name: string;
//  club?: string; //club Id
//  description: string;
//};
//
//type EventBasicInfo = {
//  id: string;
//  name: string;
//  description: string;
//};
//
//type EventProfileData = {
//    name: string;
//    description: string;
//};
//
//type AuthApiState = {
//  basicEventInfo?: EventBasicInfo | null;
//  eventProfileData?: ClubProfileData | null;
//  status: "idle" | "loading" | "failed";
//  error: string | null;
//};
//
//
//const initialState: AuthApiState = {
//  basicClubInfo: localStorage.getItem("eventInfo")
//    ? JSON.parse(localStorage.getItem("eventInfo") as string)
//    : null,
//  eventProfileData: undefined,
//  status: "idle",
//  error: null,
//};
//
//
//export const createClub = createAsyncThunk("createClub", async (data: Club, thunkAPI) => {
//    return await axiosInstance.post(
//      "/createClub",
//      data
//    ).then(function(response) {
//      const resData = response.data;
//  
//      localStorage.setItem("eventInfo", JSON.stringify(resData));
//    
//      return thunkAPI.fulfillWithValue(resData);
// 
//    }).catch(function (e) {
//      console.log("This is not an issue");
//      return thunkAPI.rejectWithValue(e);
//    });
//    return thunkAPI.rejectWithValue("IT FUCKED UP");
//});
//
//export const getClub = createAsyncThunk("events/profile", async (eventId: string) => {
//    const response = await axiosInstance.post(
//      `/getClub`,
//      {id: eventId}
//    );
//    return response.data;
//  }
//);
//
//export const getClubs = createAsyncThunk(
//  "/events",
//  async () => {
//    const response = await axiosInstance.get(
//      `/getClubs`
//    );
//    return response.data;
//  }
//);
//
//
//const eventSlice = createSlice({
//    name: "event",
//    initialState,
//    reducers: {},
//    extraReducers: (builder) => {
//      builder
//        .addCase(createClub.pending, (state) => {
//          state.status = "loading";
//          state.error = null;
//        })
//        .addCase(
//            createClub.fulfilled,
//          (state, action) => {
//            state.status = "idle";
//            state.basicClubInfo = action.payload;
//	  }
//        )
//        .addCase(createClub.rejected, (state, action) => {
//          state.status = "failed";
//	  console.log(action);
//          state.error = action.error.message || "CreateClub failed";
//        })
//        .addCase(getClub.pending, (state) => {
//          state.status = "loading";
//          state.error = null;
//        })
//        .addCase(getClub.fulfilled, (state, action) => {
//          state.status = "idle";
//          state.eventProfileData = action.payload;
//        })
//        .addCase(getClub.rejected, (state, action) => {
//          state.status = "failed";
//          state.error = action.error.message || "Get event data failed";
//        })
//        .addCase(getClubs.pending, (state) => {
//          state.status = "loading";
//          state.error = null;
//        })
//        .addCase(getClubs.fulfilled, (state, action) => {
//          state.status = "idle";
//          state.eventProfileData = action.payload;
//        })
//        .addCase(getClubs.rejected, (state, action) => {
//          state.status = "failed";
//          state.error = action.error.message || "Get event data failed";
//        });
//    },
//  });
//
//export default eventSlice.reducer;
