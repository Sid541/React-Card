function Price({oldPrice,newPrice}){
    let oldStyle={
        textDecoration:"line-through"
    }
    let newStyle={
        fontWeight:"bold"
    }
    let styles={
        backgroundColor:"#e0c367",
        height:"50px",
        padding:"15px",
        borderBottomLeftRadius:"18px",
        borderBottomRightRadius:"18px"
    }
    return(
        <div style={styles}> 
            <span style={oldStyle}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyle}>{newPrice}</span>
        </div>
    )
}
export default Price;