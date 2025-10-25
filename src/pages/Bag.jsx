import React, { useContext } from 'react';
import './bag.css';
import { AppContext } from '../App';

function Bag({ reference }) {
  const { bag, setBag } = useContext(AppContext);

  const handleRemoveFromBag = (id) => {
    setBag(bag.filter((item) => item._id !== id));
  };

  const totalPrice = bag.reduce((sum, game) => sum + (1 - game.discount) * game.price, 0);

  return (
    <section id="bag" className="bag" ref={reference}>
      <h2>👜 My Bag ({bag.length} {bag.length === 1 ? 'item' : 'items'})</h2>

      {bag.length === 0 ? (
        <p className="text-muted mt-3">Your bag is empty.</p>
      ) : (
        <>
          <div className="bag-list mt-4 row">
            {bag.map((game) => (
              <div key={game._id} className="col-md-4 mb-3">
                <div className="bag-item card p-3 shadow-sm">
              
                  <img
                    src={game.img}
                    alt={game.title}
                    className="img-fluid mb-2 rounded"
                    style={{ height: '150px', objectFit: 'cover' }}
                  />
                  <h5>{game.title}</h5>
                  <p className="text-secondary mb-1">
                    Price: ${(1 - game.discount) * game.price}
                  </p>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemoveFromBag(game._id)}
                  >
                    <i className="bi bi-trash"></i> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="total mt-4">
            <h4>Total: ${totalPrice.toFixed(2)}</h4>
          </div>
        </>
      )}
    </section>
  );
}

export default Bag;
