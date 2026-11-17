import Box from "./Box";
import { useState } from "react";


function Props02() {
    
    // 배열 값 변경(추가/삭제)  -> 값 유지 -> 재랜더링 : state변수
    let [titleArr, setTitleArr] = useState(['아침', '점심','저녁']);
    let [detailArr, setDetailArr] = useState(['졸리다','배부르다','피곤하다']);


    return(
        <div>

            <button onClick={()=>{
                /*
                react 
                데이터 기반으로 화면을 표시/조작

                버튼을 눌렀을때, 화면에 야식정보가 추가 표시

                야식정보 -> 배열에 추가 -> 배열의 데이터가 map으로 반복하면서 화면에 표시
                            (값 보존 + 재 랜더링
                */
                // 배열은 참조변수 -> 새로운 값으로 변경인식 -> 깊은 복사
                let temp = [...titleArr];
                temp.push('야식')
                setTitleArr(temp);
                // let temp2 = [...detailArr];
                detailArr.push('야식먹는다')
                // setDetailArr(temp2);  어차피 랜더링이 되기 때문에 굳이 줄 필요 없다.

                console.log(titleArr,detailArr);

            }}>야식추가버튼</button>
            {
                titleArr.map((value,index)=>{
                    return(
                        <Box text={value} detail={detailArr[index]} key={index}/>
                    )
                })
            }      
        </div>
    )
}

export default Props02;