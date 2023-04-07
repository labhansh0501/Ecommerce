import "./Product.scss";

import prod from "../../../assets/products/earbuds-prod-1.webp";



const Product = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod}  alt="" />
            </div>
            <div className="prod-details">
                <div className="name">ProductName</div>
                <div className="price">&#8377;4999</div>
            </div>
        </div>
    );
};

export default Product;

