import { useState } from "react";

function Prac2() {

  let [boxState, setBoxState] = useState(['red','blue','green']);

  return(

    <div>
      {
        boxState.map((value,index)=>{
          return(
            <div style={{width:'100px',height:'100px',backgroundColor:value}} key={index}></div>
          )
        })
      }
      <button onClick={()=>{
        let temp = [];
        temp = [...boxState];
        temp.push('yellow');
        setBoxState(temp);
      }}>노란색추가</button>
    </div>
  )
}

export default Prac2;