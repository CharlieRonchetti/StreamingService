import React from 'react'
import CarouselItem from './CarouselItem'
import { useState, useEffect } from 'react'

const Carousel = ({ apiData, handleAnimeClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    var count = document.getElementById('inner').childElementCount;

    if (newIndex < 0) {
        newIndex = count - 1;
    } else if (newIndex >= count) {
        newIndex = 0;
    }

    setActiveIndex(newIndex);
  }

  useEffect(() => {
    const interval = setInterval(() => {
        if(!paused) {
            updateIndex(activeIndex + 1);
        }
    }, 5000)

    return () => {
        if (interval) {
            clearInterval(interval);
        }
    }
  })

  const renderCarousel = apiData ? (
    apiData.map((anime, index) => (
      <CarouselItem 
        key={index} 
        img={anime.bannerImage} 
        title={anime.title.english ? anime.title.english : anime.title.romaji} 
        description={anime.description}
        id={anime.id}
        handleAnimeClick={handleAnimeClick}
      />
    ))
    ) : (
      <p>Loading...</p>
    )

  const renderButtons = apiData.map((item, index) => 
        <button key={index} className={`${activeIndex === index ? "active": ""}`} onClick={() => {updateIndex(index)}}></button>
  )

  return (
    <div className='lg:max-w-9/10 mx-auto overflow-hidden' onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className='ml-[5%] flex absolute mt-[51%] z-10 justify-start sm:mt-[53%] lg:hidden lg:-mt-16 lg:ml-0 [&>button]:mx-1 [&>button]:bg-gray-400 [&>button]:rounded-full [&>button]:p-1.5 [&>button]:text-slate-50 [&>button.active]:bg-violet-500'> 
            {renderButtons}
        </div>
        <div id='inner' className='whitespace-nowrap transition-transform duration-700' style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {renderCarousel}
        </div>
        <div className='hidden ml-[5%] absolute -mt-64 z-10 justify-start lg:flex lg:-mt-16 lg:ml-0 [&>button]:mx-1 [&>button]:bg-gray-400 [&>button]:rounded-full [&>button]:p-1.5 [&>button]:text-slate-50 [&>button.active]:bg-violet-500'> 
            {renderButtons}
        </div>
        
    </div>
  )
}

export default Carousel