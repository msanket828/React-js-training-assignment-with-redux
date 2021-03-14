import React, { Fragment } from 'react'
import Star from './Star'


function ProductDetail({ item, productClick, toggleImage, removeProduct }) {
  // debugger;
  return (
    <Fragment>
      {
        <tr className="mb-3 font-weight-medium">
          <td><div style={{ visibility: toggleImage ? 'hidden' : 'visible' }}><img src={item.imageUrl} alt="{item.productName}" class="img-fluid" width="100" height="100" /></div></td>
          {/* <td>{item.productId}</td> */}
          <td><a href="javascript:void(0);" onClick={() => productClick(item.productId)}>{item.productName}</a></td>
          <td>{item.productCode}</td>
          <td>{item.description}</td>
          <td>$ {item.price}</td>
          <td><Star starData={item.starRating} /></td>
        </tr>
      }
    </Fragment>
  )
}

export default ProductDetail;