import { Routes ,Route,Link, useNavigate } from 'react-router';
import {Container,Nav,Navbar} from 'react-bootstrap'

function Prac4() {

  let navigate = useNavigate();

  return(
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link onClick={()=>{ navigate('/info')}}>/info</Nav.Link>
              <Nav.Link onClick={()=>{ navigate('/help')}}>/help</Nav.Link>

          
          </Nav>
        </Container>  
      </Navbar>  

      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route path='/info' element={<h3>정보</h3>} />
        <Route path='/help' element={<h3>고객센터</h3>}/>
      </Routes>
    </div>
  )
}

export default Prac4;