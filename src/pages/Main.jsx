import React, { useState, useEffect, useRef, useContext } from 'react';
import { AppContext } from '../App';
import './main.css';
import SideMenu from '../components/SideMenu';
import Header from './Header';
import Home from './Home';
import Categories from './Categories';
import MyLibrary from './MyLibrary';
import Bag from './Bag';

function Main() {
  const { library, bag } = useContext(AppContext);

  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

  const homeRef = useRef(null);
  const categoriesRef = useRef(null);
  const bagRef = useRef(null);
  const libraryRef = useRef(null);

  const sections = [
    { ref: homeRef, name: 'home' },
    { ref: categoriesRef, name: 'categories' },
    { ref: bagRef, name: 'bag' },
    { ref: libraryRef, name: 'library' },
  ];

  const handleToggleActive = () => {
    setActive((prev) => !prev);
  };

  const handleSectionActive = (target) => {
    sections.forEach((section) => {
      if (section.ref.current) {
        section.ref.current.classList.remove('active');
        if (section.ref.current.id === target) {
          section.ref.current.classList.add('active');
        }
      }
    });
  };

  const fetchData = async () => {
    try {
      const response = await fetch('/api/gamesData.json');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setGames(data);
    } catch (error) {
      console.error('Error fetching games data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <SideMenu active={active} sectionActive={handleSectionActive} />
      <div className={`banner ${active ? 'active' : ''}`}>
        <Header toggleActive={handleToggleActive} />
        <div className="container-fluid">
          <Home games={games} reference={homeRef} />
          <Categories games={games} reference={categoriesRef} />
          <MyLibrary games={library} reference={libraryRef} />
          <Bag games={bag} reference={bagRef} />
        </div>
      </div>
    </main>
  );
}

export default Main;
