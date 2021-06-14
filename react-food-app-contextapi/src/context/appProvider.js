import AppContext from './appContext'
import { useReducer } from 'react'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

const appReduer = (state={}, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            let cart;
            if(state.cart.items){
                
                let existingItem = state.cart.items.find(i => i.id === action.payload.id);

                if(existingItem)
                    existingItem.quantity++;

                cart = existingItem 
                        ? { items:[...state.cart.items], total:state.cart.total+existingItem.price } 
                        : { items:[...state.cart.items,{...action.payload, quantity:1}], total:state.cart.total+action.payload.price };
            }
            else{
                cart = { items:[{...action.payload, quantity:1}], total:action.payload.price }
            }

            return {
                ...state,
                cart
            };
        default:
            return state;
    }
}

const defaultState = {
    menus:[{
          "name": "Chicken kasha",
          "description": "Delicious chicken kasha",
          "price": 100,
          "id": 1
        },
        {
          "name": "Mutton Kasha",
          "description": "Aromatic Mutton Kasha",
          "price": 130,
          "id": 2
        },
        {
          "name": "Roti",
          "description": "Warm and soft roti",
          "price": 5,
          "id": 3
        },
        {
          "name": "Rice",
          "description": "Basmati rice",
          "price": 11,
          "id": 4
        }],
    cart:{}
}

const AppProvider = props => {
    const [appState, dispatch] = useReducer(appReduer, defaultState);

    const appContext = {
        menus:[...appState.menus],
        cart:{...appState.cart},
        addToCart: item => {
            dispatch({ type: "ADD_TO_CART", payload:item});
        }
    };

    return (<AppContext.Provider value={appContext}>
        {props.children}
    </AppContext.Provider>);
};

export default AppProvider;