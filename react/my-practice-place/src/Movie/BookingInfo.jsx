

function BookingInfo({movie, selectedSeats}) {
  return(
    <div>
      <h3>영화제목 : {movie.title}</h3>
      <h3>총 결제금액 : {(movie.price*selectedSeats.length).toLocaleString()}원</h3>
      <h3>선택한 좌석 : {selectedSeats.join(', ')}</h3>
      <h3>선택한 좌석 수 : {selectedSeats.length}개</h3>
      
    </div>
  )
}

export default BookingInfo;