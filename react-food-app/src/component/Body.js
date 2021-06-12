import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classes from './Body.module.css'
import { fetchAllMenus } from '../action/menuAction'
import MenuItem from './MenuItem'


const Body = () => {
    let menus = useSelector(state => state.menu.menu);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllMenus());
    }, []);

    return (
        <div className={classes.menuBody}>
            <div className={classes.menulist}>
                {menus && menus.map(m => <MenuItem key={m.id} menu={m} />)}
            </div>
        </div>);
};

export default Body;