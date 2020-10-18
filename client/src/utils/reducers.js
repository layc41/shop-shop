// import the possible actions we can person and creates a function called reducer
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from "./actions";

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