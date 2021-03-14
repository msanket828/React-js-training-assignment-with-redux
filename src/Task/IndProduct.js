import React, { Fragment } from 'react'

function IndProduct({ item }) {
  return (
    <Fragment>
      <div className="IndProduct mt-5">
        <div class="card">
          <div class="card-header text-left font-weight-bold">
            Individual Product / Selected Product
          </div>
          <div class="card-body">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="d-flex justify-content-between align-item-center">
                  <p class="font-weight-normal w-50">Name:</p>
                  <p class="font-weight-bold w-50">{item.productId}</p>
                </div>
                <div className="d-flex justify-content-between align-item-center">
                  <p class="font-weight-normal w-50">Product Name:</p>
                  <p class="font-weight-bold w-50">{item.productName}</p>
                </div>
                <div className="d-flex justify-content-between align-item-center">
                  <p class="font-weight-normal w-50">Product Code:</p>
                  <p class="font-weight-bold w-50">{item.productCode}</p>
                </div>
                <div className="d-flex justify-content-between align-item-center">
                  <p class="font-weight-normal w-50">Description:</p>
                  <p class="font-weight-bold w-50">{item.description}</p>
                </div>
                <div className="d-flex justify-content-between align-item-center">
                  <p class="font-weight-normal w-50">Price:</p>
                  <p class="font-weight-bold w-50">{item.price}</p>
                </div>
                <div className="d-flex justify-content-between align-item-center">
                  <p class="font-weight-normal w-50">Star Rating:</p>
                  <p class="font-weight-bold w-50">{item.starRating}</p>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center justify-content-center">
                <img src={item.imageUrl} alt={item.productName} class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment >


  )
}

export default IndProduct;