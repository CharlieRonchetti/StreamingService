import React from 'react'

const RankingCardMobile = ({ img, rank, title }) => {
  return (
    <div className='flex flex-col'>  
        <img className="h-[full] max-w-fit rounded-lg" src={img} alt="Logo"/>
        <p className="text-gray-400 text-xl line-clamp-2 pr-2">{title}</p>
    </div>
  )
}

export default RankingCardMobile