import React, { createContext, useContext } from "react";
// createContext: instantiate a new contect object; create a container to hold the global state data and 
// functionality so we can provide it throughout our app
// useContext: allows use to use the state created from createContext
import { useProductReducer } from './reducers';

// when createContext is ran it creates a new context object
// every context comes with a Provider and Consumer
const StoreContext = createContext();

// Provider is a React component that wraps an application in so it can make
// the sate data that's passed into it as a prop available to al other components 

// Consumer grabs and uses data that the provider holds for us
// stores the state
const { Provider } = StoreContext;

// custom provider function used to manage and update our state using the reducer we created
// StoreProvider also instantiates our inital global state with the useProductReducer
const StoreProvider = ({ value = [], ...props }) => {
// value prop opens us up to pass in more data for state if we need to = makes the provider more flexible
// ...props handles any other props the user may need - ex: props.children b/c <storeprovider> will wrap all other components
// if ...props is not included nothing on the page would be rendered 

  // useProductReducer wraps useReducer Hook from react in ./reducers
    const [state, dispatch] = useProductReducer({
      // everytime Product reducer  we receive state & dispatch
      // dispath provides us with the new state and function to update state
      products: [],
      categories: [],
      currentCategory: '',
    });
    // use this to confirm it works!
    console.log(state);
    console.log('context', StoreContext)
    // return StoreContext's provider (line 9) component with our state object and dispatch - the function provided as data for the 
    // value prop 
    return <Provider value={[state, dispatch]} {...props} />;
};

// this is a custom react hook
// this function receives the state and dispatch data the storeprovider stores
// any component that has access to the storeProvider can use any data in the global state container (createContext) - state
// or update it using the dispatch
const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };


// creates own functionality to manage state at a global level and make it available to all of our other 
// compnonents through a special <Provider> component 


// QUESTIONS?
// How does storeContext store the global state and how does it know what the global state is?