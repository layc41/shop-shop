// import the possible actions we can person and creates a function called reducer
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART,
    TOGGLE_CART
} from './actions';

import { useReducer } from 'react';

// create function called reducer 
// like in the tests. reducer takes in two arguments initial state & what to update on the initial state
export const reducer = (state, action) => {

    // this function executes the value of the action.type argument
    switch (action.type) {
        // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
        case UPDATE_PRODUCTS:
            return {
                // copy the initial state
                ...state,
                // mset products key to a value of a new array after the action is done
                products: [...action.products]
            };
        // if action type value is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categories array
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            };
        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };

        case ADD_TO_CART:
            return {
                // preserve everything else on state
                ...state,
                cartOpen: true,
                cart: [...state.cart, action.product]
            };

        case ADD_MULTIPLE_TO_CART:
            return {
                ...state,
                cart: [...state.cart, ...action.products],
            };

        case REMOVE_FROM_CART:
            let newState = state.cart.filter(product => {
                return product._id !== action._id;
            });

            return {
                ...state,
                cartOpen: newState.length > 0,
                cart: newState
            };

        case UPDATE_CART_QUANTITY:
            return {
                ...state,
                cartOpen: true,
                cart: state.cart.map(product => {
                    if (action._id === product._id) {
                        product.purchaseQuantity = action.purchaseQuantity;
                    }
                    return product;
                })
            };

        case CLEAR_CART:
            return {
                ...state,
                cartOpen: false,
                cart: []
            };

        case TOGGLE_CART:
            return {
                ...state,
                cartOpen: !state.cartOpen
            };


        default:
            return state;
    }
};
// useProductReducer will be used to help initialize the global state object & let us update the state
// by automatically running it through our custome reducer
// userReducer is meant to mager greater level of state

// created the useProducterReducer function to run the reducer function
export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}
// where does this iniital state come from?
// how does the reducer functioin know where the state and action come from?