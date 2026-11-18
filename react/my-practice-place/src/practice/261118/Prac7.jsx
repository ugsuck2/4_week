import { useState } from "react";

function Prac7() {

  const [news, setNews] = useState([
    '어제의 뉴스',
    '오늘의 뉴스',
    '내일의 뉴스'
  ]);

  const [inputValue, setInputValue] = useState('');

  return(
    <div>
      <h3>📰 나의 뉴스 게시판</h3>
      <h4>뉴스 목록</h4>
      <ul>
      {
        news.map((value,index)=>{
          return(
            <li key={index} onClick={()=>{
              console.log(value);
            }}>{value}</li>
          )
        })
      }
      </ul>
      <input type="text" value={inputValue} onChange={(event)=>{
        setInputValue(event.target.value);
      }}></input>
      <button onClick={()=>{
        if(inputValue !== '') {
          let temp = [];
          temp = [...news];
          temp.push(inputValue);
          setNews(temp);
          setInputValue('');
        }  
      }}>발행</button>
    </div>
  )
}

export default Prac7;