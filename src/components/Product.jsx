import "./Product.css"
import Price from "./Price";
function Product({title,idx}){
    let oldPrices=["Rs12,000","Rs10,000","Rs5000","Rs1000"];
    let newPrices=["Rs8000","Rs5000","Rs2000","Rs599"];
    let description=[["Best selling item","5 Programmable buttons"],["Trending keyboard","intuitive surface"],["Desined for computer","light weight"],["Portable mouse","wireless"]];
    return(
        <div className="Product">
        <h1>{title}</h1>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}></Price>
        </div>
    );
}
export default Product;