import React from 'react'

const TrendingCard = ({ img }) => {
  return (
    <div className='min-w-fit'>
        <img className="h-[full] min-w-fit xl:min-w-full rounded-lg" src={img} alt="Logo"/>
        <p className="text-gray-400 text-lg mb-6">GOOD NIGHT WORLD</p>
    </div>
  )
}

export default TrendingCard