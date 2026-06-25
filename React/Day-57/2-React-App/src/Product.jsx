import './Product.css';
// function Product(props) {
//     console.log(props);
//     // console.log(props.title);
//     return (
//         <div className = "product"> 
//             <h3>{props.title}</h3>
//             <p>{props.description}</p>
//         </div>
//     );
// }

//better way
function Product({title, description, price = 100}) {  // if no price is pass then default price 100 will be choosen 
    return (
        <div className = "product"> 
            <h3>{title}</h3>
            <p>Description: {description}</p>
            <p>Price: {price / 2} </p>
        </div>
    );
}

export default Product;