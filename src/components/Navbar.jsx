import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { FiX } from "react-icons/fi";
import { CgMenuRight } from 'react-icons/cg'
import { IconContext } from 'react-icons'
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavLinks, NavItem } from '../styles/Navbar.style';
import { navbarData } from '../data/NavbarData';

const Navbar = ({ hide }) => {
  const [show, setShow] = useState(false);
  return (
    <Nav hide={hide}>
      <NavbarContainer>
        <NavLogo to="/" onClick={scroll.scrollToTop}>
          <NavIcon src={logo}/>
        </NavLogo>

        {!hide && (
          <>
            <IconContext.Provider value={{ color: '#5300bc' }}>
              <MobileIcon onClick={() => setShow(!show)}>
                {show ? <FiX /> : <CgMenuRight />}
              </MobileIcon>
            </IconContext.Provider>
            <NavMenu hide={hide} show={show}>
              {navbarData.map((el, index) => (
                <NavItem key={index}>
                  <NavLinks
                    spy={true}
                    duration={500}
                    smooth={true}
                    exact="true"
                    offset={-79}
                    onClick={() => setShow(false)}
                    to={el.to}
                  >
                    {el.text}
                  </NavLinks>
                </NavItem>
              ))}
            </NavMenu>
          </>
        )}
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;