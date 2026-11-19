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

    //뉴스를 눌렀을때 Modal 창에 전달할 정보를 저장할 변수
    let [selectedTitle, setSelectedTitle] = useState('');

    let [selectedLikeCount, setSelectedLikeCount] = useState(0);

    // input 요소에서 입력된 값을 저장하는 용도
    let [inputText, setInputText] = useState('')



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
                            setSelectedTitle(item); //
                            setSelectedLikeCount(likeCount[index]);
                            // 어떤뉴스 눌렀는지
                            setModalFlag(!modalFlag); // 모달창 표시여부 true/false
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

                        <p>내용 무</p>
                        <button onClick={()=>{
                            let temp = [...news];
                            temp.splice(index,1); // splice는 파괴적 함수라 temp = temp.splice(index,1)쓰면 안된다.
                            setNews(temp);
                            // let countTemp = [...likeCount];
                            // countTemp.splice(index,1);
                            // setLikeCount(countTemp);
                            likeCount.splice(index,1)

                            // filter 방식
                            // return 조건이 true 인 케이스만 모아서 배열
                            // index : 2요소만 삭제버튼 -> 0!=2 1!=2 2!=2 3!=2
                            // 현재index != 삭제누른index

                            let filterTemp = [...news];
                            filterTemp.filter((value,idx)=>{  // 최종결과 [1,2,3,4]
                                return idx != index; // return true만 모아서
                            })
                            console.log(filterTemp);
                            setNews[filterTemp];

                            // let temp2 = [...likeCount];
                            // temp2 = temp2.filter((value,idx)=>{
                            //     return idx != index;
                            //     setLikeCount(temp2);
                            // })

                            // setLikeCount(likeCount.filter((_,idx)=> idx != index));
                        }}>삭제</button>
                    </div>
                );
            })
        }       

        <div>
            <button onClick={()=>{
                let temp = [...news];
                temp[0] = 'Today 긴급 속보!!!'
                setNews(temp);
            }}>긴급제목변경</button>
        </div>
                    

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
            <div>
                <input type="text" value={inputText} onChange={(event)=>{
        // 매개변수 event : 키보드 이벤트정보
        // event.target 이벤트가 발생한 요소 접근

        // input 창에서 입력발생 -> onchange 이벤트에 등록된 함수 수행
        // -> value값을 state변수에 저장해둠

        // input에서 입력되어 저장된 state변수값 -> news배열에 추가등록
        //  -> 재랜더링+화면에표시
                    console.log(event.target.value);
                    setInputText(event.target.value);
                    

                }}/>
                <button onClick={()=>{

                    //문자 앞뒤에 있는 공백(띄어쓰기) 제거
                    //띄어쓰기만 있을때 등록을 방지
                    //trim() : 문자열 앞뒤에 있는 공백을 제거

                    //" ab c d " .trim()  --> "abcd"

                    inputText = inputText.trim();  // 비파괴적 함수라 원본에 저장안됨
                    
                    
                    if(inputText !== '' ){
                        let temp = [...news];
                        temp.push(inputText);
                        setNews(temp);
                        let likeCountTemp = [...likeCount];
                        likeCountTemp.push(0)
                        setLikeCount(likeCountTemp);  
                        // 근처에 랜더링하는 조건들이 있으므로 굳이 temp로 배열 안만들어도 된다.

                        setInputText('') // 입력값 저장하는 inputText를 초기화
                    }
                    else{
                        alert('값을 입력하세요!')
                        setInputText('')  // 텍스트창에 남아있는 띄어쓰기를 제거
                    }
                }}>뉴스발행</button>
            </div>

            {
                

                modalFlag && <Modal title={selectedTitle} likeCount={selectedLikeCount}
                                    news={news} setNews={setNews} bgcolor='lightblue'/>

            }

        </div>
    )

}
export default NewsBlog;