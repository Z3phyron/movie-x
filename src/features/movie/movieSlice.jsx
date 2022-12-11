import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieServices from "./movieServices";

const initialState = {
  movies: [],
  series: [],
  movie: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};




export const GetMovies = createAsyncThunk(
  "movie/all",
  async (values, thunkAPI) => {
    try {
      return await MovieServices.getMovies(values);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const GetMovie = createAsyncThunk(
  "movie/single",
  async (values, thunkAPI) => {
    try {
      return await MovieServices.getMovie(values);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder  
      .addCase(GetMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.movies = action.payload.Search.filter((i) => i.Type === "movie");
        state.series = action.payload.Search.filter(i => i.Type === "series")
      })
      .addCase(GetMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.movie = null;
      })
      .addCase(GetMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.movie = action.payload;
      })
      .addCase(GetMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.movie = null;
      })
  },
});

export const { reset } = movieSlice.actions;
export default movieSlice.reducer;
