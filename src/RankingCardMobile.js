import React from 'react'

const RankingCardMobile = ({ img, title, id, handleAnimeClick }) => {
  return (
    <div className='flex flex-col'>  
        <img className="h-[22rem] max-w-fit rounded-lg" src={img} alt="Logo" onClick={() => handleAnimeClick(id)}/>
        <p className="text-gray-300 hover:text-violet-400 font-medium text-xl line-clamp-2 pr-2 cursor-pointer" onClick={() => handleAnimeClick(id)}>{title}</p>
    </div>
  )
}

export default RankingCardMobile