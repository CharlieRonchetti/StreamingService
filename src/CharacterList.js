import React from 'react'
import HeartSVG from '../src/img/heart-svgrepo-com.svg'

const TrendingCard = ({ characterData }) => {
  return (
    <>
      <div className="flex gap-4 flex-wrap justify-center md:justify-start">
        {characterData ? (
          characterData.map((character, index) => (
            <div key={index} className="mt-[1rem] flex bg-zinc-800 rounded-full w-[20rem] xl:w-[25rem]">
              <img className="rounded-full aspect-square object-cover self-center h-[7rem] 2xl:h-[8rem]" src={character.node.image.large} alt="Logo" />
              <div className="flex flex-col justify-between w-full items-center px-[0.5rem]">
                <p className="text-center mt-[0.5rem]">{character.node.name.full}</p>
                <p className="hidden xl:block text-center">{character.voiceActors[0].name.full}</p>
                <div className="bg-red-600 mb-[0.5rem] rounded-lg flex items-center gap-1 px-1">
                  <img className="h-[1rem]" src={HeartSVG} alt="Logo" />
                  <p className="text-center">{character.node.favourites}</p>
                </div>
              </div>
              <img className="rounded-full aspect-square object-cover self-center h-[7rem] 2xl:h-[8rem]" src={character.voiceActors[0].image.large} alt="Logo" />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  )
}

export default TrendingCard