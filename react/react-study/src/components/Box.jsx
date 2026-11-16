
//<Box text='아침' detail='졸리다'/>
// props = { text:'아침', detail:'졸리다'}


// function Box(props){

//     return (
//         <div style={{backgroundColor:"lightgreen"}}>
//             <h1>{props.text}</h1>
//             <h2>{props.detail}</h2>
//         </div>
//     )
// }


// props = { text:'아침',detail:'졸리다'}
// props.title  props.detail
// let {title,detail} = {title:'아침',detail:'졸리다'}


function Box({text,detail}){

    return (
        <div style={{backgroundColor:"lightgreen" , padding:'10px'}}>
            <h1>{text}</h1>
            <h2>{detail}</h2>
        </div>
    )
}



export default Box;