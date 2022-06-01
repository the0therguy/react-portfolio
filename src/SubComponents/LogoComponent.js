import React from "react";
import styled from 'styled-components'
import {DarkTheme} from "../components/Themes";
import {NavLink} from "react-router-dom";

const Logo = styled.h1`
  display: inline-block;
  color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
  font-family: "Pacifico", cursive;

  position: fixed;
  left: 2rem;
  z-index: 3;

`

const LogoComponent = (props) => {
    return (
        <NavLink to={'/'}>
            <Logo color={props.theme}>
                chowdhuryy ifty
            </Logo>
        </NavLink>
    )
}

export default LogoComponent