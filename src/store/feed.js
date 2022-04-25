import creatAsyncSlice from "./helper/createAsyncSlice";

const slice = creatAsyncSlice({
  name: "feed",
  initialState: {
    list: [],
    pages: 1,
    infinite: true,
  },
  reducers: {
    addPhotos(state, action) {
      state.list.push(...action.payload);
      if (action.payload) state.infinite = false;
    },
  },
});
