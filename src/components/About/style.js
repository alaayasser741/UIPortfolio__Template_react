import styled from "styled-components";

export const About__Section = styled.div`

  background: url(images/about-bg.jpg) center/cover no-repeat;
`;
export const About__Container = styled.div`
  position: relative;
  min-height: 600px;
`;
export const About__info = styled.div`
  width: 45%;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  text-align: start;
`;
export const About__Span = styled.span`
  color: #eb5424;
  display: block;
  margin-block-start: 1rem;
`;

export const About__disc = styled.p`
  margin-block-end: 1rem;
  line-height: 1.8;
`;

