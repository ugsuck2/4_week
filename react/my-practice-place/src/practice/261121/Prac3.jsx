import { useState } from "react";

function Prac3() {

  let [fruits,setFruits] = useState(['사과','바나나','포도'])

  let [inputText,setInputText] = useState('')

  return(
    <div>
      {
        fruits.map((value,index)=>{
          return(
          <h3 key={index}>{value}</h3>
        )})
      }
      <input type="text" value={inputText} onChange={(event)=>{
        setInputText(event.target.value);
      }}></input>
      <button onClick={()=>{
        if(inputText.trim() === '') {
          return;
        }
        let temp = [...fruits];
        temp.push(inputText);
        setFruits(temp);
        setInputText('')
      }}>추가</button>
    </div>
  )
}

export default Prac3;