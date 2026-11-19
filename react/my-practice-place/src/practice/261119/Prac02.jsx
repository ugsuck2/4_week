import { useState } from "react";

function Prac02() {

  const [news, setNews] = useState(['오늘의 뉴스','내일의 뉴스']);

  const [inputText, setInputText] = useState('');

  return(

    <div>
      <input value={inputText} onChange={(event)=>{
        let temp = event.target.value;
        setInputText(temp);
      }}></input>
      <button onClick={()=>{

        let temp2 = inputText.trim();



        if(inputText !== '') {
          let temp = [...news];
          temp.push(temp2);
          setNews(temp);
        }
        else {
          alert('내용을 입력해주세요!')
        }
        setInputText('')
      }}>등록</button>
      {
        news.map((value,index)=>{
          return(
          <h3 key={index}>{value}</h3>
          )
        })
      }
    </div>
  )
}

export default Prac02;