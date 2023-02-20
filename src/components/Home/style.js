import styled from "styled-components";
export const Home__Section = styled.div`
  min-height: 90vh;
  position: relative;
  background: url('images/home-bg.jpg') center / cover no-repeat;
  .container {
    height: 100%;
  }
`;
export const Home__info = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  gap: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Home__title = styled.h2`
  font-size: 2.5rem;
  color: #5e5e5e;
  font-weight: 700;
  margin-block-end: 2rem;
`;

export const Home__span = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: #eb5424;
  margin-block-end: 1rem;
`;
export const Home__disc = styled.p`
  font-size: 1.2rem;
  color: #888;
  line-height: 1.3;
  span {
    color: #000;
    font-weight: 600;
  }
`;
export const Home__btn = styled.a`
  background: #eb5424;
  color: #fff;
  padding: 0.8rem 1.5rem;
  margin-inline: auto;
  font-weight: 600;
`;
