function Recycle({title,text,num}){  //컴포넌트를 여러개 줄때 중괄호로 묶는다. 아니면 props.title 이렇게 받는다.
                                    // React는 자식쪽에서 부모가 전달한 Props를 하나의 객체로 묶어서 전달

    return(
        <div className='textItem'>
        <p className='title'>{title} : {num}</p>
        <p>내용 : {text}</p>
        </div>
    )
}
export default Recycle;