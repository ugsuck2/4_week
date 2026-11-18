import './Quiz04.css'
import { useState } from 'react';

function Quiz04_2(){

    let [boxState, setBoxState] = useState(0);

    let boxCount = [];

    for(let i=0;i<boxState;i++) {
        boxCount.push(
            <div key={i} className='box'>박스</div>
        )
    }

    return(

        <div>
            <button onClick={()=>{
                console.log(boxState)
                setBoxState(boxState+1);
            }}>추가</button> <br></br>
            <button onClick={()=>{
                if(boxState>0) {
                setBoxState(boxState-1);
                }
            }}>삭제</button>
            <div style={{display:'flex',flexWrap:'wrap'}}>{boxCount}</div>
        </div>
    )
}

export default Quiz04_2;