import { useState } from "react";

function Gs10(){

  const [num,setNum] = useState(0);



  return(
    <div>
      <p>{num}</p>
      <button onClick={()=>{
        setNum(num+1);
      }}>+1증가</button>
      <button onClick={()=>{
        setNum(0)
      }}>초기화</button>
    </div>
  )
}

export default Gs10;