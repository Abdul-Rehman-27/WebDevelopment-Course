import Product from './Product';
function ProductTab() {
    return (
        <>
            {/* <Product title="Phone" description="This is Phone" price = "40000"/> 
            <Product title="Laptop" description="This is Laptop" price = "50000"/>
            <Product title="Pen" description="This is Laptop" price = "70000"/> */}

            {/*To Pass numbers as props we use curley braces*/}
            <Product title="Phone" description="This is Phone" price = {40000}/> 
            <Product title="Laptop" description="This is Laptop" price = {50000}/>
            <Product title="Pen" description="This is Laptop"/>  {/*If we dont pass price for laptop as props*/}
        </>
    );
}
export default ProductTab;