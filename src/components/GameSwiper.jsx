import React, { useState, useRef } from 'react';
import './gameSwiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';

function GameSwiper({ games = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const swiperRef = useRef(null);

  const handleToggleTrailer = (index) => {
    const swiper = swiperRef.current;
    if (activeIndex === index) {
      swiper?.autoplay?.start();
      setActiveIndex(null);
    } else {
      swiper?.autoplay?.stop();
      setActiveIndex(index);
    }
  };

  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      effect="coverflow"
      grabCursor={true}
      navigation={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 35,
        stretch: 200,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectCoverflow, Navigation, Autoplay]}
      className="gameSwiper"
    >
      {games.map((game, index) => (
        <SwiperSlide key={game._id || index}>
          <div className="gameSlider">
            {/* Trailer video */}
            {activeIndex === index ? (
              <div className="videoWrapper">
                <iframe
                  width="100%"
                  height="100%"
                  src={`${game.trailer}?autoplay=1&mute=0`}
                  title={game.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <img src={game.img} alt={game.title || 'Game'} />
            )}

            {/* Only show title/description if trailer is not playing */}
            {activeIndex !== index && (
              <div className="content">
                <h2>{game.title}</h2>
                <p>{game.description}</p>
                <div className="buttons">
                  <button className="orderBtn">Order Now</button>
                  <button
                    className={`playBtn ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => handleToggleTrailer(index)}
                  >
                    {activeIndex === index ? (
                      <i className="bi bi-pause-fill"></i>
                    ) : (
                      <i className="bi bi-play-fill"></i>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Play button still visible over trailer */}
            {activeIndex === index && (
              <button
                className="playBtn playBtnOverlay"
                onClick={() => handleToggleTrailer(index)}
              >
                <i className="bi bi-pause-fill"></i>
              </button>
            )}
          </div>
        </SwiperSlide>
      ))}

      
    </Swiper>
  );
}

export default GameSwiper;
