import { Container, Header, Slide } from "./styles";
import Slider from "../slide";

const Index = (props) => {
  const { movies, category } = props

  return (
    <Container>
      <Header>
        <h2>{category}</h2>
      </Header>
      <Slide>
        <Slider movies={movies} />
      </Slide>
    </Container>
  );
};

export default Index;
