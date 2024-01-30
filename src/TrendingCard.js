import React from 'react'

const TrendingCard = ({ img, title }) => {
  return (
    <div className='xl:min-w-fit'>
        <img className="h-[full] max-w-fit xl:max-w-0 xl:min-w-full rounded-lg" src={img} alt="Logo"/>
        <p className="text-gray-400 text-lg mb-6 line-clamp-2 pr-2">{title}</p>
    </div>
  )
}

export default TrendingCard