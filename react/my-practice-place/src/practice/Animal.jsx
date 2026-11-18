import './Quiz04.css'
import { useState } from 'react';

function Animal(){

    let [animalCount, setAnimalCount] = useState(0);

    let animalList = [];

    for(let i = 0; i < animalCount; i++) {
        
        animalList.push(
            <div key={i}>
                🐶<br></br>
                강아지</div>
        );
        
    }

    return(
        <div>
            <button onClick={()=>{
                setAnimalCount(animalCount+1);
            }}>추가</button>
            <button onClick={()=>{
                if(animalCount>0){
                setAnimalCount(animalCount-1);
                }
            }}>삭제</button>
            <div style={{display:'flex', flexWrap:'wrap'}}>
                {animalList}
            </div>
        </div>
    )
}

export default Animal