import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const first10=fakeData.slice(0,10);
    const [products,setProducts]=useState(first10);
    const [cart , setCart]=useState([])
    const handleAddProduct=(products)=>{
        console.log(products);
        const newCart=[...cart,products];
        setCart(newCart);
    }
    return (
        <div className="shopDetails">
            <div className="shopContainer">
                {
                    products.map(product=><Product
                            product={product}
                            handleAddProduct={handleAddProduct}>
                            </Product>)
                }
            </div>
            <div className=" cartContainer">
                <div className="position">
                    <Cart cart={cart}></Cart>
                </div>
                
            </div>
        </div>
    );
};

export default Shop;