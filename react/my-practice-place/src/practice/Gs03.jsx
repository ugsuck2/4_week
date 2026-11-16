import { useState } from "react";

function Gs03() {

    let [num,setNum] = useState([1,2,3]);
    let [msg,setMsg] = useState(`버튼 클릭 전`)
    

    return (
        <div>
            <p>{num}</p>
            <button onClick={()=>{

            // let temp = [...num];
            // temp.push(4);
            // setNum(temp);
            setNum(prevNum=>[...prevNum,4])
            let afterMsg = '버튼클릭후';
            setMsg(afterMsg);



            }}>{msg}</button>
        </div>
    )
}

export default Gs03;

//setNum : State를 변경하는 함수

//prevNum : 변경하기 직전의 State 값