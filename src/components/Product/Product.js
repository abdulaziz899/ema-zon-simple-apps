import React from 'react';
import './Product.css'
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    console.log(props);
    const product=props.product;
    return (
        <div className="productContainer">
            <div className="productImg">
                <img src={product.img} alt="aziz"/>
            </div>
            <div className="productDetails">
                <h3>{product.name}</h3>
                <p> By seller : {product.seller}</p>
                <p>price:{product.price}</p>
                <p>stock :{product.stock}</p>
                <button onClick={()=>props.handleAddProduct(props.product)} className="addCartBtn"> <FontAwesomeIcon icon={faShoppingCart}/>  Add Cart</button>
            </div>
        </div>
    );
};

export default Product;