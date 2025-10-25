import React, { useState, useContext } from 'react';
import './gameCard.css';
import GameRating from './GameRating';
import { AppContext } from '../App';

function GameCard({ game }) {
  const [liked, setLiked] = useState(false);
  const { library, setLibrary, bag, setBag } = useContext(AppContext);

  const handleAddToLibrary = (game) => {
    const isInLibrary = library.some((item) => item._id === game._id);
    if (isInLibrary) {
      setLibrary(library.filter((item) => item._id !== game._id));
      setLiked(false);
    } else {
      setLibrary([...library, game]);
      setLiked(true);
    }
  };

  const handleAddToBag = (game) => {
    const isInBag = bag.some((item) => item._id === game._id);
    if (!isInBag) {
      setBag([...bag, game]);
      alert(`${game.title} added to bag!`);
    } else {
      alert(`${game.title} is already in your bag.`);
    }
  };

  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gameCard">
        <img src={game.img} alt={game.title} className="img-fluid" />

        <button
          className={`favorite-btn ${liked ? 'liked' : ''}`}
          onClick={() => handleAddToLibrary(game)}
        >
          <i className="bi bi-heart-fill"></i>
        </button>

        <div className="gameFeature">
          <span className="gameType">{game.level}</span>
          <GameRating rating={game.rating} />
        </div>

        <div className="gameTitle mt-3 mb-2">{game.title}</div>

        <div className="gamePrice">
          {game.discount !== 0 && (
            <>
              <span className="discount">
                <i>{game.discount * 100}%</i>
              </span>
              <span className="prevPrice">${game.price.toFixed(2)}</span>
            </>
          )}
          <span className="currentPrice">
            ${((1 - game.discount) * game.price).toFixed(2)}
          </span>
        </div>

        <button className="addBag" onClick={() => handleAddToBag(game)}>
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>
    </div>
  );
}

export default GameCard;
