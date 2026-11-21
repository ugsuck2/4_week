import { useState } from "react";
import { Routes ,Route,Link, useNavigate } from 'react-router';
import {Container,Nav,Navbar,Button} from 'react-bootstrap'
import { useParams } from "react-router";
import FoodDetail from "./FoodDetail";

function Prac5() {
  let navigate = useNavigate();
  

  let [foods,setFoods] = useState([
  {id: 1, name: '사과', price: 2000},
  {id: 2, name: '바나나', price: 3000},
  {id: 3, name: '포도', price: 4000}
  ])

  let [inputText,setInputText] = useState('')

  return(

    

    <div>
      <h1>🛒나의 상품 관리 페이지</h1>
      <input type="text" value={inputText} onChange={(event)=>{
        setInputText(event.target.value);
      }}></input>
      <button onClick={()=>{
        if(inputText.trim() === '') {
          return;
        }
        let temp = [...foods];
        // temp.push({id: (foods.length)+1 ,name: inputText,price: 1000}); 중간 항목을 삭제하면 문제가 생김
        let newId = Math.max(...foods.map((item)=>item.id), 0) + 1;
        temp.push({id: newId ,name: inputText.trim(),price: 1000});
        setFoods(temp);
        setInputText('')
      }}>추가</button>

      <div>
      
          <Navbar bg="light" data-bs-theme="light">
              <Container>
              <Nav className="me-auto">
                  <Nav.Link as={Link} to='/'>Home</Nav.Link>
                  
              
              </Nav>
              </Container>
          </Navbar>

          <Routes>
          <Route path='/' element={
            
          <div>


          {
            foods.map((value,index)=>{
              return(
              <FoodDetail key={value.id} foods={value} onDelete={()=>{  
                //키를 value.id 로 주면 상품을 삭제하거나 추가할때 React 가 상품을 구분하기 더 좋다.
                let temp = [...foods]
                // temp.pop(); 마지막상품만 삭제
                temp = temp.filter((_,idx)=>{
                  return idx != index
                })
                setFoods(temp);
              }}></FoodDetail>
            )})
          }
          
          {/* {
            foods.map((value,index)=>{
              return(
              <h3 key={index}>{value.name} 가격 : {value.price} 원 
              <Button variant="primary"
                  onClick={()=>{
                      // 상품 상세페이지 주소로 변환
                      // detail/:id
                      navigate('/detail/' + value.id)
              }}>상세보기</Button></h3>
            )})
          } */}
          
          </div>} />            
          <Route path='/detail/:id' element={<div><h1><FoodDetail foods={foods}></FoodDetail></h1></div>}/>
          {/* id는 URL에서 변하는 값을 받겠다는 의미 */}
          <Route path='*' element={<div><h1>잘못된 접근입니다. 경로를 확인하세요.</h1></div>}/>
      </Routes>
      </div>

    
    </div>
  )
}

export default Prac5;