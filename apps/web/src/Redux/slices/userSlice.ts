import { UserState } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserState = {
  id: 0,
  email: "",
  username: "",
  phone: "",
  role: "",
  token: "",
  avatar: "",
  provider: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.phone = action.payload.phone;
      state.role = action.payload.role;
      state.token = action.payload.token;
      state.avatar = action.payload.token;
      state.provider = action.payload.provider;
    },
    logoutAction: (state) => {
      state.id = 0;
      state.email = "";
      state.username = "";
      state.phone = "";
      state.role = "";
      state.token = "";
      state.avatar = "";
      state.provider = null;
    },
  },
});

export const { loginAction, logoutAction } = userSlice.actions;
export default userSlice.reducer;
