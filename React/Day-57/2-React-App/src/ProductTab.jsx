import Product from './Product';

// 1-Passing Props
// function ProductTab() {
//     return (
//         <>
//             {/* <Product title="Phone" description="This is Phone" price = "40000"/> 
//             <Product title="Laptop" description="This is Laptop" price = "50000"/>
//             <Product title="Pen" description="This is Laptop" price = "70000"/> */}

//             {/*To Pass numbers as props we use curley braces*/}
//             <Product title="Phone" description="This is Phone" price = {40000}/> 
//             <Product title="Laptop" description="This is Laptop" price = {50000}/>
//             <Product title="Pen" description="This is Laptop"/>  {/*If we dont pass price for laptop as props*/}
//         </>
//     );
// }

// // 2-Passing Arrays to Props 
// function ProductTab() {

//     // Array
//     let options = ["hi-tech", " durable", "fast"]

//     // Object
//     let options2 = {
//         a: "hi-tech",
//         b: "durable",
//         c: "fast"
//     }

//     return (
//         <>
//             <Product 
//                 title = "Phone" 
//                 description = "This is Phone" 
//                 price = {40000} 
//                 features = {options} 
//                 // features2 = {options2} // 1st way
//                 features2 = {{a: "hi-tech", b: "durable",c: "fast"}}  // 2nd way
//             /> 
//             <Product 
//                 title = "Laptop" 
//                 description = "This is Laptop" 
//                 price = {50000}
//                 features = {options} 
//                 // features2 = {options2}
//                 features2 = {{a: "hi-tech", b: "durable",c: "fast"}}
//             />
//             <Product 
//                 title = "Pen" 
//                 description = "This is Laptop" 
//                 price = {70000}
//                 features = {options} 
//                 // features2 = {options2}
//                 features2 = {{a: "hi-tech", b: "durable",c: "fast"}}
//             />  
//         </>
//     );
// }

// 3-Rendring Arrays  (1-Way)
function ProductTab() {

    // // Array
    // let options = [<li>"hi-tech"</li>, <li>"durable"</li>, <li>"fast"</li>]   // 1st Way of rendring 2nd is in product.jsx file

    let options = ["hi-tech", "durable", "fast"];

    // Object
    let options2 = {
        a: "hi-tech",
        b: "durable",
        c: "fast"
    }

    return (
        <>
            <Product 
                title = "Phone" 
                description = "This is Phone" 
                price = {40000} 
                features = {options} 
                // features2 = {options2} // 1st way
                features2 = {{a: "hi-tech", b: "durable",c: "fast"}}  // 2nd way
            /> 
            <Product 
                title = "Laptop" 
                description = "This is Laptop" 
                price = {50000}
                features = {options} 
                // features2 = {options2}
                features2 = {{a: "hi-tech", b: "durable",c: "fast"}}
            />
            <Product 
                title = "Pen" 
                description = "This is Laptop" 
                price = {70000}
                features = {options} 
                // features2 = {options2}
                features2 = {{a: "hi-tech", b: "durable",c: "fast"}}
            />  
        </>
    );
}
export default ProductTab;