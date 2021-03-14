import { render } from '@testing-library/react';
import React, { Fragment } from 'react'

function Search({ inputValue, searchProduct }) {

  return (
    <Fragment>
      <label htmlFor="ipFilter"> FilterBy: </label>
      <input type="text" placeholder="Search" className="form-control" value={inputValue} name="search" onChange={searchProduct} />
    </Fragment>
  )
}

export default Search;