import React, { Fragment } from 'react'

function ToggleImage({ handleToggleImage }) {
  return (
    <Fragment>
      <button type="button" className="btn btn-primary mr-2" onClick={handleToggleImage}>
        Toggle Image
    </button>
    </Fragment>
  )
}

export default ToggleImage;