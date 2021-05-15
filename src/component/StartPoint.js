import React from 'react';
import styled, { keyframes } from 'styled-components';
import Docter from './img/Docter.png';
import redButton from './img/redButton.jpg'

const Background = styled.div`
    display: block;
    height: 100vh;
    width: 100vw;
    background: linear-gradient( to bottom, #DCF0F7, #5FA997 );

    div{

    }
`

const DocterImg = styled.div`
    position: absolute;
    left: 50%;
    top: -5%;
    transform: translate( -60%, 0% );
    img{
        height: 900px;
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

function StartPoint( {onClick, onClick2, start, beforeCombat}) {

    if( beforeCombat&&start){
        return (
                <Background>
                    <DocterImg>
                        <img src={Docter}></img>
                    </DocterImg>
                    <TalkBox beforeCombat={beforeCombat}>
                        
                        <div>
                        &nbsp;&nbsp;&nbsp;이제 모의전투가 시작될거야!<br/> &nbsp;&nbsp;&nbsp;준비됐어?
                             
                        </div>
                        <button onClick={onClick2}>준비됐어! <img src={redButton}></img></button>
                    </TalkBox>
                    
                </Background>
        )
    }else{
        if(start) {
            return(
                <Background>
                    <DocterImg>
                        <img src={Docter}></img>
                    </DocterImg>
                    <TalkBox>
                        
                        <div>
                        &nbsp;&nbsp;&nbsp;포켓몬을 정해주겠어?
                             
                        </div>
                        <button onClick={onClick2}>정하러가기 <img src={redButton}></img></button>
                    </TalkBox>
                    
                </Background>
            )
            
    
        }
        else {
            return(
                <Background>
                    <DocterImg>
                        <img src={Docter}></img>
                    </DocterImg>
                    <TalkBox>
                        
                        <div>
                        &nbsp;&nbsp;&nbsp;안녕, 친구!<br/> &nbsp;&nbsp;&nbsp;만나서 반가워! 
                             
                        </div>
                        <button onClick={onClick}>시작하기 <img src={redButton}></img></button>
                    </TalkBox>
                    
                </Background>
            )
        }
    }
    
    
        
    
}

export default StartPoint;