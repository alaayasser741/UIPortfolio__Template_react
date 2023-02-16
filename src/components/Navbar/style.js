import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarSection = styled.div`
padding-block: 2rem;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
margin-block-end:1rem;
`
export const Navbar__Content = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
`
export const Navbar__Logo = styled.h1`
a{
    color:#eb5424;
}
`
export const Navbar__Links = styled.ul`
display: flex;
gap:1rem;
align-items: center;
`
export const Links__Anchor = (styled.a , styled(Link))`
font-size: 1.1rem;
font-weight: 600;
color:#000;
&:hover{
    color:#eb5424;
}
`