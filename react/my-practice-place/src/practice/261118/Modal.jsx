function Modal(props) {

  return(
    <div>
      <h3>{props.title}</h3>
      <h5>좋아요:{props.count}</h5>

      <button onClick={()=>{
        props.setModalFlag(false);

      }}>닫기</button>
    </div>
  )
}

export default Modal