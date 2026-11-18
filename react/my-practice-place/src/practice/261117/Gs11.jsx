import { useState } from "react";

function Gs11(){

  const [modalFlag,setModalFlag] = useState(false)

  return(
    <div>
      <button onClick={()=>{
        setModalFlag(true)
      }}>Modal 열기</button>
            {
                modalFlag && <Modal/>
            }
    </div>
    
  )
}

export default Gs11;