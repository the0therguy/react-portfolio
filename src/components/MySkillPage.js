import React from "react";
import styled, {ThemeProvider} from "styled-components";
import {lightTheme} from "./Themes";
import {Design, Develope} from "./AllSvgs";

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  
  font-family: 'Ubuntu Mono',monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Title = styled.h2`
    display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

`

const MySkillPage = () => {
    return (

            <ThemeProvider theme={lightTheme}>
                <Box>
                    <Main>
                        <Title>
                            <Design width={40} height={40}/>
                            Designer

                        </Title>
                    </Main>
                    <Main>

                    </Main>
                </Box>

            </ThemeProvider>

    )

}

export default MySkillPage