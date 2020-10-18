// import our actions
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
  cart: [
    {
      _id: '1',
      name: 'Soup',
      purchaseQuantity: 1
    },
    {
      _id: '2',
      name: 'Bread',
      purchaseQuantity: 2
    }
  ],
  cartOpen: false
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

test('ADD_TO_CART', () => {
  let newState = reducer(initialState, {
    type: ADD_TO_CART,
    product: { purchaseQuantity: 1 }
  });

  expect(newState.cart.length).toBe(3);
  expect(initialState.cart.length).toBe(2);
});

test('ADD_MULTIPLE_TO_CART', () => {
  let newState = reducer(initialState, {
    type: ADD_MULTIPLE_TO_CART,
    products: [{}, {}]
  });

  expect(newState.cart.length).toBe(4);
  expect(initialState.cart.length).toBe(2);
});

test('REMOVE_FROM_CART', () => {
  let newState1 = reducer(initialState, {
    type: REMOVE_FROM_CART,
    _id: '1'
  });

  // cart is still open
  expect(newState1.cartOpen).toBe(true);

  // the second item should now be the first
  expect(newState1.cart.length).toBe(1);
  expect(newState1.cart[0]._id).toBe('2');

  let newState2 = reducer(newState1, {
    type: REMOVE_FROM_CART,
    _id: '2'
  });

  // cart is empty and closed
  expect(newState2.cartOpen).toBe(false);
  expect(newState2.cart.length).toBe(0);

  expect(initialState.cart.length).toBe(2);
});

test('UPDATE_CART_QUANTITY', () => {
  let newState = reducer(initialState, {
    type: UPDATE_CART_QUANTITY,
    _id: '1',
    purchaseQuantity: 3
  });

  expect(newState.cartOpen).toBe(true);
  expect(newState.cart[0].purchaseQuantity).toBe(3);
  expect(newState.cart[1].purchaseQuantity).toBe(2);

  expect(initialState.cartOpen).toBe(false);
});

test('CLEAR_CART', () => {
  let newState = reducer(initialState, {
    type: CLEAR_CART
  });

  expect(newState.cartOpen).toBe(false);
  expect(newState.cart.length).toBe(0);
  expect(initialState.cart.length).toBe(2);
});

test('TOGGLE_CART', () => {
  let newState = reducer(initialState, {
    type: TOGGLE_CART
  });

  expect(newState.cartOpen).toBe(true);
  expect(initialState.cartOpen).toBe(false);

  let newState2 = reducer(newState, {
    type: TOGGLE_CART
  });

  expect(newState2.cartOpen).toBe(false);
});


