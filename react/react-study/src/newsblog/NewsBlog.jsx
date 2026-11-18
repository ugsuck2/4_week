import "./NewsBlog.css"
import { useState } from "react";
import Modal from "./Modal";

function NewsBlog() {
    

    // 제목 잘 바뀌지 않는 내용
    // 하드코딩(텍스트가 직접 작성되있는) vs  일반변수 vs State변수
    const title = "Blog Header"

    const [news1,setNews1] = useState('어제의 뉴스');
    const [news2,setNews2] = useState('어제의 뉴스');
    const [news3,setNews3] = useState('어제의 뉴스');

    const [news, setNews] = useState(['어제의 뉴스','오늘의 뉴스','내일의 뉴스'])

    const [likeCount, setLikeCount] = useState([0,0,0]);

    const [modalFlag, setModalFlag] = useState(false);

    return(
        <div>
            <div className="black-nav">
                {/* <h3>{Blog Header}</h3> */}
                <h3>{title}</h3>
                <div style={{color:"orange",fontSize:'20px'}}>React Study</div>
            </div>

        {
        news.map((item, index)=>{
                return(
                    <div className="post-list" key={index}>
                        <h4 onClick={()=>{
                            setModalFlag(!modalFlag);
                        }}>
                            {item}

                            <span onClick={(event)=>{
                                event.stopPropagation();

                                let temp = [...likeCount];
                                temp[index] = temp[index] + 1;
                                setLikeCount(temp);
                            }}>
                                ♥
                            </span>

                            {likeCount[index]}
                        </h4>

                        <p>내용</p>
                    </div>
                );
            })
        }       
                    

            {/* <div className="post-list">
                <h4 onClick={()=>{
                    //modalFlag 값 변경
                    // setModalFlag(true);
                    // if(modalFlag)
                    //     setModalFlag(false);
                    // else
                    //     setModalFlag(true)
                    // setModalFlag( modalFlag ? false : true);

                    setModalFlag(!modalFlag); // !false - > true
                }}>{news[0]}    <span onClick=
                {(event)=>{

                    // event.preventDefault(); 발생하는 이벤트의 기본 수행을 막는다.
                    event.stopPropagation(); //이벤트 발생을 추가로 전파/전달하는것을 stop!
                    setLikeCount(likeCount+1); // 재랜더링
                    }}>♥</span> 
                {likeCount}</h4>
                <p>내용</p>
            </div>

            <div className="post-list">
                <h4>{news[1]}</h4>
                <p>내용</p>
            </div>

            <div className="post-list">
                <h4>{news[2]}</h4>
                <p>내용</p>
            </div> */}
            
            
                {/* modalFlag == true ?  <Modal/> : null */}
            

            {
                modalFlag && <Modal/>
            }

        </div>
    )

}
export default NewsBlog;