import { useParams,useNavigate } from 'react-router';
import movies from './MovieData'
import './Reservation.css'
import { useState } from 'react';
import BookingInfo from './BookingInfo';

function Reservation() {

  let navigate = useNavigate();

  let {id} = useParams();

  let [selectedSeats, setSelectedSeats] = useState([]);

  let seats = [
  'A1', 'A2', 'A3', 'A4', 'A5',
  'B1', 'B2', 'B3', 'B4', 'B5',
  'C1', 'C2', 'C3', 'C4', 'C5',
  'D1', 'D2', 'D3', 'D4', 'D5'
  ];

  let movie = movies.find((value)=>{
  return value.id == id;
  });

  if (!movie) {
    return <h2>존재하지 않는 영화입니다.</h2>;
  }

  return(
    <div>
      <h1>좌석 선택 페이지</h1>
      <h3>영화 ID : {id}</h3>
      <h3>영화 제목 : {movie.title}</h3>

      <div className='seat-list'>
        {
          seats.map((value,index)=>{
            return(
              <button key={index} className={selectedSeats.includes(value) ? 'selected' : ''} onClick={()=>{
                if (selectedSeats.includes(value)) {
                  setSelectedSeats(
                    selectedSeats.filter((item) => item !== value)
                  );
                } else {
                  setSelectedSeats([...selectedSeats, value]);
                }
              }}>
                {value}
              </button>
            )
          })
        }
      </div>

      <BookingInfo movie={movie} selectedSeats={selectedSeats}/>

      <button onClick={()=>{
        setSelectedSeats([]);
      }}>초기화</button>

      <button onClick={() => {
        navigate('/');
      }}>
        영화 목록으로 돌아가기
      </button>
    </div>
  )
}

export default Reservation;