import { TOKEN_POST } from "../api";
import createAsyncSlice from "./helper/createAsyncSlice";

const slice = createAsyncSlice({
  name: "token",
  fetchConfig: (user) => TOKEN_POST(user),
});

export const fetchToken = slice.asyncAction;

export const { resetState: resetTokenState } = slice.actions;

export default slice.reducer;
