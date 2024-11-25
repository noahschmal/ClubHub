import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";

type Club = {
  name: string;
  admin?: string; //users id
  description: string;
};

type ClubBasicInfo = {
  id: string;
  name: string;
  description: string;
};

type ClubProfileData = {
    name: string;
    description: string;
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


export const createClub = createAsyncThunk("createClub", async (data: Club, thunkAPI) => {
    return await axiosInstance.post(
      "/createClub",
      data
    ).then(function(response) {
      const resData = response.data;
  
      localStorage.setItem("clubInfo", JSON.stringify(resData));
    
      return thunkAPI.fulfillWithValue(resData);
 
    }).catch(function (e) {
      console.log("This is not an issue");
      return thunkAPI.rejectWithValue(e);
    });
    return thunkAPI.rejectWithValue("IT FUCKED UP");
});

export const getClub = createAsyncThunk("clubs/profile", async (clubId: string) => {
    const response = await axiosInstance.post(
      `/getClub`,
      {id: clubId}
    );
    return response.data;
  }
);

export const getClubs = createAsyncThunk(
  "/clubs",
  async () => {
    const response = await axiosInstance.get(
      `/getClubs`
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
          (state, action) => {
            state.status = "idle";
            state.basicClubInfo = action.payload;
	  }
        )
        .addCase(createClub.rejected, (state, action) => {
          state.status = "failed";
	  console.log(action);
	  /*if (action.error.message == 'Request failed with status code 401') {
            action.error.message = 'Error 401: Club name is taken';
	  }
	  else if (action.error.message == 'Request failed with status code 400') {
            action.error.message = 'Error 400: Club failed to create\nUnexpected Behavior';
	  }*/
	  
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
        })
        .addCase(getClubs.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(getClubs.fulfilled, (state, action) => {
          state.status = "idle";
          state.clubProfileData = action.payload;
        })
        .addCase(getClubs.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message || "Get club data failed";
        });
    },
  });

export default clubSlice.reducer;
