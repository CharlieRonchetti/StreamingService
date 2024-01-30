import React from 'react'
import CarouselItem from './CarouselItem'
import { useState, useEffect } from 'react'
import bocchi from './img/bocchi.png'
import reign from './img/rotss.png'
import onePiece from './img/onepiece.png'
import kingdom from './img/kingdom.png'
import eminence from './img/eminence.png'
import undead from './img/undead.png'
import goblinSlayer from './img/goblinslayer.png'

const Carousel = () => {
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

  const carouselData = [{
    id: 0,
    animeName: "Reign Of The Seven Spellblades",
    description: "Impressed by Nanao Hibiya's skill with a sword, Kimberly Magic Academy instructor Theodore McFarlane saves the samurai from certain death amid a fierce battle. With his encouragement, Nanao enrolls in the academy, where she instantly becomes a celebr...",
    img: reign
  }, {
    id: 1,
    animeName: "BOCCHI THE ROCK!",
    description: "Hitori Gotou, also known as Bocchi, longs to make friends and perform in a band. But she struggles with shyness and isolation, spending most of her time practicing the guitar, hoping for a chance to showcase her talents. One day, fate steps in as she meets Nijika Ijichi, a confident drummer who invites her to join Kessoku Band...",
    img: bocchi
  }, {
    id: 2,
    animeName: "ONE PIECE",
    description: "Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in batt...",
    img: onePiece
  }, {
    id: 3,
    animeName: "The Kingdoms Of Ruin",
    description: "For ages, humanity flourished through the power of magic, a gift from witches to aid mankind. But times have changed. The scientific Gear Expansion has made both magic and witches obsolete. In order to liberate humanity from the blight of magic, the ...",
    img: kingdom
  }, {
    id: 4,
    animeName: "The Eminence in Shadow Season 2",
    description: "Everything has been going according to plan, but the hour of awakening draws near. Cid Kagenou and Shadow Garden investigate the Lawless City, a cesspool where the red moon hangs low in the sky and three powerful monarchs rule the streets. The true d...",
    img: eminence
  }, {
    id: 5,
    animeName: "Undead Unluck",
    description: "After reading the conclusion of her favorite manga series, Fuuko Izumo finally feels ready to end her existence. For the past 10 years, Fuuko has been afflicted by a condition that brings extreme misfortune to anyone who touches her. This has had a d...",
    img: undead
  }, {
    id: 6,
    animeName: "Goblin Slayer II",
    description: "Goblins are often underestimated despite their ferocity, sly tactics, and rapid breeding. This disregard for their nefarious actions has allowed them to abduct females from rural communities for breeding purposes without consequence. Meanwhile, adventurers prioritize more lucrative quests, giving goblins a free pass...",
    img: goblinSlayer
  }
]

  const renderCarousel = carouselData.map(item => 
        <CarouselItem key={item.id} data={item}></CarouselItem>
    )

  const renderButtons = carouselData.map(item => 
        <button key={item.id} className={`${activeIndex === item.id ? "active": ""}`} onClick={() => {updateIndex(item.id)}}></button>
  )

  return (
    <div className='lg:max-w-9/10 mx-auto overflow-hidden lg:min-h-0' onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
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