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
  clubs?: any | null;
  myclubs?: any | null;
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

    //console.log(response.data)
    return response.data;
  }
);

export const getClubs = createAsyncThunk("getClubs", async () => {
    const response = await axiosInstance.post(
      `/getClubs`
    );
    const retdata = response.data;
    localStorage.setItem("clubs", JSON.stringify(retdata));
    return retdata;
  }
);

export const addToClub = createAsyncThunk("addToClub", async (data: {clubName: string, userId: string}) => {
    const response = await axiosInstance.post(
      `/addToClub`,
      data,
    );
  }
);

export const removeFromClub = createAsyncThunk("removeFromClub", async (data: {clubName: string, userId: string}) => {
  const response = await axiosInstance.post(
    `/removeFromClub`,
    data,
  );
}
);

export const addAdminToClub = createAsyncThunk("addAdminToClub", async (data: {clubName: string, userId: string}) => {
    const response = await axiosInstance.post(
      `/addAdminToClub`,
      data,
    );
  }
);

export const clubByUser = createAsyncThunk("clubByUser", async (data: {userId: string}) => {
  const response = await axiosInstance.post(
    `/clubByUser`,
    data,
  );
  const retdata = response.data;
  localStorage.setItem("clubs", JSON.stringify(retdata));
  return retdata;
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
	      })
        .addCase(createClub.rejected, (state, action) => {
          state.status = "failed";
	        console.log(action);
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
          state.clubs = action.payload;
        })
        .addCase(getClubs.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message || "Get club data failed";
        })
	      .addCase(addToClub.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(addToClub.fulfilled, (state, action) => {
          state.status = "idle";
          state.clubs = action.payload;
        })
        .addCase(addToClub.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message || "Get club data failed";
        })
        .addCase(removeFromClub.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(removeFromClub.fulfilled, (state, action) => {
          state.status = "idle";
          state.clubs = action.payload;
        })
        .addCase(removeFromClub.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message || "Get club data failed";
        })
	      .addCase(addAdminToClub.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(addAdminToClub.fulfilled, (state, action) => {
          state.status = "idle";
          state.clubs = action.payload;
        })
        .addCase(addAdminToClub.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message || "Get club data failed";
        })
        .addCase(clubByUser.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(clubByUser.fulfilled, (state, action) => {
          state.status = "idle";
          state.myclubs = action.payload;
        })
        .addCase(clubByUser.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message || "Get club data failed";
        });
    },
  });

export default clubSlice.reducer;
