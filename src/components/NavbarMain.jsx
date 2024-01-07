import React from 'react'
import { NavLink } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Navbar';

export default function NavbarMain() {
  return (
    <Wrapper>
        <div className="nav-center">
            <span className="logo">CocktailMix</span>
            <div className="nav-links">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/news-letter">NewsLetter</NavLink>
            </div>
        </div>
    </Wrapper>
  )
}