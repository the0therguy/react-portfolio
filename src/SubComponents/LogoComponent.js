import React from "react";
import styled from 'styled-components'

const Logo = styled.h1`
display: inline-block;
color: ${props => props.theme.text};
font-family: "Pacifico",cursive;

position: fixed;
left: 2rem;
z-index: 3;

`

const LogoComponent = () => {
    return (
        <Logo>
            chowdhuryy ifty
        </Logo>
    )
}

export default LogoComponent