import styled from 'styled-components'

export const Container = styled.div`
/* padding: 20px; */
border: 1px solid #222;
width: 250px;
border-radius: 10px;
display: grid;
grid-gap: 20px;
/* grid-template-rows: 65% auto; */
height: 350px;

@media screen and (max-width: 600px) {
    width: 100%;
}
`
export const Image = styled.div`
  width: 100%;
  /* height: 50px; */
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* padding: 10px 0; */

  .title {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    margin-bottom: 10px;
  }

  .price {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
  }
`;
export const Actions = styled.div`
display: grid;
grid-gap: 10px;

`