import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Please Buy at least one T-shirt</p>
    }
    else if (cart.length === 1) {
        message = <div>
            <p>Maa'r jonnho akta kheno</p>
            <p>Babar jonnho akta kheno</p>
        </div>
    }
    else {
        message = <p>Thanks For Buying!!!</p>
    }

    return (
        <div>
            <h2>Ordered Summary</h2>
            <p>T-shirt selected: {cart.length}</p>
            {
                cart.map(ts => <p key={ts._id}>
                    {ts.name} <button onClick={() => handleRemoveFromCart(ts)}>X</button>
                </p>)
            }
            {message}
            {cart.length > 2 ? <p>Don't buy more.....</p> : <p>Buy more and more....</p>}
            {cart.length === 2 && <p>Baby one mine and another yours!</p>}
        </div>
    );
};

export default Cart;