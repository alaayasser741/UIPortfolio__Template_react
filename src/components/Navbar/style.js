import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarSection = styled.div`
  padding-block: 2rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  z-index: 999;
  height: 100px;
  position: relative;
`;
export const Navbar__Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Navbar__Logo = styled.h1`
  a {
    color: #eb5424;
  }
`;
export const Navbar__Links = styled.ul`
  display: flex;
  gap: 1rem;
  align-items: center;
  @media (width <768px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 5%;
    margin-block-start: 1rem;
    padding-block: 1.5rem;
    background: #eb5424;
    padding-inline: 2rem;
    align-items: start;
    li{
      a{
        color:#fff;
      }
    }
    &:after{
    content: '';
    position: absolute;
    border: 15px solid;
    border-color: transparent transparent #eb5424 transparent;
    bottom: 100%;
    right: 0;
    }
    gap:1.3rem;
    li{
      position: relative;
      padding-block-end:.3rem;
      &:before{
        content:"";
        width : 0%;
        height:3px;
        background:#fff;
        position: absolute;
        top:100%;
        transition: 0.3s;
      }
      &:hover{
        &:before{
        width : 100%;
        }
      }
    }
    a{
      &:hover{
        color:#fff;
      }
    }
  }

  }
`;
export const Links__Anchor = (styled.a, styled(Link))`
font-size: 1.1rem;
font-weight: 600;
color:#000;
&:hover{
    color:#eb5424;
}
`;
export const Menu__Icon = styled.svg`
  display: none;
  @media (width <768px) {
    display: block;
    cursor: pointer;
    &:hover {
      color: #eb5424;
    }
  }
`;
