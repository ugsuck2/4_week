import { useState } from "react";

function Prac03() {

  const [news, setNews] = useState(['오늘의 뉴스','내일의 뉴스','어제의 뉴스']);

  return(
    <div>
      {
        news.map((value,index)=>{
          return(
            <h3 key={index}>{value} <button onClick={()=>{
              let temp = [...news]
              temp.splice(index,1);
              setNews(temp);
            }}>삭제</button> </h3>
          )
        })
      }

    </div>
  )
}

export default Prac03;