import { render } from "@testing-library/react";
import React, { Fragment } from "react";
import ProductDetail from "./ProductDetail";
import IndProduct from "./IndProduct";
import Search from "./Search";
import ToggleImage from './ToggleImage'
import removeProduct from '../redux/actions';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getIndProduct: '',
      inputValue: '',
      toggleImage: false,
    }
  }
  productClick = (a) => {
    let indProduct = this.props.realProduct.products.filter(product => {
      return product.productId === a;
    })
    this.setState({
      getIndProduct: indProduct
    })

  }


  searchProduct = (e) => {
    let searchInputValue = e.target.value;
    searchInputValue = searchInputValue.trimLeft();
    this.setState({
      inputValue: searchInputValue
    })
  }

  handleToggleImage = () => {
    this.setState({
      toggleImage: !this.state.toggleImage
    })

    console.log(this.state.toggleImage);
  }

  render() {
    let realProduct = this.props.realProduct.products;
    let getIndProduct = this.state.getIndProduct;
    let inputValue = this.state.inputValue;
    let handleClick = this.props.handleClick;

    return (
      <Fragment>
        {   getIndProduct === "" ? (
          <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-start mt-5 mb-3">
              <div className="w-25">
                <ToggleImage
                  handleToggleImage={this.handleToggleImage}
                />
                <button type="button" className="btn btn-primary"
                  onClick={() => handleClick('addProduct')}
                >
                  Add Product
                        </button>
              </div>
              <div className="w-25">
                <Search
                  inputValue={inputValue}
                  searchProduct={this.searchProduct}
                />
              </div>
            </div>
            <table className="table table-xl-responsive">
              <thead>
                <tr>
                  <th>Image</th><th>ProductName</th><th>ProductCode</th>
                  <th>Description</th><th>Price</th><th>StarRating</th>
                </tr>
              </thead>
              <tbody>
                {
                  realProduct.filter((item) => {
                    return item.productName.includes(this.state.inputValue);
                  }).map((item) => (
                    <ProductDetail
                      key={item.productId}
                      item={item} productClick={() => this.productClick(item.productId)}
                      toggleImage={this.state.toggleImage}

                    />
                  ))
                }
              </tbody>
            </table>
          </div>
        ) :
          getIndProduct.map((item) =>
            <IndProduct
              key={item.productId}
              item={item}
            />
          )
        }
      </Fragment>
    );
  }
}

export default ProductList;
