import React from 'react';
import ReactStars from 'react-rating-stars-component';



function Star({ starData }) {
  let starVal = Math.round(starData);
  // let htmlString = "";
  // for (var i = 0; i < starVal; i++) {
  //   htmlString += `<i className="fa fa-star"></i>`;
  // }

  // console.log(htmlString);

  return (
    <div className="starParent" >
      {/* <p>{starVal}</p> */}
      <ReactStars count={5}
        size={20}
        value={starVal}
        activeColor="#ffd700"
      />

    </div>
  )
}

export default Star