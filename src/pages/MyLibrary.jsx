import React from 'react';
import './myLibrary.css';
import GameCard from '../components/GameCard';

function MyLibrary({ games, reference }) {
  return (
    <section id='library' className='library' ref={reference}>
      <div className="container-fluid">
        <div className="row mb-3">
          <h1>My Library</h1>
        </div>

        <div className="row">
          {games.length === 0 ? (
            <h3>Your library is empty. Start adding some games!</h3>
          ) : (
            games.map((game) => <GameCard key={game._id} game={game} />)
          )}
        </div>
      </div>
    </section>
  );
}

export default MyLibrary;
