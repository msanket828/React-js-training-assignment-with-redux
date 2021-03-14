
// create first function ... this will manage the states of store

import _products from '../data/products'

const ProductReducer = function products(state = _products, action) {
  // console.log(_products);
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return [...state];
    // break;

    case "Add_PRODUCTS":
      return [...state, action.product];
    // break;
    case "REMOVE_PRODUCTS":
      return [...state];
    // break;
    default:
      return state;
    // break;
  }
}

export default ProductReducer;