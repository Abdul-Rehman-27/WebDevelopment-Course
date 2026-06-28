function Price({oldPrice, newPrice}) {
    let oldStyles = {
        textDecorationLine : "line-through",
    };
    let newStyles = {
        fontWeight : "bold",
    };
    let styles = {
        backgroundColor : "#e0c367",
        height : "33px",
        width  : "200px",
        borderBottomLeftRadius : "8x",
        borderBottomRightRadius : "8px"
    };
    return (
        <div style={styles}>
            <span style = {oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style = {newStyles}>{newPrice}</span>
        </div>

    );
}

export default Price;