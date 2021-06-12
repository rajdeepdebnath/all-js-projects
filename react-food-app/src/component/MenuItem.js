import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../action/cartAction'
import classes from './Body.module.css'

const prepareCart = (cart,menu) => {
    let { menus, total } = cart;

    if(menus){
        let existingMenu = menus.find(m => m.id === menu.id);

        if(existingMenu)
            existingMenu.quantity++;

        menus = existingMenu 
        ? [...menus ]
        : [...menus,{ ...menu, quantity:1 }];
        
        total += existingMenu ? existingMenu.price : menu.price;
    }
    else{
        menus = [{ ...menu, quantity:1 }];
        total = menu.price;
    }

    return { menus, total };
}

const MenuItem = ({menu}) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const handleCartAdd = (menu) => {
        let changedCart = prepareCart(cart, menu);
        dispatch(addItemToCart(changedCart));
    };

    return (
        <div className={classes.menuitem}>
            <div className={classes.menudetails}>
                <div>{menu.name}</div>
                <div>{menu.description}</div>
            </div>
            <div className={classes.menuprice}>
                Rs. {menu.price}/-
                <div><button onClick={() => handleCartAdd(menu)}>Add to Cart</button></div>
            </div>
        </div>
    );
}

export default MenuItem;