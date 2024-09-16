import React, {useState, useEffect} from 'react'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  NavIcon, 
  MobileIcon,
  NavMenu,
  NavItem, 
  NavLinks,
  NavBtnLink,
  NavItemBtn
} from './Navbar.element'
import { Button } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const [button, setButton] = useState(true)
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton)

  return (
    <>
    <IconContext.Provider value={{color: '#0F4C81'}}>
        <Nav>
          <NavbarContainer> 
            <NavLogo to='/'>
              <NavIcon />
                Famee.ly
            </NavLogo>

            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars/>}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/feature'>Features</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/pricing'>Pricing</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/blog'>Blog</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/faqs'>FAQs</NavLinks>
              </NavItem>
            </NavMenu>

              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/get-started'>
                    <Button primary> Get Started</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/get-started'>
                    <Button fontBig primary>
                      Get Started
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>

          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar