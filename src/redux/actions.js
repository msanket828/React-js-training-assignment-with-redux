import products from "../data/products"


export function loadProducts(products) {
  return {
    type: "LOAD_PRODUCTS",
    products: products
  }
}

export function removeProduct(index) {
  return {
    type: "REMOVE_PRODUCTS",
    index: index
  }
}


export function addProduct(product) {
  return {
    type: "Add_PRODUCTS",
    product: product
  }
}
