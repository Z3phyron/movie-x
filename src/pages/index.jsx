import { Container } from "./styles";

import Search from "../components/search";
import CategorySlide from "../components/categorySlide";
import { useSelector } from "react-redux";
import useReactSimpleMatchMedia from "react-simple-matchmedia";
import { useEffect, useRef } from "react";

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

      {movies && <CategorySlide movies={movies} category="Movies" />}

      {series && <CategorySlide movies={series} category="Series" />}
    </Container>
  );
};

export default Index;
