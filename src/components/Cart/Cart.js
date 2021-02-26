import React from 'react';

const Cart = (props) => {
    const cart =props.cart;
    let total=0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total=total+product.price;
    }
    const tax=Math.floor(total/10)
    let shipping=0;
    if (total> 0 && total<15) {
        shipping=12.99;
    }
    else if(total>15 && total<35){
        shipping=4.99;
    }
    else if(total>35){
        shipping=0;
    }
    return (
        <div>
            <h1>Add Cart Now</h1>
            <h2>Order Summary</h2>
            <p>Items Ordered :{cart.length}</p>
            <p>Tax And VAT: $ {tax}</p>
            <p>shipping: $ {shipping}</p>
            <p>total price:$ {Math.round(total+shipping)}</p>
        </div>
    );
};

export default Cart;