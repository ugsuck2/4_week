import { useParams } from "react-router";

function FoodDetail({foods,onDelete}) {

//   let {id} = useParams();

//   let foodFind = foods.find((value)=>{
//     return value.id === id;
//   });

//   if(foodFind === undefined) {
//   return(
//     <h3>존재하지 않는 상품입니다.</h3>
//   )
// }


  return(
    <div>
      <h3>상품 : {foods.name}</h3>
      <h3>가격 : {foods.price}</h3>
      <button onClick={onDelete}>삭제</button>
    </div>
  )
}

export default FoodDetail;