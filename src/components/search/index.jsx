import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetMovies, reset } from "../../features/movie/movieSlice";
import { Container } from "./styles";

const Index = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (search) {
      const getData = setTimeout(() => {
        dispatch(GetMovies({ search }));
        dispatch(reset());
      }, 1000);

      return () => clearTimeout(getData);
    }
  }, [dispatch, search]);
  return (
    <Container>
      <label htmlFor="search">Search</label>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
    </Container>
  );
};

export default Index;
