import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: number;
  email: string;
  username: string;
  phone: string;
  role: string;
  token: string
  provider: Provider | null;
}

enum Provider {
  GOOGLE,
  TWITTER,
  FACEBOOK,
  CREDENTIAL,
}

const initialState: UserState = {
  id: 0,
  email: "",
  username: "",
  phone: "",
  role: "",
  token: "",
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
      state.provider = action.payload.provider;
    },
    logoutAction: (state) => {
      state.id = 0;
      state.email = "";
      state.username = "";
      state.phone = "";
      state.role = "";
      state.token = "";
      state.provider = null;
    },
  },
});

export const { loginAction, logoutAction } = userSlice.actions;
export default userSlice.reducer;
