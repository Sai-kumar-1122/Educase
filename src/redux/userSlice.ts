import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  fullName: string;
  phone: string;
  email: string;
  password: string;
  company: string;
  isAgency: boolean;
}

const initialState: UserState = {
  fullName: "",
  phone: "",
  email: "",
  password: "",
  company: "",
  isAgency: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
