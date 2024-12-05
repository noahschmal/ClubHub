import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";

type Event = {
  name: string;
  club?: string; //club Id
  description: string;
};

type EventBasicInfo = {
  id: string;
  name: string;
  description: string;
};

type EventProfileData = {
    name: string;
    description: string;
};

type AuthApiState = {
  basicEventInfo?: EventBasicInfo | null;
  eventProfileData?: EventProfileData | null;
  status: "idle" | "loading" | "failed";
  error: string | null;
};


const initialState: AuthApiState = {
  basicEventInfo: localStorage.getItem("eventInfo")
    ? JSON.parse(localStorage.getItem("eventInfo") as string)
    : null,
  eventProfileData: undefined,
  status: "idle",
  error: null,
};


export const createEvent = createAsyncThunk("createEvent", async (data: Event, thunkAPI) => {
    return await axiosInstance.post(
      "/createEvent",
      data
    ).then(function(response) {
      const resData = response.data;
  
      localStorage.setItem("eventInfo", JSON.stringify(resData));
    
      return thunkAPI.fulfillWithValue(resData);
 
    }).catch(function (e) {
      console.log("This is not an issue");
      return thunkAPI.rejectWithValue(e);
    });
    return thunkAPI.rejectWithValue("IT FUCKED UP");
});

export const getEvent = createAsyncThunk("events/profile", async (eventId: string) => {
    const response = await axiosInstance.post(
      `/getEvent`,
      {id: eventId}
    );
    return response.data;
  }
);

export const getEvents = createAsyncThunk(
  "/events",
  async () => {
    const response = await axiosInstance.get(
      `/getEvents`
    );
    return response.data;
  }
);


const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(createEvent.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(
            createEvent.fulfilled,
          (state, action) => {
            state.status = "idle";
            state.basicEventInfo = action.payload;
	  }
        )
        .addCase(createEvent.rejected, (state, action) => {
          state.status = "failed";
	  console.log(action);
          state.error = action.error.message || "CreateEvent failed";
        })
        .addCase(getEvent.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(getEvent.fulfilled, (state, action) => {
          state.status = "idle";
          state.eventProfileData = action.payload;
        })
        .addCase(getEvent.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message || "Get event data failed";
        })
        .addCase(getEvents.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(getEvents.fulfilled, (state, action) => {
          state.status = "idle";
          state.eventProfileData = action.payload;
        })
        .addCase(getEvents.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message || "Get event data failed";
        });
    },
  });

export default eventSlice.reducer;
