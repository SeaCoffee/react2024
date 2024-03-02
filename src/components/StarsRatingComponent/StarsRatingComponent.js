import React from 'react';
import ReactStars from 'react-rating-stars-component';

const StarsRating = ({ rating }) => {
    return (
        <ReactStars
            count={5}
            value={rating / 2}
            size={24}
            activeColor="#ffd700"
        />
    );
};

export default StarsRating;


