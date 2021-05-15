import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import waterP from './img/꼬북이.png'
import fireP from './img/파이리.png'
import grassP from './img/이상해씨.png'
import redButton from './img/redButton.jpg'

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
    width: 70vw;
    height: 300px;
    background-color: white;
    position: absolute;
    left: 50%;
    top: 65%;
    transform: translate( -50%, 0% );
    border: 5px solid #115998;
    border-radius: 90px;

    font: 50px "Sunflower" ;
    text-align: left;
    line-height: 80px;
    
    
    
    img{
        
        animation: ${DungDungMotion} 0.3s linear 0s infinite alternate; 
        margin-top: 0;
        width: 30px;
        height: 20px;
    }

    button{
        position: absolute;
        right: 70px;
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
const Background = styled.div`
    display: block;
    height: 100vh;
    width: 100vw;
    background: linear-gradient( to bottom, #DCF0F7, #5FA997 );
    
    
    
    span{
        position: absolute;
        left: 50%;
        top: 20%;
        transform: translate( -50%, 0% );
        display: flex;
        gap: 90px;
    }
    
    img{
       
    }
`
const Pocketmonimg = styled.img`
height: 300px;
width: 300px;
border: 10px solid #512792;
border-radius: 40px;

border-image-slice: 1;
background-color: white;


&:hover{
    border: 10px solid #E8E204;
}
`

function ChoosePocketmon( { onClick }){
    
    const [pocketmon, setPocketmon] = useState(0);

    const clickWater = () =>{
        setPocketmon(1);
        console.log(pocketmon);
    }
    const clickFire = () =>{
        setPocketmon(2);
        console.log(pocketmon);
    }
    const clickGrass = () =>{
        setPocketmon(3);
        console.log(pocketmon);
    }

    

    if(pocketmon == 0) {
        return(
            <Background>
                <span>
                    <Pocketmonimg src={waterP} onClick={clickWater} ></Pocketmonimg>
                    <Pocketmonimg src={fireP} onClick={clickFire}></Pocketmonimg>
                    <Pocketmonimg src={grassP} onClick={clickGrass}></Pocketmonimg> 
                </span>
                <TalkBox>
                    &nbsp;&nbsp;&nbsp;포켓몬을 선택해주겠어?
                    
                </TalkBox>
            </Background>
        )
    }else if(pocketmon == 1){
        return(
            <Background>
                <span>
                    <Pocketmonimg src={waterP} onClick={clickWater} ></Pocketmonimg>
                    <Pocketmonimg src={fireP} onClick={clickFire}></Pocketmonimg>
                    <Pocketmonimg src={grassP} onClick={clickGrass}></Pocketmonimg> 
                </span>
                <TalkBox>
                    &nbsp;&nbsp;&nbsp;정말 꼬북이를 선택하겠어?
                    <button onClick={onClick} >선택하기 <img src={redButton}></img></button>
                </TalkBox>
            </Background>
        )
    }else if(pocketmon == 2){
        return(
            <Background>
                <span>
                    <Pocketmonimg src={waterP} onClick={clickWater} ></Pocketmonimg>
                    <Pocketmonimg src={fireP} onClick={clickFire}></Pocketmonimg>
                    <Pocketmonimg src={grassP} onClick={clickGrass}></Pocketmonimg> 
                </span>
                <TalkBox>
                    &nbsp;&nbsp;&nbsp;정말 파이리를 선택하겠어?
                    <button onClick={onClick} >선택하기 <img src={redButton}></img></button>
                </TalkBox>
            </Background>
        )
    }else if(pocketmon == 3){
        return(
            <Background>
                <span>
                    <Pocketmonimg src={waterP} onClick={clickWater} ></Pocketmonimg>
                    <Pocketmonimg src={fireP} onClick={clickFire}></Pocketmonimg>
                    <Pocketmonimg src={grassP} onClick={clickGrass}></Pocketmonimg>
                </span>
                <TalkBox>
                    &nbsp;&nbsp;&nbsp;정말 이상해씨를 선택하겠어?
                    <button onClick={onClick} >선택하기 <img src={redButton}></img></button>
                </TalkBox>
            </Background>
        )
    }

}

export default ChoosePocketmon;