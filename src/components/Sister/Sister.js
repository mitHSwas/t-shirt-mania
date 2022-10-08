import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [mny, sney] = useContext(MoneyContext);
    return (
        <div>
            <h4>Sister</h4>
            <p><small>Money: ${mny}</small></p>
            <button onClick={() => sney(mny + 399)}>Add Three Digit</button>
        </div>
    );
};

export default Sister;