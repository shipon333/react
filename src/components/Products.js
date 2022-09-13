

function Products(Props){
    const {id, title, price, description, category, image, rating} = Props.data;
    return (
        // console.log(rating),
        <div className="products-wapper">
            <img src={image} alt="" />
            <h1>{title}</h1>
            <span>Price : $ {price}</span><br />
            <span>Rating : {rating.rate}</span>
            <p>{description}</p>
            <button>Add To Card</button>
        </div>
    )
}
export default Products;