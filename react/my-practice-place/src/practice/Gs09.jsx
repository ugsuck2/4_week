import { students } from "./Student";

function Gs09(){

  return(
    <div>
      {
        students.map((student)=>
          (
            <p key={student.id}>
              학생이름 : {student.name} <br/> 
              점수 : {student.score}
            </p>
          )
          
        )
      }
    </div>
  )
}

export default Gs09;

/*
  {
    students.map((student)=>{
      <p key={student.id}>{student.name} : {student.score}</p>
      })
  }
*/