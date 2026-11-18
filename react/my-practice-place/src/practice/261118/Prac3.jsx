import { useState } from "react";

function Prac3() {

  let [boxList, setBoxList] = useState(['red', 'blue', 'green'])

  

 

  return(
    <div>
      <button onClick={()=>{
        let temp = [];
        temp = [...boxList];
        temp.push('red');
        setBoxList(temp);        
      }}>빨간색 뒤에 추가</button>

      <button onClick={()=>{
        let temp = [];
        temp = [...boxList];
        temp.unshift('blue');
        setBoxList(temp);        
      }}>파란색 앞에 추가</button>

      <button onClick={()=>{
        let temp = [];
        temp = [...boxList];
        temp.push('green');
        setBoxList(temp);        
      }}>초록색 뒤에 추가</button>

      <button onClick={()=>{
        let temp = [];
        temp = [...boxList];
        temp.shift();
        setBoxList(temp);        
      }}>첫번째 박스 삭제</button>

      <button onClick={()=>{
        let temp = [];
        temp = [...boxList];
        temp.pop();
        setBoxList(temp);        
      }}>마지막 박스 삭제</button>

      {
        boxList.map((value,index)=>{
          return(
          <div style={{width:'100px',height:'100px',backgroundColor:value}} key={index}></div>
          )
        })
      }
    </div>
  )
}

export default Prac3