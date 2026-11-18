import { useState } from "react";


function NumberCycle() {

    const arrNum = [10, 20, 30, 40];

    const [num,setNum] = useState(0);



    return (
        <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
            {
              <p className="center">{arrNum[num]}</p>
            }

            {/* 버튼 만들기 */}
            <button onClick={()=>{
              setNum((num+1)%4)
            }}>
                다음 숫자
            </button>
        </div>
    );
}

export default NumberCycle;