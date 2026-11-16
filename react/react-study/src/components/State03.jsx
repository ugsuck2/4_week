import { useState } from "react";

function State03() {
    
    // let arr = [1,2,3,4,5]; // 일반 배열 변수


  //     변수  set함수   useState(초기값)
    let [arr,setArr] = useState([1,2,3,4,5]);






    return (
        <div>
            
            <button onClick={()=>{

                // 배열에 값 추가 push unshift splice

                //[1,2,3,4,5]
                //arr.push(6)   [1,2,3,4,5,6]

                // console.log(arr);
                // arr.push(6);
                // console.log(arr);

                // setArr(arr); // 뒤에 6이 추가된 arr 배열 변수
                
                // 참조변수의 주소가체가 바뀌지 않기 때문에 -> 재랜더링 발생x
                // state 변수의 값이 set함수를 통해서 새로운 값으로 변경! -> 재랜더링 조건

                // 깊은복사 -> 새로운 주소에 데이터 생성 ...
                // set함수(새로운주소);

                let temp = [...arr]; //깊은복사 [...[1,2,3,4,5]]  [1,2,3,4,5]
                temp.push(6)                // [1,2,3,4,5,6]
                setArr(temp);
                //state  변수 arr 에 값 (주소) 이 새로운 주소로 변경 -> 재랜더링
            }}>배열변경버튼</button>

            {
                // arr.map((val)=>{
                //     return <p>{val}</p>
                // })

                arr.map((val)=>(<p>{val}</p>))
            }
        </div>
    )
}

export default State03;