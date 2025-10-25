import React, { useContext } from 'react';
import './header.css';
import userImg from '../images/IMG_20250513_233213_11zon.jpg';
import { AppContext } from '../App';

function Header({ toggleActive }) {
  const { library, bag } = useContext(AppContext); // ✅ Get from global context

  return (
    <header>
      <a href="#" className="menu" onClick={toggleActive}>
        <i className="bi bi-sliders"></i>
      </a>

      <div className="userItems">
        {/* ❤️ Library / Favorites Count */}
        <a href="#" className="icon">
          <i className="bi bi-heart-fill"></i>
          <span className="like">{library.length}</span>
        </a>

        {/* 👜 Bag Count */}
        <a href="#" className="icon">
          <i className="bi bi-bag-fill"></i>
          <span className="bag">{bag.length}</span>
        </a>

        {/* 👤 User Info */}
        <div className="avatar">
          <a href="#">
            <img src={userImg} alt="User" />
          </a>
          <div className="user">
            <span>User Name</span>
            <a href="#">View Profile</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
