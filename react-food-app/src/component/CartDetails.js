import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { placeOrder } from '../action/orderAction'
import { emptyCart } from '../action/cartAction'
import classes from './Header.module.css'

const CardDetails = ({setMenuOpen}) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const handlePlaceOrder = () => {
        let order = {...cart, orderDate:(new Date()).toString()};
        dispatch(placeOrder(order));
        dispatch(emptyCart());
        setMenuOpen(false);
    }

    return (
        <div className={classes.carddetails}>
            <div>Your Cart</div>
            <div className={classes.items}>
                {cart?.menus?.map(m => <div key={m.id}><div>{m.name}</div><div>{m.quantity}</div><div>Rs.{m.quantity*m.price}/-</div></div>)}
                <div><div>Total</div><div>Rs.{cart?.total}/-</div></div>
            </div>
            <button onClick={handlePlaceOrder}>Place order</button>
        </div>
    );
}

export default CardDetails