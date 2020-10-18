export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
// used by the productlist compnonent - before we have to go through apollo everytime
// we want to update that list. The goal is to store the data in a global state instead
// apollo - offline capabilities later and persist our product data.

export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";


export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";

// This file helps create offline capabilities in the future by storing/caching 
// this data into a global state.

// Upper case has no purpose. It just makes it more noticeable.

// 3 definitions of how our application will be updated.

// After adding these, create reducers that will carry out the defined actions. 
// Then you create tests without actually testing out UI. 


// module 22.2.3
export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_MULTIPLE_TO_CART = 'ADD_MULTIPLE_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';
export const TOGGLE_CART = 'TOGGLE_CART';