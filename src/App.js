import React, {useState, useRef} from 'react';
import StartPoint from './component/StartPoint';
import ChoosePocketmon from './component/ChoosePocketmon';
import Combat from './component/Combat';



function App() {

  const [start, setStart] = useState(false);

  const onClick = () =>{
    setStart(true);
    console.log('시작');
  }

  

  const [goPick, setGOPick] = useState(false);

  const onClick2 = () =>{
    setGOPick(true);
    console.log('픽 시작');
  }

  const [beforeCombat, setBeforeCombat] = useState(false);

  const selectBtn = () =>{
        setGOPick(false);
        setBeforeCombat(true);
        console.log('전투 전');
  }
  

  const [startCombat, setStartCombat ] = useState(false);

  const fightBtn = () =>{
    setStartCombat(true);
  }

  //const putRef = useRef();
  //putRef.current.focus();
 
    if(beforeCombat&&goPick){
      return(
        <Combat onClick={fightBtn} startCombat={startCombat}></Combat>
      )
    }else{
      if(goPick) return <ChoosePocketmon onClick={selectBtn}></ChoosePocketmon>;
       return (
  
      <div className="App">
        <StartPoint onClick={onClick} onClick2={onClick2} start={start} goPick={goPick} beforeCombat={beforeCombat} ></StartPoint>
      </div>
    );

    }
    
  
 
}

export default App;
