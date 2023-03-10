import styled from "styled-components";
export const Portfolio__section = styled.div`
  margin-block-end: 6rem;
`;
export const Portfolio__title = styled.h2`
  text-align: center;
  margin-block-end: 3rem;
  font-size:2.5rem;
`;
export const Img__gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  @media(width<768px){
  grid-template-columns: 1fr;

  }
`;
export const Img__box = styled.div``;
export const Portfolio__img = styled.img`
  width: 100%;
`;
