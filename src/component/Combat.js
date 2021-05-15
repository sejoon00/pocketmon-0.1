import React from 'react';
import styled, { keyframes } from 'styled-components';
import JiuCombat from './img/jiuCombat.png';
import Grandson from './img/grandson.png';
import PocketballRight from './img/pocketballRight.png';
import PocketballLeft from './img/pocketballLeft.png';
import redButton from './img/redButton.jpg';

const Background = styled.div`
    display: block;
    height: 100vh;
    width: 100vw;
    background: linear-gradient( to bottom, #FCF3CF,#F4F6F7,#F4F6F7, #F0F3F4 );

    div{

    }
`
const DungDungMotion = keyframes`
        0% {
            margin-bottom: 0px;
        }
   
        100% {
            transform: translate( 0%, -20% );
        }
    
`
const TalkBox = styled.div`
    display: flex;
    align-items: center;
    width: 98%;
    height: 300px;
    background-color: white ;
    position: absolute;
    left: 50%;
    top: 65%;
    transform: translate( -50%, 0% );
    border: 15px solid #D4AC0D;
    border-radius: 30px;

    font: 50px "Sunflower" ;
    text-align: left;
    line-height: 250px;
    color: black;
    
    
    img{
        
        animation: ${DungDungMotion} 0.3s linear 0s infinite alternate; 
        margin-top: 0;
        width: 30px;
        height: 20px;
    }

    button{
        position: absolute;
        right: 180px;
        bottom: 60px;
        border: none;
        font: 40px "Sunflower" ;
        cursor: pointer;
        background-color: white;
        &:hover {
            text-decoration: underline;
            text-underline-position:under;
        }
    }
`

function Combat({onClick, startCombat, beforeCombat}) {
    const slideLeft = keyframes`
  from {
    transform: ${!startCombat?'translateX(800px)':'translateX(0px)'};
  }
  to {
    transform: ${!startCombat?'translateX(0px)':'translateX(800px)'};
  }
`;
const slideLeft2 = keyframes`
  from {
    transform: ${!startCombat?'translateX(700px)':'translateX(0px)'};
  }
  to {
    transform: ${!startCombat?'translateX(0px)':'translateX(700px)'};;
  }
`;

const slideRight = keyframes`
  from {
    transform: ${!startCombat?'translateX(-700px)':'translateX(0px)'};
  }
  to {
    transform: ${!startCombat?'translateX(0px)':'translateX(-700px)'}
  }
`;

const Jiu = styled.img`
    position: absolute;
    left: 300px;
    top: 220px;
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-name: ${slideRight};
    animation-fill-mode: forwards;
    
    
`

const Green = styled.img`
    position: absolute;
    right: 500px;
    top:20px;
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-name: ${slideLeft};
    animation-fill-mode: forwards;
`

const PRight = styled.img`
    position: absolute;
    top:20px;
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-name: ${slideRight};
    animation-fill-mode: forwards;
`

const PLeft = styled.img`
    position: absolute;
    right: 0;
    top:420px;
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-name: ${slideLeft2};
    animation-fill-mode: forwards;
`
    if(startCombat){
        return(
            <Background>
                <Jiu src={JiuCombat}></Jiu>
                <Green src={Grandson}></Green>
                <PRight src={PocketballRight}></PRight>
                <PLeft src={PocketballLeft}></PLeft>
                <TalkBox>
                    <div 
                    style={{border: '15px solid gray',
                            borderRadius: '10px',
                            width: '100%',
                            height: '90%',
                            
                    }}>
                        &nbsp;&nbsp;&nbsp;무엇을 할까?
                    </div>
                </TalkBox>
            </Background>
        )
    }else{
        return(
            <Background>
                <Jiu src={JiuCombat}></Jiu>
                <Green src={Grandson}></Green>
                <PRight src={PocketballRight}></PRight>
                <PLeft src={PocketballLeft}></PLeft>
                <TalkBox>
                    <div 
                    style={{border: '15px solid gray',
                            borderRadius: '10px',
                            width: '100%',
                            height: '90%',
                            
                    }}>
                        &nbsp;&nbsp;&nbsp;라이벌 '그린'이 전투를 원한다!
                    </div>
                    <button onClick={onClick} >덤벼! <img src={redButton}></img></button>
                </TalkBox>
            </Background>
        )
    }
    
}

export default Combat;