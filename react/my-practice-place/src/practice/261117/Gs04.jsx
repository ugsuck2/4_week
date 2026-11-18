
import React from "react";

function FruitList() {
    const fruits = ["사과", "바나나", "포도", "딸기"];
    
    return (
      <div>
        <ul>
    // 이곳에 코드를 작성해 봐!
    {
      fruits.map((value)=>{
        return(
          <li key={index}>{value}</li>
        )
      })
    }
    </ul>



</div>
)
}
export default FruitList;