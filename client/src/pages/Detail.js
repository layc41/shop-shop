import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';

import { QUERY_PRODUCTS } from "../utils/queries";
import spinner from '../assets/spinner.gif'
  
//import our two global state needs (action and context)
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../utils/actions";

function Detail() {
  // module code
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({})

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products } = state;

  // useEffect checks for a couple of things, checks to see if
  // there's Data in our global state's product's array 
  useEffect(() => {
    // if there's data  in the products array aka product array length > 0
    // if there is a product,then which one is the current one and display it
    if (products.length) {
      setCurrentProduct(products.find(product => product._id === id));
      // if no products saved in global state 
      // will return data from useQuery() to set the product data to the global state
      // then we run through the first 'if' statement
    } else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });
    }
  }, [products, data, dispatch, id]);

  // old code
  // const { id } = useParams();

  // const [currentProduct, setCurrentProduct] = useState({})

  // const { loading, data } = useQuery(QUERY_PRODUCTS);

  // const products = data?.products || [];

  // useEffect(() => {
  //   if (products.length) {
  //     setCurrentProduct(products.find(product => product._id === id));
  //   }
  // }, [products, id]);

  return (
    <>
      {currentProduct ? (
        <div className="container my-1">
          <Link to="/">
            ← Back to Products
          </Link>

          <h2>{currentProduct.name}</h2>

          <p>
            {currentProduct.description}
          </p>

          <p>
            <strong>Price:</strong>
            ${currentProduct.price}
            {" "}
            <button>
              Add to Cart
            </button>
            <button>
              Remove from Cart
            </button>
          </p>

          <img
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          />
        </div>
      ) : null}
      {
        loading ? <img src={spinner} alt="loading" /> : null
      }
    </>
  );
};

export default Detail;
