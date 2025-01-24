import React from 'react'

const TrendingCard = ({ img, title, id, handleAnimeClick }) => {
  return (
    <div className='xl:min-w-fit'>
        <img className="h-[22rem] max-w-fit xl:max-w-0 xl:min-w-full rounded-lg overflow-hidden object-cover cursor-pointer" src={img} alt="Logo" onClick={() => handleAnimeClick(id)}/>
        <p className="text-gray-300 hover:text-violet-400 font-medium text-lg mb-6 line-clamp-2 pr-2 cursor-pointer" onClick={() => handleAnimeClick(id)}>{title}</p>
    </div>
  )
}

export default TrendingCard