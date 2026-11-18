import './Quiz05.css'
import { useState } from 'react';
import ColorBox from './ColorBox';

function Quiz05(){

    let [boxCount, setBoxCount] = useState(['red','blue','green','black'])

    let boxOrigin = [];

    for(let i = 0; i<boxCount.length;i++) {
        
        boxOrigin.push(
            <div key={i} className={`box ${boxCount[i]}`}></div>
            )
        }

    
        

        


    return(
        <div>
            <button onClick={()=>{
                // let temp = [...boxCount];
                // temp.unshift('red')
                // setBoxCount(temp)
                setBoxCount(['red',...boxCount])
            }}>앞빨간박스추가</button>

            <button onClick={()=>{
                let temp = [...boxCount];
                temp.unshift('blue')
                setBoxCount(temp)
            }}>앞파란박스추가</button>

            <button onClick={()=>{
                let temp = [...boxCount];
                temp.unshift('green')
                setBoxCount(temp)
            }}>앞초록박스추가</button>

            <button onClick={()=>{
                let temp = [...boxCount];
                temp.push('red')
                setBoxCount(temp)
            }}>뒤빨간박스추가</button>

            <button onClick={()=>{  
                let temp = [...boxCount];
                temp.push('blue')
                setBoxCount(temp)
            }}>뒤파란박스추가</button>

            <button onClick={()=>{
                let temp = [...boxCount];
                temp.push('green')
                setBoxCount(temp)
            }}>뒤초록박스추가</button>
            <button onClick={()=>{  
                let temp = [...boxCount];
                temp.shift();
                setBoxCount(temp);
            }}>앞 박스 삭제</button>
            <button onClick={()=>{
                let temp = [...boxCount];
                temp.pop();
                setBoxCount(temp);
            }}>뒤 박스 삭제</button>
            <br/>

            {
                boxOrigin
            }
            

            <h3>색상박스를 컴포넌트화</h3>
            <div>
                {
                    boxCount.map((item,index)=>{
                        return(
                            <ColorBox bgcolor={item}/>
                        )
                        
                            
                        
                    })
                }
            </div>
        </div>
    )
}

export default Quiz05;