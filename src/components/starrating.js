import React from 'react';
import Rating from '@material-ui/lab/Rating';

 export default function StarRating(props) {
  const { rating } = props;
 return <Rating name="customized-10" defaultValue={rating} max={10} precision={0.1} readOnly />
}