import React, { useState } from 'react';
import EpisodeList from './EpisodeList';
import DetailList from './DetailList';
import CharacterList from './CharacterList';

const AnimePage = ({ animeData, handleAnimeClick, setSelectedAnime, setIsSearching, setSearchValue, setSearchResults, setCurrentSearchPage, searchValue }) => {
    const [episodeNum, setEpisodeNum] = useState(1);

  return (
    <main className="max-w-9/10 mx-auto pt-[1.5rem] min-[2100px]:max-w-[80%] min-[2200px]:max-w-[70%] min-[2300px]:max-w-[60%] min-[3000px]:max-w-[45%]">
        <div className="2xl:grid 2xl:grid-cols-12 xl:grid xl:grid-cols-4">
            <div className="justify-items-center 2xl:max-h-[40rem] 2xl:col-span-7 2xl:grow xl:col-span-3 xl:flex xl:flex-col xl:max-h-[36rem]">
                {animeData && animeData.data.Media.trailer ? (
                    <div className="aspect-video w-full">
                        <iframe className="w-full h-full"
                            src={`https://www.youtube.com/embed/${animeData.data.Media.trailer.id}`}
                            allowFullScreen
                            title="Youtube-Embed"
                        />
                    </div>
                ) : (
                    <p className="aspect-video w-full text-slate-50 flex justify-center items-center text-center text-4xl">Trailer not found</p>
                )}
                
                <div className="w-full text-slate-50 flex items-center h-full justify-items-start text-center bg-zinc-900 p-2 pl-5 xl:rounded-br-xl">
                    <p>You are watching <br /> Episode {episodeNum}</p>
                </div>
            </div>
            <div className="text-slate-50 bg-zinc-800 justify-items-center 2xl:max-h-[40rem] 2xl:col-span-2 xl:max-h-[36rem] xl:order-first xl:col-span-1 xl:rounded-l-xl">
                
                {animeData && animeData.data.Media.streamingEpisodes ? (
                    <EpisodeList 
                        episodeData={animeData.data.Media.streamingEpisodes}
                        setEpisodeNum={setEpisodeNum}
                    />
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <div className="text-slate-50 bg-#0E0E0E 2xl:max-h-[40rem] 2xl:rounded-r-xl 2xl:col-span-3 xl:max-h-[36rem] xl:col-span-4 xl:rounded-br-xl">
                {animeData && animeData.data.Media ? (
                    <DetailList 
                        animeData={animeData.data.Media}
                        setIsSearching={setIsSearching}
                        setSearchValue={setSearchValue}
                        setSelectedAnime={setSelectedAnime}
                        setSearchResults={setSearchResults}
                        setCurrentSearchPage={setCurrentSearchPage}
                        searchValue={searchValue}
                    />
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
        <div className="text-slate-50">
            <p className="text-2xl mt-[0.5rem] flex justify-center md:justify-start">Characters</p>
            {animeData && animeData.data.Media.characters.edges ? (
                <CharacterList
                characterData={animeData.data.Media.characters.edges}
            />
            ) : (
                <p>Loading...</p>
            )}
            
        </div>

        <div className="xl:h-20 w-full">
            <h2 className="text-2xl text-slate-50 font-medium mt-[0.5rem] mb-4">You might also enjoy...</h2>
            <div className="flex overflow-scroll gap-x-4 2xl:overflow-hidden 2xl:grid 2xl:grid-cols-6">
            {animeData && animeData.data.Media.recommendations.edges ? (
                animeData.data.Media.recommendations.edges.map((recommendation, index) => (
                    <div key={index} className='2xl:min-w-fit'>
                        <img className="h-[22rem] max-w-fit 2xl:max-w-0 2xl:min-w-full rounded-lg overflow-hidden object-cover cursor-pointer" src={recommendation.node.mediaRecommendation.coverImage.large} alt="Logo" onClick={() => handleAnimeClick(recommendation.node.mediaRecommendation.id)}/>
                        <p className="text-gray-300 hover:text-violet-400 font-medium text-lg mb-6 line-clamp-2 pr-2 cursor-pointer" onClick={() => handleAnimeClick(recommendation.node.mediaRecommendation.id)}>{recommendation.node.mediaRecommendation.title.english ? recommendation.node.mediaRecommendation.title.english : recommendation.node.mediaRecommendation.title.romaji}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
            </div>
        </div>
    </main>
  )
} 

export default AnimePage