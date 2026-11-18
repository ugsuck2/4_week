function Gs11_modal({setModalFlag}){
  return(
    <div>
      <h3>안녕하세요!</h3>
      <h5>Modal이 열렸습니다</h5>
      <button onClick={()=>{
        setModalFlag(false);
      }}>닫기</button>
    </div>
  )
}