import { Button, Card } from "react-bootstrap";
import food1 from '../img/food1.jpg';
import food2 from '../img/food2.jpg';
import food3 from '../img/food3.jpg';

function FoodCard({food}) {

    

    return(

        <Card style={{ width: '18rem' }}>

            {/* <Card.Img variant="top" src={'http://localhost:5173/'+ food.imgPath} /> 
                이거는 포토번호가 바뀔때마다 링크를 바꿔줘야 하므로 쓰지 않는다.
                import.meta.env.BASE_URL + food.imgPath*/}
            <Card.Img variant="top" src={food.imgPath} />
                <Card.Body>
                    <Card.Title>{food.title}</Card.Title>
                        <Card.Text>
                        {food.content}
                        </Card.Text>
                        <Card.Text>
                        {food.price}
                        </Card.Text>
                </Card.Body>
        </Card>
    )
}

export default FoodCard;