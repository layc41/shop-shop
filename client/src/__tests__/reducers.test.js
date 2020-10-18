// import our actions
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
  } from '../utils/actions';

// tests to ensure that the intended output occurs
// purpose of reducer: fx that updates state by returning new state object
// BUT doesn't alter original state
// b/c of this state is immutable - never should be directly altered in anyway


// import reducer function
  import { reducer } from '../utils/reducers';
  
  // create a sample of what our global state will look like
  const initialState = {
    products: [],
    categories: [{ name: 'Food' }],
    currentCategory: '1',
  };

  // we look to create  a new state object
  test('UPDATE_PRODUCTS', () => {
    // reducer function takes in two arguments 
    // 1. current state object - to copy it
    // 2. action we're doing to update state (broken into to parts)
    // a. type: type of action we're performing and should already be defined
    // b. value: doesn't always have the name "value" - represents data we want to usin with the action (a)
    
    // defintes new state as a reducer that takes the initialState (defined on line 17)
    let newState = reducer(initialState, {
      // reducer that is being tested
      type: UPDATE_PRODUCTS,
      // Adding two objects
      products: [{}, {}]
    });
  
    // the new state should have two objects in products
    expect(newState.products.length).toBe(2);
    // the initial state should have a length of zero because on line 17 it is defined as an empty array
    expect(initialState.products.length).toBe(0);
  });
  
  test('UPDATE_CATEGORIES', () => {
    let newState = reducer(initialState, {
      type: UPDATE_CATEGORIES,
      categories: [{}, {}]
    });
  
    expect(newState.categories.length).toBe(2);
    expect(initialState.categories.length).toBe(1);
  });

  test('UPDATE_CURRENT_CATEGORY', () => {
    let newState = reducer(initialState, {
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: '2'
    });
  
    expect(newState.currentCategory).toBe('2');
    expect(initialState.currentCategory).toBe('1');
  });
  