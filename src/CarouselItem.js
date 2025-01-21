import React from 'react'
import DOMPurify from 'dompurify'

const CarouselItem = ({ title, description, img, id, handleAnimeClick }) => {
  const sanitizedDescription = DOMPurify.sanitize(description);

  return (
    <div className='align-top inline-flex items-center lg:py-6 text-slate-50' style={{ width: "100%" }}>
        <div className="flex flex-col-reverse gap-4 lg:flex-row">
            <div className="flex-col basis-5/6 max-w-9/10 ml-[5%] lg:ml-0 text-center lg:text-left">
                <h1 className="text-4xl font-semibold whitespace-normal line-clamp-3 sm:text-6xl lg:text-4xl xl:line-clamp-none xl:text-5xl">{title}</h1>
                <p 
                  className="whitespace-normal pr-[0.5rem] hover:overflow-auto scrollbar mt-5 line-clamp-6 lg:line-clamp-4 xl:mt-10 2xl:line-clamp-[9] text-gray-400"
                  dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
                ></p>
                <button className="hidden ml-0.5 mt-5 bg-violet-600 py-3 px-4 rounded-md text-4xl lg:block xl:mt-10 cursor-pointer" onClick={() => handleAnimeClick(id)}>Play Now!</button>
            </div>
            <div className="">
              <img className="aspect-video object-cover max-h-full max-w-full lg:rounded-md" src={img} alt="Logo"/>
              <button className="mr-[5%] float-right -mt-12 relative bg-violet-600 py-1 px-2 rounded-md text-xl md:-mt-20 md:text-4xl md:px-4 md:py-3 lg:hidden cursor-pointer" onClick={() => handleAnimeClick(id)}>Play Now!</button>
            </div>
        </div>
    </div>
  )
}

export default CarouselItem