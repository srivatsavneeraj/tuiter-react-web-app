import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";
import {
  createTuitThunk,
  deleteTuitThunk,
  findTuitsThunk,
  updateTuitThunk,
} from "../services/tuits-thunks";
const initialState = {
  tuits: [],
  loading: false,
};

const currentUser = {
  userName: "NASA",
  handle: "@nasa",
  image: "nasa.png",
};

const templateTuit = {
  ...currentUser,
  topic: "Space",
  time: "2h",
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
};

const tuitsSlice = createSlice({
  name: "tuits",
  initialState,
  extraReducers: {
    [updateTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id);
      state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload };
    },

    [createTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits.push(payload);
    },

    [deleteTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = state.tuits.filter((t) => t._id !== payload);
    },

    [findTuitsThunk.pending]: (state) => {
      state.loading = true;
      state.tuits = [];
    },
    [findTuitsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = payload;
    },
    [findTuitsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },

  initialState: { tuits: tuits },
  reducers: {
    //   deleteTuit(state, action) {
    //     const index = state.tuits.findIndex(
    //       (tuit) => tuit._id === action.payload
    //     );
    //     state.tuits.splice(index, 1);
    //   },
    //   createTuit(state, action) {
    //     state.tuits.unshift({
    //       ...action.payload,
    //       ...templateTuit,
    //       _id: new Date().getTime(),
    //     });
    //   },
    //   toggleLikes(state, action) {
    //     const tuitId = action.payload;
    //     const tuit = state.tuits.find((tuit) => tuit._id === tuitId);
    //     if (tuit) {
    //       if (tuit.liked) {
    //         // If already liked, after clicking reduce the count
    //         tuit.likes--;
    //       } else {
    //         tuit.likes++;
    //       }
    //       tuit.liked = !tuit.liked; //Change value of tuit.liked from true to false and vice versa
    //     }
    //   },
  },
});

export const { createTuit, deleteTuit, toggleLikes } = tuitsSlice.actions;

export default tuitsSlice.reducer;
