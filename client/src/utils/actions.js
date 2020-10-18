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