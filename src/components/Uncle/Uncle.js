import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const mny = useContext(MoneyContext)
    return (
        <div>
            <h4>Uncle</h4>
            <p><small>I need Money: {mny}</small></p>
        </div>
    );
};

export default Uncle;