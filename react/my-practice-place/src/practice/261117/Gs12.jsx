
function Gs12(){

  return(
    <div onClick={(event)=>{
      
        
        console.log('부모 클릭!')
      
    }}>
      부모클릭!<br/>
      <button onClick={(event)=>{
        event.stopPropagation();
        console.log('자식 클릭!')
      }}>자식클릭!</button>
    </div>
  )
}
export default Gs12;