import { createSlice } from "@reduxjs/toolkit";
import { TOKEN, USER } from "../../consts";
import Cookies from "js-cookie";

const initialState = {
  isAuth: Boolean(Cookies.get(TOKEN)),
  user: localStorage.getItem(USER) || null,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    setAuth(state, { payload }) {
      state.isAuth = true;
      state.user = payload;
    },logout(state) {
      state.isAuth = false;
      state.user = null;
    },
  },
});

const { setAuth, logout } = authSlice.actions;

const {reducer: authReducer} = authSlice
console.log(authReducer, setAuth);

export { setAuth, logout };

export default authReducer;
