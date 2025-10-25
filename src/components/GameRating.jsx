import React, { useState, useEffect } from 'react';
import './gameRating.css';

function GameRating({ rating }) {
  const [stars, setStars] = useState([]);

  const generateStars = () => {
    const starsArray = [];
    if (rating > 5 || rating < 1) return [];
    for (let i = 0; i < rating; i++) {
      starsArray.push(i);
    }
    return starsArray;
  };

  useEffect(() => {
    setStars(generateStars());
  }, [rating]);

  // ✅ Put JSX on same line as return
  return (
    <div className='gameRating'>
      {stars.map((star) => (
        <i key={star} className='bi bi-star-fill'></i>
      ))}
    </div>
  );
}

export default GameRating;
