import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import clubReducer from "./slices/clubSlice";


const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    club: clubReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;