/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Link } from 'react-router-dom';
import {Links__Anchor,Navbar__Links,NavbarSection,Navbar__Content,Navbar__Logo} from'./style.js';


const Navbar = () => {
    return (
        <NavbarSection>
            <div className="container">
                <Navbar__Content>
                    <Navbar__Logo><Link to='/'>UI Profile</Link></Navbar__Logo>
                    <Navbar__Links>
                        <li><Links__Anchor to='/'>Home</Links__Anchor></li>
                        <li><Links__Anchor href="#">Work</Links__Anchor></li>
                        <li><Links__Anchor href="#">Portfolio</Links__Anchor></li>
                        <li><Links__Anchor href="#">Resume</Links__Anchor></li>
                        <li><Links__Anchor href="#">About</Links__Anchor></li>
                        <li><Links__Anchor to='/Contact'>Contact</Links__Anchor></li>
                    </Navbar__Links>
                </Navbar__Content>
            </div>
        </NavbarSection>
    );
}
export default Navbar;