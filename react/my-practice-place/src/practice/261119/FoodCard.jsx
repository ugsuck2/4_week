import { useState } from "react"


function FoodCard({food,onOrder}){

  

  return(
    <div>
      <h3>{food.name}</h3>
      <h4>가격:{food.price}원</h4>
      <h4>재고:{food.stockCount}</h4>
      <button onClick={onOrder}>주문</button>
      
    </div>
  )
}

export default FoodCard