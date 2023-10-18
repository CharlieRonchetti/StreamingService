import React from 'react'

const RankingCardMobile = ({ img, rank, title }) => {
  return (
    <div className='min-w-fit'>
        <div className='relative'>
            <img className="h-[full] min-w-fit xl:min-w-full rounded-lg" src={img} alt="Logo"/>
            <h1 className='absolute top-2 left-4'>1</h1>
        </div>
        <p className="text-gray-400 text-lg mb-6">GOOD NIGHT WORLD</p>
    </div>
  )
}

export default RankingCardMobile