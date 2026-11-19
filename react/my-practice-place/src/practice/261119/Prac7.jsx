import { useState } from "react";
import FoodCard from "./FoodCard";

const foods = [
  { id: 1, name: '사과', price: 2000, stockCount: 10 },
  { id: 2, name: '바나나', price: 3000, stockCount: 5 },
  { id: 3, name: '포도', price: 4000, stockCount: 8 }
  ];

function Prac7() {

  const [saleFood,setSaleFood] = useState(foods)

  const [inputText,setInputText] = useState('')

  

  

  return(

    <div>
      <input type="text" value={inputText} onChange={(event)=>{
        setInputText(event.target.value);
      }}></input>
      <button onClick={()=>{
        const temptext = inputText.trim();
        if(temptext!=='') {
            let temp = [...saleFood];
            temp.push({id: Date.now(), name: temptext, price: 1000,stockCount: 10});
            setSaleFood(temp);
        }
        setInputText('')
      }}>등록</button>
      <button onClick={()=>{
        let temp = [...saleFood];
        temp.pop();
        setSaleFood(temp);
      }}>삭제</button>
      {
        saleFood.map((value,index)=>{
          return(
            <FoodCard key={index} food={value} onOrder={()=>{
              
              let temp = [...saleFood];
              temp[index].stockCount = temp[index].stockCount-1;
              setSaleFood(temp);

              
            
            }}></FoodCard>
          )
        })
      }
    </div>
  )
}

export default Prac7;