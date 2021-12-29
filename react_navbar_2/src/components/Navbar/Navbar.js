import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {
    return (
        <>
         <Nav>
             <NavLink to="/">
                 <h1>logo</h1>
             </NavLink>

             <Bars />

             <NavMenu>
                 <NavLink to="/about" activeStyle>
                     About
                 </NavLink>

                 <NavLink to="/about" activeStyle>
                     Services
                 </NavLink>

                 <NavLink to="/about" activeStyle>
                     Contact Us
                 </NavLink>

                 <NavLink to="/about" activeStyle>
                     Sign Up
                 </NavLink>

             </NavMenu>

             <NavBtn>
                 <NavBtnLink to='/signin'>Sign In</NavBtnLink>
             </NavBtn>

         </Nav>

        </>
    );
};

export default Navbar;