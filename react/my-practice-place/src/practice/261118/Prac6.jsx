import { useState } from "react";
import Modal from './Modal'

function Prac6() {

  const [news, setNews] = useState([
  '어제의 뉴스',
  '오늘의 뉴스',
  '내일의 뉴스'
  ]);

  const [likeCount, setLikeCount] = useState([0, 0, 0]);

  const [modalFlag, setModalFlag] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedLikeCount, setSelectedLikeCount] = useState(0);

  return(
    <div>
      {
        news.map((value,index)=>{
          return(
            <h3 key={index} onClick={()=>{
              setModalFlag(true);
              setSelectedTitle(value);
              setSelectedLikeCount(likeCount[index])
            }}>{value}</h3>
          )
        })
      }
      
      {modalFlag && <Modal title={selectedTitle} count={selectedLikeCount} setModalFlag={setModalFlag}/>}
    </div>
  )
}

export default Prac6