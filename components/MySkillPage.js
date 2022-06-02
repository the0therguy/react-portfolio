import React from "react";
import styled, {ThemeProvider} from "styled-components";
import {lightTheme} from "./Themes";
import {Develope} from "./AllSvgs";
import C_Plus from "../assets/c-logo-png-transparent.png"
import postgresql from "../assets/elephant.png"
import LogoComponent from "../SubComponents/LogoComponent";
import SocialIcons from "../SubComponents/SocialIcons";
import ParticleComponent from "../SubComponents/ParticleComponent";
import python from "../assets/pyhton-logo.png"
import js from "../assets/javascript-js-logo-2949701702-seeklogo.com.png"
import C from "../assets/c-programming.png"
import html from "../assets/html.png"
import CSS from "../assets/css.png"
import MySQL from "../assets/mysql.png"
import SQlite from "../assets/sqlite.png"
import django from "../assets/django.png"

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 108vh;
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  


  &>*:first-child{
    margin-right: 1rem;
  }
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 80vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;


  font-family: 'Ubuntu Mono',monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};;
  }
`

const Title = styled.h2`
    display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  
  &>*:first-child{
    margin-right: 1rem;
  }
`

const Description = styled.div`
color: ${props => props.theme.text};
  font-size: calc(0.5em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover &{
      color: ${props => props.theme.body};
  }
  
  strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,p{
    margin-left: 2rem;
  }
`

const MySkillPage = () => {
    return (
            <ThemeProvider theme={lightTheme}>
                <LogoComponent theme='light'/>
                <SocialIcons theme='light'/>
                <Box>
                    <ParticleComponent theme="light"/>
                    <Main>
                        <Title>
                            <Develope width={40} height={40}/>
                            Developer
                        </Title>
                        <Description>
                            I am a freshly graduate student, who loves to develop software and learn new things.
                        </Description>
                        <Description>
                            <strong>Language</strong>
                            <div>
                                <p>
                                    <img className="python" height={45} src={python} title="python" alt="Python" />
                                    &nbsp;
                                    <img title="JavaScript" height={45} src={js} alt="JavaScript" />
                                    &nbsp;
                                    <img title="c" height={45} src={C} alt="C"/>
                                    &nbsp;
                                    <img title="c++" height={45} src={C_Plus} alt="C++"/>
                                    &nbsp;
                                    <img title="HTML5" alt="HTML5" width={45} src={html} />
                                    &nbsp;
                                    <img title="CCS3" alt="CSS3" width={45} src={CSS} />
                                </p>
                            </div>
                            <strong>Database</strong>
                            <p>
                                <img title="MySQL" height="45" src={MySQL} alt="MySQL"/>
                                &nbsp;
                                <img title="SQLite" height="45" src={SQlite} alt="SQLite"/>
                                &nbsp;
                                <img title="PostgreSQL" height={45} src={postgresql} alt="PostgreSQL"/>
                            </p>
                            <strong>Framework or Libraries</strong>
                            <p>
                                <img title="Django" height={45} src={django} alt="Django"/>
                                &nbsp;
                                <img title="Django REST" height="45" src="https://ksr-ugc.imgix.net/assets/011/705/984/4ea78430d3ad7dc88106a7b973248ba7_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1552&h=873&fit=crop&v=1463687041&auto=format&frame=1&q=92&s=022bf4c5b7efa27ab20395c0da4eff7b" alt="DjangoRestFramework"/>
                                &nbsp;
                                <img title="React" height="45" src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" alt="ReactJS"/>
                                &nbsp;
                                <img title ="FastAPI" height="45" src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" alt="FastAPI"/>
                                &nbsp;
                                <img title="Pyramid" height={45} src="https://trypyramid.com/img/pyramid-60x60.png" alt="Pyramid"/>
                            </p>
                            <strong>Tools</strong>
                            <p>
                                <img title="Linux" height="45" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/linux/linux.png" alt="linux"/>
                                &nbsp;
                                <img title="git" height="45" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" alt="git"/>
                                &nbsp;
                                <img title="vs-code" height="45" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" alt="vs-code"/>
                                &nbsp;
                                <img title="Jupyter Notebook"  height="45" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/jupyter-notebook/jupyter-notebook.png" alt="Jupyter Notebook"/>
                                &nbsp;
                                <img title="Pycharm" height="45" src="https://upload.wikimedia.org/wikipedia/commons/1/1d/PyCharm_Icon.svg" alt="Pycharm"/>
                                &nbsp;
                                <img title="terminal" alt="Terminal" width="45px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />
                            </p>
                        </Description>
                    </Main>
                </Box>

            </ThemeProvider>

    )

}

export default MySkillPage