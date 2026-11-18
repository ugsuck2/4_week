import './Quiz04.css'
import { useState } from 'react';

function Quiz04() {

    let [boxState, setBoxState] = useState(0);

    let boxCount = [];

    for(let i=0; i<boxState; i++) {
        boxCount.push(
            <div key={i} className='box'>박스</div>
        )
    }

    return(
            <div>
                <button onClick={()=>{

                    setBoxState(boxState + 1);
                    }}> 추가
                </button><br></br>
                <button onClick={()=>{
                    setBoxState(boxState - 1)
                }}>삭제</button>
                <div style={{display:'flex' , flexWrap : 'wrap'}}>
                {boxCount}
                </div>
                
            </div>
            )
        }   
                
        
    


export default Quiz04;