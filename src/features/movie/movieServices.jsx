import axios from "axios";
import { tokenConfig } from "../tokenConfig";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=86d2c299";

// Get all Product
const getMovies = async (values) => {
  let params = {
    s: values.search,
  };

  const {data} = await axios.get(`${API_URL}`, tokenConfig(null, params));
  return data;
  // }
};
// Get all Product
const getMovie = async (values) => {
  // const { search, range, category} = values
  let params = {
    s: values.search,
  };

  const {data} = await axios.get(`${API_URL}`, tokenConfig(null, params));
  return data;
  
};

const movieServices = {
  getMovies,
  getMovie
};

export default movieServices;
