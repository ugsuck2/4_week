import ColorBox from "./ColorBox";
import { useState } from "react";

function Prac4() {

  let [boxList, setBoxList] = useState(['red','blue','green']);

  return(

    <div>
      {
        boxList.map((value,index)=>{
          return(
            <ColorBox bgcolor={value} key={index}></ColorBox>
          )
        })
      }
    </div>
  )
}

export default Prac4;