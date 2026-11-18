import { useState } from "react";

function Prac1() {

  let [boxState, setBoxState] = useState(3);

  let boxCount = [];

  for(let i=0;i<boxState;i++){
    boxCount.push(
      <div className="box" key={i}>박스</div>
    )
  }

  return(
    <div>
      <button onClick={()=>{
        setBoxState(boxState+1)
      }}>박스증가버튼</button>
      {boxCount}
    </div>
  )
}

export default Prac1;