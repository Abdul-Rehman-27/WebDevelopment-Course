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

// //better way
// function Product({title, description, price = 100}) {  // if no price is pass then default price 100 will be choosen 
//     return (
//         <div className = "product"> 
//             <h3>{title}</h3>
//             <p>Description: {description}</p>
//             <p>Price: {price / 2} </p>
//         </div>
//     );
// }

// 2-Passing Arrays to Props
function Product({title, description, price, features, features2}) { 
    console.log(features); // return array in console

    // const list = features.map((feature) => <li>{feature}</li>)   // 2nd way of rendring (but we write this logic when we are displaying like given below in p tag)

    
    return (
        <div className = "product"> 
            <h3>{title}</h3>
            <p>Description: {description}</p>
            <p>Price: {price} </p>

            <p>{features}</p>  {/*whenever in js we try to render array in props the individual item from props will be extracted and then displayed*/}

            {/* <p>{features2}</p>  Here nothing will be displayed in case of object we need to access key anad then it will render */}

            {/* <p>{list}</p>  */}

            <p>
                {features.map((feature) => (
                    <li>{feature}</li>
            ))}
            </p> 
            <p>{features2.a}</p>
        </div>
    );
}
export default Product;