import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {EmailLogo, Facebook, Github, LeetCode, LeetCodeBnW, LinkedIn, LinkedInBnW} from '../components/AllSvgs'
import {DarkTheme} from "../components/Themes"


const Icons = styled.div`
display:flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;

z-index:5;

&>*:not(:last-child){
    margin: 0.5rem 0;
}
`

const Line = styled.span`
width: 2px;
height: 10rem;
background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`
const SocialIcons = (props) => {

    return (
        <Icons>
            <div>
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://github.com/the0therguy"}}>
                    <Github width = {30} height={30} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body } />
                </NavLink>
            </div>

            <div>
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://www.facebook.com/ifty.chowdhury.3"}}>
                    <Facebook width = {30} height={30} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body } />
                </NavLink>
            </div>

            <div>
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://www.linkedin.com/in/ifty-chowdhuryy/"}}>
                    <LinkedInBnW width = {30} height={30} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body } />
                </NavLink>
            </div>

            <div>
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://leetcode.com/nblues399/"}}>
                    <LeetCodeBnW width = {30} height={30} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body } />
                </NavLink>
            </div>

            <div>
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"mailto:ifty545@gmail.com"}}>
                    <EmailLogo width = {30} height={30} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body } />
                </NavLink>
            </div>


            <Line color = {props.theme}/>
        </Icons>
    )
}

export default SocialIcons