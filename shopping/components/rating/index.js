import React, { useState } from 'react'
import { Rating } from 'react-native-ratings';
import { COLORS } from '../../contains';

const RatingComponent = ({ product = false }) => {
    const [rating, setRating] = useState('')

    // const ratingCompleted = ({ rating }) => {
    //     console.log(rating);
    // }
    // const color = product ? 'pink' : 'yellow'

    return (
        <Rating
            type='star'
            startingValue={5}
            ratingCount={5}
            imageSize={20}
            //   onFinishRating={ratingCompleted}
            tintColor={COLORS.backgroundChat}
        />
    )
}
export default RatingComponent
