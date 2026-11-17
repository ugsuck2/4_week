import {useState} from 'react'

function Quiz01() {

    const [even, setEven] = useState(0);
    
    return(
        <div>
            <button onClick={()=>{
                
                
                
                setEven(even+2)   
                console.log(even);
            }}>짝수출력</button>
            <p style={{color : 'red'}}>{even}</p>
        </div>
    )
}

export default Quiz01;