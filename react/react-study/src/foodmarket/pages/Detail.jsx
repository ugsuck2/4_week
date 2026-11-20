import { useParams,useNavigate } from "react-router";
import {Container,Row,Col,Button} from 'react-bootstrap'


function Detail({foods}) {

    //상세보기를 눌렀을때
    //특정 상품의 상세정보를 보여주는 페이지

    // url 주소창 접속 경로 /detail/:id

    // /detail/fd001                 /detail/fd008

    // 상세보기를 누르면 ->  /detail/id값 
    // id값으로 넘어온 값이 무엇이냐? ---> foods 데이터 중에 id가 같은 상품 찾기

    // :id 위치에 있는 값 접근
    let {id} = useParams();
    console.log(id);

    // id와 같은 id 가진 food 데이터 찾기

    // filter
    // let food = foods.filter((food,index)=>{
    //     return food.id ==id;
    // })

    // console.log(food);

    // find
    let foodFind = foods.find((food,index)=>{
        return food.id == id;
    } )
    
    console.log(foodFind);

    let navigate = useNavigate();

    if( foodFind == undefined || foodFind == null) {
        return(
            <div>
                <h1>존재하지 않는 상품입니다.</h1>
                <h2>잘못된 접근입니다.</h2>
                <Button variant="info" onClick={()=>{
                    navigate('/');
                }}>홈으로 돌아가기</Button>
            </div>
        )
    }


    return(
        <div>
            <Container>
                <Row>
                    <Col md={6}>
                        <img src={import.meta.env.BASE_URL + foodFind.imgPath} style={{width:'100%'}}/>
                    </Col>
                    <Col md={6}>
                        <h4>{foodFind.title}</h4>
                        <p>{foodFind.content}</p>
                        <p>{foodFind.price}</p>

                        <div>
                            <Button variant="dard">-</Button>
                            <span>0</span>
                            <Button variant="dard">+</Button>
                        </div>

                        <Button variant="primary">주문하기</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default Detail;