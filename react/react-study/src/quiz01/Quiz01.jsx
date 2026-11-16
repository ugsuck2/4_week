import {useState} from 'react'

function Quiz01() {

    const [even, setEven] = useState(0);
    
    return(
        <div>
            <button onClick={()=>{
                
                
                
                setEven(even+2)   
                console.log(even);
            }}>count증가</button>
            <p style={{color : 'red'}}>{even}</p>
        </div>
    )
}

export default Quiz01;