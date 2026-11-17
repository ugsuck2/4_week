import './Quiz03.css'
import Recycle from './Recycle';



function Quiz03() {

    let titleArr = ['하나','둘','셋','넷','다섯'];
    let contentArr = ['내용하나','내용둘','내용셋','내용넷','내용다섯'];

    const arrData = [
        { title: '제목', num: '하나', text: '내용하나' },
        { title: '제목', num: '둘', text: '내용둘' },
        { title: '제목', num: '셋', text: '내용셋' },
        { title: '제목', num: '넷', text: '내용넷' },
        { title: '제목', num: '다섯', text: '내용다섯' }
    ];

    return (
        <div>
        <div>
            {/* <Recycle title="제목" num={titleArr[0]} text={contentArr[0]} />
            <Recycle title="제목" num={titleArr[1]} text={contentArr[1]} />
            <Recycle title="제목" num={titleArr[2]} text={contentArr[2]} />
            <Recycle title="제목" num={titleArr[3]} text={contentArr[3]} />
            <Recycle title="제목" num={titleArr[4]} text={contentArr[4]} /> */}
            {
                arrData.map((item,index)=>{
                    return(
                        <Recycle key={index} title={item.title}
                        num={item.num} text={item.text}></Recycle>
                    )
                })
            }
        </div>
        
        
        </div>
        );
}

export default Quiz03;