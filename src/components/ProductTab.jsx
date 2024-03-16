import Product from "./Product";
function ProductTab(){
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center"
    }
    return(
        <div style={styles}>
        <Product title="Logi-tech" idx={0}></Product >
        <Product title="Keyboard" idx={1}></Product>
        <Product title="CPU" idx={2}></Product>
        <Product title="Mouse" idx={3}></Product>
        </div>
    )
}
export default ProductTab;