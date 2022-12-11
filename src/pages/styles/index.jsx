import styled from "styled-components";
import lg from "../../assets/showcase_lg.png";
import md from "../../assets/showcase_md.png";
import sm from "../../assets/showcase_sm.png";

export const Container = styled.div`
  width: 100%;

  .showcase {
    padding: 10% 5%;
    position: relative;
    display: flex;

    align-items: center;
    background-image: url(${lg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    /* height: 80vh; */
    overflow: hidden;

    @media screen and (max-width: 900px) {
      background-image: url(${md});
      text-align: center;
      justify-content: center;
    }
    @media screen and (max-width: 500px) {
      background-image: url(${sm});
      justify-content: center;
    }

    .text {
      z-index: 3;
      color: #fff;
      font-size: 35px;
      width: 45%;
      @media screen and (max-width: 500px) {
        width: 100%;
        font-size: 20px;
      }
    }
  }
`;
