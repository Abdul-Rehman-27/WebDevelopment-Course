import "./Product.css";
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

// // 2-Passing Arrays to Props
// function Product({title, description, price, features, features2}) {
//     console.log(features); // return array in console

//     // const list = features.map((feature) => <li>{feature}</li>)   // 2nd way of rendring (but we write this logic when we are displaying like given below in p tag)

//     return (
//         <div className = "product">
//             <h3>{title}</h3>
//             <p>Description: {description}</p>
//             <p>Price: {price} </p>

//             <p>{features}</p>  {/*whenever in js we try to render array in props the individual item from props will be extracted and then displayed*/}

//             {/* <p>{features2}</p>  Here nothing will be displayed in case of object we need to access key anad then it will render */}

//             {/* <p>{list}</p>  */}

//             <p>
//                 {features.map((feature) => (   // 2nd way of rendring
//                     <li>{feature}</li>
//             ))}
//             </p>
//             <p>{features2.a}</p>
//         </div>
//     );
// }

// // 4-Conditionals
// function Product({ title, description, price, features, features2 }) {

//     // 1st way to apply discount
//   if (price > 30000) {
//     return (
//       <div className="product">
//         <h3>{title}</h3>
//         <p>Description: {description}</p>
//         <p>Price: {price} </p>
//         <p>Discount of 5%</p>
//       </div>
//     );
//   } else {
//     return (
//       <div className="product">
//         <h3>{title}</h3>
//         <p>Description: {description}</p>
//         <p>Price: {price} </p>
//       </div>
//     );
//   }
// }

// // 4-Conditionals (2nd and beter way to apply disount)
// function Product({ title, description, price, features, features2 }) {
//     let isDiscount = price > 30000 ? "Discount of 5%" : "";
//     return (
//         <div className="product">
//             <h3>{title}</h3>
//             <p>Description: {description}</p>
//             <p>Price: {price} </p>
//             {/* <p>{isDiscount}</p>   */}

//             {/* 1 way to write in case of best case */}
//             {/*To avoid extra node in dom tree*/}
//             {/* {price > 30000 ? <p>Discount of 5%</p> : null} */}

//             {/* When u want to return something in case of else block */}
//             {/* {price > 30000 ? <p>Discount of 5%</p> : <a href="#">Get Discount</a>} */}

//             {/* 2nd Way to write in case of best case */}
//             {price > 30000 && <p>Discount of 5%</p>}
//         </div>
//   );
// }

// 5-Dynamic Component Styling
function Product({ title, description, price, features, features2 }) {
    // let styles = {backgroundColor : "yellow"};

    // only applied on product where discoutn > 30000
    let isDiscount = price > 30000;
    let styles = { backgroundColor : isDiscount ? "pink" : ""};

  
    return (
        <div className="product" style = {styles}> 
        {/*This above styling will be applied for all product component but we want to apply styling on component that must satisfy some conditions*/}

            <h3>{title}</h3>
            <p>Description: {description}</p>
            <p>Price: {price} </p>
    
            {/* here price > 30000 is repeating so we can shift it to isDiscount variable */}
            {isDiscount && <p>Discount of 5%</p>} 
        </div>
  );
}
export default Product;
