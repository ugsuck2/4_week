import { Routes ,Route,Link, useNavigate } from 'react-router';
import {Container,Nav,Navbar} from 'react-bootstrap'

function RouterHome() {

    let navigate = useNavigate();

    return (
        <div>

            <Navbar bg="light" data-bs-theme="light">
                <Container>
                
                
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/'>Main</Nav.Link>
                    <Nav.Link onClick={()=>{ navigate('/info')}}>/info</Nav.Link>
                    <Nav.Link onClick={()=>{ navigate('/mypage')}}>/mypage</Nav.Link>
                    
                    <Nav.Link onClick={()=>{ navigate('/cart')}}>/cart</Nav.Link>

                
                </Nav>
                </Container>
            </Navbar>

            <Routes>
            <Route path='/' element={<div><h1>Main</h1></div>} />            
            <Route path='/mypage' element={<div><h1>My Page 공간</h1></div>}/>
            <Route path='/info' element={<div><h1>Info Page 공간</h1></div>}/>
            <Route path='/cart' element={<div><h1>장바구니</h1></div>}/>
            <Route path='*' element={<div><h1>잘못된 접근입니다. 경로를 확인하세요.</h1></div>}/>
        </Routes>
        </div>
    )
}

export default RouterHome;