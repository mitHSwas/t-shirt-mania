import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const tshirts = useLoaderData()
    const [cart, setCart] = useState([])

    const handleAddToCart = (tshirt) => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            alert("T-shirt already added.")
        } else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
            alert("Added successfully.")
        }
    }
    const handleRemoveFromCart = tshirt => {
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining)
    }
    return (
        <div className='home-container'>
            <div className="tShirt-container">
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt.index}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;