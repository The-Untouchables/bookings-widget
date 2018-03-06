import React from 'react';
import ReactDOM from 'react-dom';
import ReactStarRating from 'react-star-rating-component';

var StarRating = (props) => (

  <ReactStarRating 
  	className='star-rating'
    editing={false}
    emptyStarColor="#767676"
    name="rating"
    starColor="#007a87"
    starCount={5}
    value={props.rating}
  />
  
);

export default StarRating;