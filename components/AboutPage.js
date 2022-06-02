import React from "react";
import styled, {keyframes, ThemeProvider} from "styled-components";
import {DarkTheme} from "./Themes";
import LogoComponent from "../SubComponents/LogoComponent";
import SocialIcons from "../SubComponents/SocialIcons";
import ParticleComponent from "../SubComponents/ParticleComponent";
import astronaut from "../assets/Images/spaceman.png"

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 108vh;
  position: absolute;
  overflow: hidden;  


  &>*:first-child{
    margin-right: 1rem;
  }
`
const float = keyframes`
    0% { transform: translateY(-10px)}
    50% { transform: translateY(15px) translateX(15px)}
    100% { transform: translateY(-10px)}
`
const Spaceman = styled.div`
position: inherit;
  top: 10%;
  right: 5%;
  width: 18vw;
  animation: ${float} 4s ease infinite;
  img{
    width: 100%;
    height: auto;
  }
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 35vh;
  z-index: 3;
  line-height: 1.5;
  
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 6rem;
  
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`
const Main1 = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: 23vw;
  height: 20vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 25rem;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`
const Main2 = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: 23vw;
  height: 20vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(31.5rem + 5vw);
  top: 25rem;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`



const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            {/*<PowerButton/>*/}
            <LogoComponent theme='dark'/>
            <SocialIcons theme='dark'/>

            <Box>
                <ParticleComponent theme="dark"/>
                <Spaceman>
                    <img src={astronaut} alt="spaceman"/>
                </Spaceman>
                <Main>
                    I am a skilled IT specialist with an established
                    track record in website development and database
                    management. I have great technical abilities as
                    well as outstanding interpersonal abilities,
                    allowing me to work with a diverse group of
                    people.
                    <br/>
                    My life motto is "I can and I will".
                </Main>
                <Main1>
                        Currently Working:
                    <br/>
                    Pyramid,
                            ReactJS,
                            BERT Algorithm,
                            WebSocket
                </Main1>
                <Main2>
                    Interest:
                    <br/>
                    NLP, transfer learning, websocket, transformer algorithm
                </Main2>
            </Box>

        </ThemeProvider>

    )

}

export default AboutPage