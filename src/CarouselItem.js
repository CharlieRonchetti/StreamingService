import React from 'react'

const CarouselItem = ({ data }) => {
  return (
    <div className='align-top inline-flex items-center justify-center h-min py-6 text-slate-50' style={{ width: "100%" }}>
        <div className="flex gap-4">
            <div className="flex-col basis-3/6">
                <h1 className="text-6xl whitespace-normal mt-20">{data.animeName}</h1>
                <p className="whitespace-normal mt-10">{data.description}</p>
                <button className="mt-10 bg-violet-600 py-3 px-4 rounded-md text-4xl">Play Now!</button>
            </div>
            <div>
              <img className="rounded-2xl max-w-full max-h-full" src={data.img} alt="Logo"/>
            </div>
        </div>
    </div>
  )
}

export default CarouselItem