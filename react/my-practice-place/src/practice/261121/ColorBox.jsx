
function ColorBox({color,onDelete}) {

  return(
    <div style={{height : '100px',width:'100px', backgroundColor : color}}>
      <button onClick={onDelete}>삭제</button>
    </div>
  )
}

export default ColorBox;