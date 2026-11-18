
function Gs07(){
  const students = [
    { id: 1, name: '철수', score: 90 },
    { id: 2, name: '영희', score: 85 },
    { id: 3, name: '민수', score: 100 }
];

  return(
    <div>
      <ul>
        {
          students.map((student)=>{
            return(
            <li key={student.id}>{student.name} : {student.score}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Gs07;