import React from "react";
import styled from "styled-components";
import Me from "../assets/Images/profile-img.png"
import {motion} from "framer-motion";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
    width: 65vw;
  height: 40vh;
  display: flex;
  
  //below gradient is create two border
  
  background: linear-gradient(
    to-right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50% ) bottom,
  linear-gradient(
    to-right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50% ) top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${props => props.theme.body};
  border-right: 2px solid ${props => props.theme.text};
  z-index: 1;
`
const SubBox = styled.div`
    width: 50%;
  position: relative;
  display: flex;
  
  .pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
  }
`

const Text = styled.div`
    font-size: calc(1em + 1.5vw);
  color: ${props=> props.theme.body};
  padding: 2rem;
  cursor: pointer;
  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
    
  &>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
    


  }
`

const Intro = () => {

    return (
        <Box initial={{height: 0}} animate={{height:'55vh'}} tranisition={{ type: 'spring', duration:2, delay:1 }}>
            <SubBox>
                <Text>
                    <h2>
                        Hi,
                    </h2>
                    <h4>
                        I am Mohammad Bakibillah Chowdhuryy Ifty
                    </h4>
                    <br/>
                    <h6>
                        I am a student from department of CSE, East West University, Bangladesh.
                    </h6>

                </Text>
            </SubBox>
            <SubBox>
                <motion.div initial={{opacity: 0}} animate={{opacity:1}} tranisition={{ duration:1, delay:2 }}>
                    <img className="pic" src={Me} alt="profile-pic" />
                </motion.div>
            </SubBox>

        </Box>
    )
}

export default Intro