import styled from "styled-components";
export const Work__section = styled.div`
  margin-block: 6rem;
`;
export const Work__title = styled.h2`
  text-align: start;
  margin-block-end: 3rem;
  font-size:2.5rem;
`;
export const Work__cards__container = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const Work__card = styled.div`
  max-width: 350px;
  min-width: 300px;
  border: 1px solid #ccc;
  padding: 3rem 2rem 5rem;
  @media (width < 320px) {
    max-width: 100%;
    min-width: 100%;
  }
`;
export const Card__Icon = styled.i`
  color: #eb5424;
  width: 60px;
  height: 60px;
  margin-block: 1rem;
`;
export const Card__title = styled.h3`
  color: #eb5424;
  margin-block-end: 1rem;
  font-size: 1.3rem;
`;
export const Card__line = styled.hr`
  width: 75%;
  margin-inline: auto;
  margin-block-end: 1rem;
  background: #ddd;
  height: 2px;
  border: 0;
`;
export const Card__disc = styled.p`
line-height: 1.3rem;
    color: #777;
`
