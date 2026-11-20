import './FoodMarket.css'
// import Button from 'react-bootstrap/Button';
// import Spinner from 'react-bootstrap/Spinner';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import {Container,Nav,Navbar,Spinner,Button,Row,Col,Card} from 'react-bootstrap'

import banner_bg from './img/banner_bg.jpg'
import food1 from './img/food1.jpg';
import food2 from './img/food2.jpg';
import food3 from './img/food3.jpg';

import foodsData from './data/foodsData';

import { useState } from 'react';
import FoodCard from './components/FoodCard';
import { Routes ,Route,Link, useNavigate } from 'react-router';
import CustomerService from './pages/CustomerService';
import Home from './pages/Home';
import Detail from './pages/Detail';



function FoodMarket() {

    let [food, setFoods] = useState(foodsData);
    /*
        url주소(접속 경로) 이동 (페이지 새로고침, 새로운 페이지 로딩)
        <a href='경로'>
        location.href = '경로'

        react-router 이동
        > 현재 html 동일한 페이지 > url 주소 표기가 바뀌면 >
        그 주소일때 보여주는 화면요소로 전환(지웠다가 다시 그리기)

        Link to = 경로(주소)
        navigate(주소)


    */

    let navigate = useNavigate();

    return(
        <div>
        
        
        <Navbar bg="light" data-bs-theme="light">
            <Container>
            {/* <Navbar.Brand href="#home">FoodMarket</Navbar.Brand> */}
            <Navbar.Brand onClick={()=>{ navigate('/')}}>FoodMarket</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home"> <Link to='/'>Home</Link></Nav.Link>
                <Nav.Link onClick={()=>{ navigate('/detail')}}>FoodDetail(상세)</Nav.Link>
                <Nav.Link onClick={()=>{ navigate('/info')}}>Info</Nav.Link>
                <Nav.Link onClick={()=>{ navigate('/help')}}>고객센터</Nav.Link>

                {/* <Nav.Link> <Link to='/info'>고객센터</Link></Nav.Link>
                <Nav.Link href="/help">고객센터</Nav.Link> */}
            </Nav>
            </Container>
        </Navbar>

        
        <Routes>
            <Route path='/' element={<Home foods = {food}/>} />
            <Route path='/help' element={<CustomerService/>}/>
            <Route path='/detail/:id' element={<Detail foods={food}/>}/>
            <Route path='/detail' element={<div><h1>Detail Page</h1></div>}/>
            <Route path='/info' element={<div><h1>Info Page</h1></div>}/>
            <Route path='/test' element={<div><h1>이곳은 테스트</h1></div>}/>
            <Route path='*' element={<div><h1>잘못된 접근입니다. 경로를 확인하세요.</h1></div>}/>
        </Routes>

            
        

        {/*
            이미지 사용 (연결)

            * html 연결 상대경로 연결
            <img src="./images/a.png"/>

            React 방식
            상대폴더경로 링크로 연결x

            React 컴포넌트 방식에서 이미지 사용시
            1. import 이미지
            2. 외부 이미지 url 경로
            3. css 에서 이미지 경로
                url(./img/banner_bg.jpg);

            4. public 폴더에 이미지를 미리 저장해두고 접근/사용
            현재 실행중인 서버에 public 경로를 통해 image 접근 가능
            서버가 외부 url 이미지에 접근하듯이 해당 서버 역할
            
            '주소' /images/food3.jpg

            현재 접속한 사이트 주소 + 뒤에 경로

            패키지 매니저 별로 설정이 다름

            CRA : src={ process.env.PUBLIC_URL + food.imgPath }
                설정: package.json
                    "homepage" 
            VITE : src= { import.meta.env.BASE_URL + food.imgPath}
                설정은 vite.config.js 에 있는 base에 따른다. 


        */}

        {/* <img src={banner_bg}/>
        <img src="https://plus.unsplash.com/premium_photo-1792519573925-8e58242c5d9e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"/> */}


            













            {/* bootstrap 한줄 기준 : 12 */}
            {/* <Container fluid="md">
            <Row>
                <Col md={4} sm={4} xxl={3}>
                                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={food1} />
                <Card.Body>
                    <Card.Title>{food[0].title}</Card.Title>
                    <Card.Text>
                    {food[0].content}
                    </Card.Text>
                    <Card.Text>
                    {food[0].price}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </Col>

                <Col md={4} sm={4} xxl={3}>
                            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={food2} />
                <Card.Body>
                    <Card.Title>{food[1].title}</Card.Title>
                    <Card.Text>
                    {food[1].content}
                    </Card.Text>
                    <Card.Text>
                    {food[1].price}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </Col>

                <Col md={4} sm={4} xxl={3}>
                            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={food3} />
                <Card.Body>
                    <Card.Title>{food[2].title}</Card.Title>
                    <Card.Text>
                    {food[2].content}
                    </Card.Text>
                    <Card.Text>
                    {food[2].price}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </Col>
            </Row>
            </Container> */}
























            {/* <Button variant="warning">Warning</Button>
            <Button variant="danger">빨간버튼</Button>
            <Button variant="outline-success">Success</Button>
            <Spinner animation="border" />
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton> */}


        </div>
    )
}

export default FoodMarket