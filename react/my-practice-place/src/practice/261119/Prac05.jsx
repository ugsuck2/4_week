import { useState } from "react";

function Prac5() {

  const [news, setNews] = useState(['오늘의 뉴스','내일의 뉴스','어제의 뉴스']);

  const [likeCount, setLikeCount] = useState([0, 0, 0]);

  return(
    <div>
      {
        news.map((value,index)=>{
          return(
            <h3 key={index}>{value}<button onClick={()=>{
              let temp = [...likeCount];
              temp[index] = temp[index] + 1;
              setLikeCount(temp);
              
            }}>좋아요 {likeCount[index]}</button> 
            <button onClick={()=>{
              let temp = [...news];
              temp.splice(index,1)
              setNews(temp);
              let temp2 = [...likeCount]
              temp2.splice(index,1)
              setLikeCount(temp2);
              

            }}>삭제</button></h3>
          )
        })
      }

    </div>
  )
}

export default Prac5;

// setNews(prev => prev.filter((_, i) => i !== index));
// setLikeCount(prev => prev.filter((_, i) => i !== index));