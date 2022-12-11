import { configureStore } from "@reduxjs/toolkit";
import  movieSlice  from "../features/movie/movieSlice";
import ThemeSlice from "../features/theme/ThemeSlice";


export const store = configureStore({
  reducer: {
    theme: ThemeSlice,
    
    movie: movieSlice,
    
  },
});
