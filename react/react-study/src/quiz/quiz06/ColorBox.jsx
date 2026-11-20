
function ColorBox({bgcolor, onDelete}) {

    return(
        <div className="box" style={{backgroundColor:bgcolor}}>
            <button onClick={onDelete} style={{color:'white', backgroundColor:'black'}}>X</button>
        </div>
    )
}

export default ColorBox;