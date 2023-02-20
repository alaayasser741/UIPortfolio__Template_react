/* eslint-disable react/jsx-pascal-case */
import React,{useRef} from "react";
import { Link } from 'react-router-dom';
import {Links__Anchor,Navbar__Links,NavbarSection,Navbar__Content,Navbar__Logo,Menu__Icon} from'./style.js';

const Navbar = () => {
    const navRef = useRef();
    const showMenu =()=>{
        navRef.current.classList.toggle("responsive__nav")
    }
    return (
        <NavbarSection>
            <div className="container">
                <Navbar__Content>
                    <Navbar__Logo><Link to='/'>UI Profile</Link></Navbar__Logo>
                    <Navbar__Links ref={navRef}>
                        <li><Links__Anchor to='/'>Home</Links__Anchor></li>
                        <li><Links__Anchor href="#">Work</Links__Anchor></li>
                        <li><Links__Anchor href="#">Portfolio</Links__Anchor></li>
                        <li><Links__Anchor href="#">Resume</Links__Anchor></li>
                        <li><Links__Anchor href="#">About</Links__Anchor></li>
                        <li><Links__Anchor to='/Contact'>Contact</Links__Anchor></li>
                    </Navbar__Links>
                    
                    <Menu__Icon onClick={showMenu} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 18.0048C22 18.5544 21.5544 19 21.0048 19H12.9952C12.4456 19 12 18.5544 12 18.0048C12 17.4552 12.4456 17.0096 12.9952 17.0096H21.0048C21.5544 17.0096 22 17.4552 22 18.0048Z" fill="currentColor" /><path d="M22 12.0002C22 12.5499 21.5544 12.9954 21.0048 12.9954H2.99519C2.44556 12.9954 2 12.5499 2 12.0002C2 11.4506 2.44556 11.0051 2.99519 11.0051H21.0048C21.5544 11.0051 22 11.4506 22 12.0002Z" fill="currentColor" /><path d="M21.0048 6.99039C21.5544 6.99039 22 6.54482 22 5.99519C22 5.44556 21.5544 5 21.0048 5H8.99519C8.44556 5 8 5.44556 8 5.99519C8 6.54482 8.44556 6.99039 8.99519 6.99039H21.0048Z" fill="currentColor" /></Menu__Icon>
                </Navbar__Content>
            </div>
        </NavbarSection>
    );
}
export default Navbar;