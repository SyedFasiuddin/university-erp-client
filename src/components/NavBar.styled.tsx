import { NavLink as Link } from "react-router-dom"
import styled from "styled-components"

const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`

const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    text-align: center;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`

const NavBar = () => {
    return (
        <Nav>
            <NavLink to='/'>
                <img src='kbnlogo.png' alt="logo" style={{ "height": "80px" }} />
            </NavLink>
            <NavMenu>
                <NavLink to='/about'>
                    About
                </NavLink>
                <NavLink to='/services'>
                    Services
                </NavLink>
                <NavLink to='/contact-us'>
                    Contact Us
                </NavLink>
                <NavLink to='/sign-up'>
                    Sign Up
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/signin'>Login</NavBtnLink>
            </NavBtn>
        </Nav>
    )
}

export default NavBar

