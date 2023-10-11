import React from 'react'

const CarouselItem = ({ data }) => {
  return (
    <div className='align-top inline-flex items-center h-min lg:py-6 text-slate-50' style={{ width: "100%" }}>
        <div className="flex flex-col-reverse gap-4 lg:flex-row lg:items-top 2xl:items-center">
            <div className="flex-col basis-3/6 max-w-9/10 ml-[5%] lg:ml-0 text-center lg:text-left">
                <h1 className="text-4xl font-semibold whitespace-normal sm:text-6xl lg:text-4xl xl:text-5xl">{data.animeName}</h1>
                <p className="whitespace-normal mt-5 line-clamp-4 xl:mt-10 2xl:line-clamp-none text-gray-400">{data.description}</p>
                <button className="hidden ml-0.5 mt-5 bg-violet-600 py-3 px-4 rounded-md text-4xl lg:block xl:mt-10">Play Now!</button>
            </div>
            <div className="">
              <img className="max-w-full max-h-full lg:rounded-md" src={data.img} alt="Logo"/>
              <button className="mr-[5%] float-right -mt-12 relative bg-violet-600 py-1 px-2 rounded-md text-xl md:-mt-20 md:text-4xl md:px-4 md:py-3 xl:mt-10 lg:hidden">Play Now!</button>
            </div>
        </div>
    </div>
  )
}

export default CarouselItem