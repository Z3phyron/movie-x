import {
  Container,
  // Detail,
  Image
} from "./styles";
// import { Button } from "@nextui-org/react";
// import { BsHeartFill } from "react-icons/bs";
// import { MdAddShoppingCart } from "react-icons/md";

const Index = (props) => {
  const {movie} = props
  return (
    <Container>
      <Image>
        <img src={movie?.Poster} alt="" />
      </Image>
      
    </Container>
  );
};

export default Index;
