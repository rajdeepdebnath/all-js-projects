import React, { useContext } from 'react'
import AppContext from '../context/appContext'

const Cart = () => {
    const appContext = useContext(AppContext);

    return (
        <div>
            {appContext.cart.items?.map(i => <div key={i.id}>{i.name}</div>)}
            <div>{appContext.cart.total && `Total: ${appContext.cart.total}`}</div>
        </div>
    );
}

export default Cart;