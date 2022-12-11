import { Container } from "./styles";

import Search from "../components/search";
import CategorySlide from "../components/categorySlide";
import { useSelector } from "react-redux";

const Index = () => {
  const { movies, series } = useSelector((state) => state.movie);

  return (
    <Container>
      <div className="showcase">
        <div className="text">
          <h1>Watch Something Incredible</h1>
        </div>
      </div>
      <Search />

      {movies <= 0 ? null : <CategorySlide movies={movies} category="Movies" />}

      {series <= 0 ? null : <CategorySlide movies={series} category="Series" />}
    </Container>
  );
};

export default Index;
