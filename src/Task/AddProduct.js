import React, { Component } from "react";
import Form from './Form'

class AddProduct extends Component {
  constructor() {
    super()
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const imgLink = event.target.elements.link.value;
    const productname = event.target.elements.productname.value;
    const description = event.target.elements.description.value;
    const productcode = event.target.elements.productcode.value;
    const price = event.target.elements.price.value;
    const starrating = event.target.elements.starrating.value;

    const product = {
      productId: Number(new Date),
      productName: productname,
      imageUrl: imgLink,
      description: description,
      productCode: productcode,
      price: price,
      starRating: starrating
    }

    if (productname && imgLink && description && productcode && price && starrating) {

      // this.props.onAddProduct(product);
      this.props.addProduct(product);
    }

  }

  render() {
    return (
      <div className="w-50 mx-auto my-5">
        <div className="card">
          <div class="card-header">
            <h1 className="text-center mb-4">Add Product</h1>
          </div>
          <div class="card-body">
            <form onSubmit={this.handleOnSubmit}>
              <div className="form-group">
                {/* <input type="text" className="form-control" placeholder="Link" name="link" /> */}
                <Form placeholder="Link" name="link" />
              </div>
              <div className="form-group">
                <Form placeholder="Product name" name="productname" />
              </div>
              <div className="form-group">
                <Form placeholder="Product Code" name="productcode" />
              </div>
              <div className="form-group">
                <Form placeholder="description" name="description" />

              </div>
              <div className="form-group">
                <Form placeholder="price" name="price" />

              </div>
              <div className="form-group">
                <Form placeholder="star rating" name="starrating" />

              </div>
              <div className="text-center">
                <button className="btn btn-secondary px-5">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

}

export default AddProduct;