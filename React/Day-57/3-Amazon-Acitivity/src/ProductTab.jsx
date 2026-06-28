import Product from "./Product";
import "./Product.css";
function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap : "wrap",
        justifyContent: "center",
        alignItems : "center",
    }
    return (
        <div style = {styles}>
            <Product title = "Logitec MX Master 35" Description= "This is Product" idx = {0}/>
            <Product title = "Apple Pencil (2nd Gen)" Description= "This is Product" idx = {1}/>
            <Product title = "Zebrnoics Transformers" Description = "This is Product" idx = {2}/>
            <Product title = "Petronics Toad 23" Description = "This is Product " idx = {3}/>
        </div>
        
    );
}

export default ProductTab;