import FoodCard from "./FoodCard";


const foods = [
  { id: 1, name: '사과', price: 2000, stockCount: 10 },
  { id: 2, name: '바나나', price: 3000, stockCount: 5 },
  { id: 3, name: '포도', price: 4000, stockCount: 8 }
  ];

function Prac6() {

  

  return(
    <div>
      {
        foods.map((value,index)=>{
          return(
            <FoodCard key={index} food={value}></FoodCard>
          )

        })
      }
    </div>
  )
}

export default Prac6;