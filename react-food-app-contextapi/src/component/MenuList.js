import React, { useContext } from 'react'
import AppContext from '../context/appContext'

const MenuList = () => {
    const appContext = useContext(AppContext);
    
    return(
        <div onClick={e => e.stopPropagation()} >
            {appContext.menus.map(m => <div key={m.id}>{m.name} - {m.price}<button onClick={() => appContext.addToCart(m)}>Add</button></div>)}
        </div>
    );
}

export default MenuList;