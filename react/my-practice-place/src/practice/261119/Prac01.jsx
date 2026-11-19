import { useState } from "react";

function Prac01() {

  let [inputTest, setInputTest] = useState('')

  return(

    <div>
      <input type="text" value={inputTest} onChange={(event)=>{
        setInputTest(event.target.value);
      }}></input>
      <button onClick={()=>{
        let temp = inputTest;

        temp = inputTest.trim();

        if(temp == '') {
          alert('내용을 입력해주세요!');
          setInputTest('');
        }
        else {
          alert('등록되었습니다!');
          setInputTest('');
        }

      }}>등록</button>
    </div>
  )
}

export default Prac01;