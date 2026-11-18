import { useState } from "react";


function Gs07(){
    
    const [fruitsList,setFruitsList] = useState(['사과','바나나','포도']);
    
    return(
        <div>
            <h4>
            {
                fruitsList.map((fruit,index)=>{
                    return(
                        <span key={index}>{fruit}</span>
                    )
                })
            }
            </h4>
            <button onClick={()=>{
                let temp = [...fruitsList]
                temp.push('수박')
                setFruitsList(temp)
            }}>과일 추가하기</button>
        </div>
    )
}

export default Gs07;