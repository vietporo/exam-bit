import styled from 'styled-components'
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { PiMapPinAreaBold } from 'react-icons/pi';


export const Nav = styled.nav`
background: #F5F5F5;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 999;
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;
align-items: center;

${Container}
`;

export const NavLogo = styled(Link)`
color: #0F4C81;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
font-weight: bold;

`;

export const NavIcon = styled(PiMapPinAreaBold)`
margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
display:none;
@media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size:1.8rem;
    cursor: pointer;
}
`;

export const NavMenu = styled.ul`
display: flex;
  align-items: center;
  justify-content: flex-end; 
  list-style: none;
  font-weight: bold;
  text-align: center;
  flex-grow: 1; 

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
}
`;

export const NavItem = styled.li`
height: 80px;
margin-right: 2rem; 

border-bottom: 2px solid transparent;

&:hover {
    border-bottom: 2px solid #4b59f7;
}

@media screen and (max-width: 960px) {
    width:100%;

    &:hover {
        border-bottom: none;
    }
}
`;

export const NavLinks = styled(Link)`
color: #0F4C81;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;

@media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
        color: #4b59f7;
        transition: all 0.3s ease
    }
}
`;

export const NavItemBtn = styled.li`
    display: flex;
    align-items: center;
    
@media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
}

`;

export const NavBtnLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
padding: 8px 16px;
height: 100%;
width: 100%;
border: none;
outline: none;

`;