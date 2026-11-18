import { useState } from "react";

function Prac5() {

  const [news, setNews] = useState([
    '어제의 뉴스',
    '오늘의 뉴스',
    '내일의 뉴스'
  ]);

  const [likeCount, setLikeCount] = useState([0, 0, 0]);

  return(
    <div>
      {
        news.map((value,index)=>{

          return(
            <h3 key={index} onClick={()=>{
              
                console.log('뉴스 제목 클릭!')
              
            }}>{value} <span><button onClick={(event)=>{
              let temp = [...likeCount];
              temp[index] = temp[index] + 1;
              setLikeCount(temp);
              event.stopPropagation();
            }}>♥</button>{likeCount[index]}</span></h3>
          )
        })
      }
    </div>
  )
}

export default Prac5;