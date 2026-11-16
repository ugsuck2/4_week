import Box from './Box'

function Props01() {

    let arr = ['아침', '점심','저녁'];
    let detail = ['졸리다','배부르다','피곤하다'];

    return(
        <div>

            {
                arr.map((value,index)=>{


                    return(
                        <div style={{backgroundColor:'lightgray'}}>
                            <h1>{value}</h1>
                            <h2>{index}</h2>
                            <p>{detail[index]}</p> 
                        </div>
                    )
                })
            }


            <hr/>
            <Box text={arr[0]} detail={detail[0]}/>
            <Box text={arr[1]} detail={detail[1]}/>
            <Box text={arr[2]} detail={detail[2]}/>

            <hr/>
            {
                arr.map((value,index)=>{
                    return(
                        <Box text={arr[index]} detail={detail[index]}/>
                    )
                })
            }       

            
        </div>
    )
}

export default Props01;