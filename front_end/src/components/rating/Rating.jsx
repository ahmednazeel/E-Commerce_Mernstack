import { Rating } from '@mui/material'
import React from 'react'

const RatingProduct = ({rating}) => {
  return (
    <div className='d-flex align-items-center gap-3'>
            the rating is{" "}:
            <Rating
              name="text-feedback"
              value={rating}
              readOnly
              precision={0.5}
            />
    </div>
  )
}

export default RatingProduct