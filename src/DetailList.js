import React from 'react'
import DOMPurify from 'dompurify'

const DetailList = ({ animeData }) => {
  const sanitizedDescription = DOMPurify.sanitize(animeData.description);
  const genres = animeData.genres;

  return (
    <div className="flex gap-4 mt-[1rem] 2xl:pl-[1.5rem] 2xl:block 2xl:mt-0">
        <img className="self-center h-[7rem] md:h-[10rem]" src={animeData.coverImage.large} alt="Logo" />
        <div className="2xl:mt-[0.5rem]">
          <p className="text-2xl md:text-4xl">{animeData.title.english}</p>
          <p 
            className="pr-[0.5rem] line-clamp-4 hover:overflow-auto scrollbar mt-[0.5rem] md:line-clamp-6 lg:max-w-[85%] xl:max-w-[70%] 2xl:max-w-full 2xl:line-clamp-[8]"
            dangerouslySetInnerHTML={{ __html: sanitizedDescription }}>
          </p>
          <div className="2xl:hidden flex gap-3 items-center mt-[0.5rem] flex-row flex-wrap">
          {genres.map((genre, index) => (
                  <div key={index} className={"flex justify-start max-w-fit"}>
                      <div className="rounded-full bg-zinc-800 px-2 text-sm">
                          <p className={"p-2"}>{genre}</p>
                      </div> 
                  </div>
              ))}
        </div>
        </div>
        <div className="hidden 2xl:flex gap-3 items-center 2xl:mt-[1rem] 2xl:flex-row 2xl:flex-wrap">
          {genres.map((genre, index) => (
                  <div key={index} className={"flex justify-start max-w-fit"}>
                      <div className="rounded-full bg-zinc-800 px-2 text-sm">
                          <p className={"p-2"}>{genre}</p>
                      </div> 
                  </div>
              ))}
        </div>
    </div>
    
  )
}

export default DetailList