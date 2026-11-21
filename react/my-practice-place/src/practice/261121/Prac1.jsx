import { useState } from "react";
import ColorBox from './ColorBox'

function Prac1() {

  let [colors, setColors] = useState(['red','blue','green','black']);

  return(
    <div>
      {
        colors.map((value,index)=>{
          return(
          <ColorBox color={value} key={index} onDelete={()=>{
            let temp = [...colors];
            temp = temp.filter((_,idx)=>{
              return(
                idx != index
              )
            })
            setColors(temp);
          }}> 
          </ColorBox>

        )})
      }
    </div>
  )
}

export default Prac1;