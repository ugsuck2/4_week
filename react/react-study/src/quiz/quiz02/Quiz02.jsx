import { useState } from "react"
import './Quiz02.css'



function Quiz02() {

    let [num,setNum] = useState(0)

    let arrNum = ['하나','둘','셋'];
    
    

    return(
        <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
            <p  className="center">{arrNum[num]}</p>
            <button onClick={()=>{  
                setNum((num+1)%arrNum.length)
                num = arrNum[i+1]


            }} >
            변경버튼</button>
        </div>
    )
}

export default Quiz02;