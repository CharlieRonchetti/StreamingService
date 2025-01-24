import './App.css';
import logo from './img/cover_crop.png'
import Carousel from './Carousel';
import RankingCard from './RankingCard';
import TrendingCard from './TrendingCard';
import RankingCardMobile from './RankingCardMobile';
import AnimePage from './AnimePage';
import SearchResultsPage from './SearchResultsPage';

import React, { useState, useEffect, useRef } from 'react';
import sleep from 'sleep-promise';

function App() {
  // State
  const [rankingData, setRankingData] = useState(null);
  const [trendingData, setTrendingData] = useState(null);
  const [airingPopData, setAiringPopData] = useState(null);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [animeData, setAnimeData] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [debounceSearchValue, setDebounceSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [currentSearchPage, setCurrentSearchPage] = useState(1);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const hasFetchedData = useRef(false);
  const [genreCollection] = useState([
    "ACTION",
    "ADVENTURE",
    "COMEDY",
    "DRAMA",
    "ECCHI",
    "FANTASY",
    "HORROR",
    "MAHOU SHOUJO",
    "MECHA",
    "MUSIC",
    "MYSTERY",
    "PSYCHOLOGICAL",
    "ROMANCE",
    "SCI-FI",
    "SLICE OF LIFE",
    "SPORTS",
    "SUPERNATURAL",
    "THRILLER"
  ])

  // API stuff

  // useEffect to handle fetching home page data
  useEffect(() => {
    if (hasFetchedData.current) {
      console.log("Aborting duplicate api calls");
      return;
    }
    hasFetchedData.current = true;

    const airingPopQuery = `
      query {
        Page(page: 1, perPage: 7) {
          media(sort: POPULARITY_DESC, type: ANIME, status: RELEASING) {
            id
            title {
              romaji
              english
            }
            bannerImage
            description
          }
        }
      }
    `;

    const rankingQuery = `
      query {
        Page(page: 1, perPage: 9) {
          media(sort: SCORE_DESC, type: ANIME) {
            id
            title {
              romaji
              english
            }
            coverImage {
              large
            }
          }
        }
      }
    `;

    const trendingQuery = `
      query {
        Page(page: 1, perPage: 10) {
          media(sort: TRENDING_DESC, type: ANIME) {
            id
            title {
              romaji
              english
            }
            coverImage {
              large
            }
          }
        }
      }
    `;

    const aniListURL = 'https://graphql.anilist.co'
    const airingPopOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              query: airingPopQuery
            })
          };

    fetch(aniListURL, airingPopOptions)
      .then(res => res.json())
      .then(json => setAiringPopData(json))
      .then(sleep(400))
      .catch(error => console.error(error));
    
    console.log("Attempted to call API at endpoint: https://graphql.anilist.co")

    const rankingOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: rankingQuery
      })
    };

    fetch(aniListURL, rankingOptions)
      .then(res => res.json())
      .then(json => setRankingData(json))
      .then(sleep(400))
      .catch(error => console.error(error));

    console.log("Attempted to call API at endpoint: https://graphql.anilist.co")

    const trendingOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: trendingQuery
      })
    };

    fetch(aniListURL, trendingOptions)
      .then(res => res.json())
      .then(json => setTrendingData(json))
      .then(sleep(400))
      .catch(error => console.error(error));

    console.log("Attempted to call API at endpoint: https://graphql.anilist.co")
    
  }, []);

  // useEffect to handle fetching specific anime page data
  useEffect(() => {
    if(!selectedAnime) {
      return
    }

    const idQuery = `
      query ($id: Int, $sort: [CharacterSort] = FAVOURITES_DESC) { 
        Media (id: $id, type: ANIME, isAdult: false) { 
          id
          title {
            romaji
            english
            native
          }
          coverImage {
            large
          }
          description
          duration
          episodes
          favourites
          averageScore
          genres
          trailer {
            id
            site
            thumbnail
          }
          recommendations(page: 1, perPage: 12) {
            edges {
              node {
                mediaRecommendation {
                  id
                  title {
                    english
                    romaji
                  }
                  coverImage {
                    large
                  }
                }
              }
            }
          }
          streamingEpisodes {
            title
            url
            thumbnail
          }
          characters(page: 1, perPage: 4, sort: $sort) {
            edges {
              node {
                name {
                  first
                  full
                }
                image {
                  large
                }
                favourites
              }
              role
                voiceActors {
                  name {
                    full
                  }
                  image {
                    large
                  }
                }
            }
          }
        }
      }
      `;

    const idVariables = {
      id: Number(selectedAnime),
      sort: "FAVOURITES_DESC"
    };

    const aniListURL = 'https://graphql.anilist.co'
    const idOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: idQuery,
        variables: idVariables
      })
    };

    fetch(aniListURL, idOptions)
      .then(res => res.json())
      .then(json => setAnimeData(json))
      .then(sleep(400))
      .catch(error => console.error(error));

    console.log("Attempted to call API at endpoint: https://graphql.anilist.co")

  }, [selectedAnime]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if(searchValue !== "") {
        const searchQuery = `
          query ($search: String, $page: Int, $genre: String) {
            Page(page: $page, perPage: 30) {
              media(sort: SCORE_DESC, type: ANIME, search: $search, genre: $genre, isAdult: false) {
                id
                title {
                  romaji
                  english
                }
                coverImage {
                  large
                }
              }
              pageInfo {
                hasNextPage
                lastPage
              }
            }
          }
        `;

        const searchVariables = {}

        if(genreCollection.includes(searchValue.toUpperCase())) {
          searchVariables.genre = searchValue
          searchVariables.page = currentSearchPage
        } else {
          searchVariables.search = searchValue
          searchVariables.page = currentSearchPage
        }

        const aniListURL = 'https://graphql.anilist.co'
        const searchOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            query: searchQuery,
            variables: searchVariables
          })
        };

        fetch(aniListURL, searchOptions)
          .then(res => res.json())
          .then(json => setSearchResults(json))
          .then(sleep(400))
          .catch(error => console.error(error));

        setDebounceSearchValue(searchValue)
        console.log("Attempted to call API at endpoint: https://graphql.anilist.co")
      }
    }, 500);
    return () => clearTimeout(debounce)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, currentSearchPage])

  // Event Handlers
  const handleAnimeClick = (anilistID) => {
    setSelectedAnime(anilistID);
    window.scrollTo(0,0);
    setIsDropdownVisible(false);
    setIsSearching(false);
  }

  const handleHomeClick = () => {
    setSelectedAnime(null);
    setIsSearching(false);
  } 

  const handleSearchEnter = (event) => {
    if(event.key === "Enter") {
      setSelectedAnime(null);
      setIsSearching(true);
      setIsDropdownVisible(false);
      setSearchResults(null);
      setCurrentSearchPage(1);
    }
  }

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    if (searchValue) {
      setIsDropdownVisible(true)
    }
    else if(searchValue === "") {
      setIsDropdownVisible(false)
    }
  }

  const handleSearchFocusLoss = () => {
    setIsDropdownVisible(false)
  }

  const handleSearchFocus = () => {
    if(searchValue !== "") {
      setIsDropdownVisible(true)
    }
  }

  const renderConditionalContent = () => {
    switch(true) {
      case !selectedAnime && !isSearching:
        return (
          <>
            {airingPopData && airingPopData.data.Page.media ? (
              <Carousel 
                apiData={airingPopData.data.Page.media}
                handleAnimeClick={handleAnimeClick}  
              />
            ) : (
              <p>Loading...</p>
            )}
            <main className="flex flex-col max-w-9/10 mx-auto xl:flex-row xl:gap-4 min-[2100px]:max-w-[80%] min-[2200px]:max-w-[70%] min-[2300px]:max-w-[60%] min-[3000px]:max-w-[45%]">
              <div className='w-full xl:hidden'>
                <h2 className="text-2xl text-slate-50 font-medium mb-4">Top Anime</h2>
                <div className="flex overflow-scroll gap-4">
                  {rankingData && rankingData.data.Page.media ? (
                    rankingData.data.Page.media.map((anime, index) => (
                      <RankingCardMobile 
                        key={index} 
                        img={anime.coverImage.large} 
                        id={anime.id} 
                        title={anime.title.english ? anime.title.english : anime.title.romaji}
                        handleAnimeClick={handleAnimeClick}
                      />
                    ))
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </div>
              <div className="xl:h-20 w-full">
                <h2 className="text-2xl text-slate-50 font-medium mb-4">Trending</h2>
                <div className="flex overflow-scroll gap-4 xl:overflow-hidden xl:grid xl:grid-cols-5">
                  {trendingData && trendingData.data.Page.media ? (
                    trendingData.data.Page.media.map((anime, index) => (
                      <TrendingCard 
                        key={index} 
                        img={anime.coverImage.large} 
                        title={anime.title.english ? anime.title.english : anime.title.romaji}
                        id={anime.id}
                        handleAnimeClick={handleAnimeClick}
                      />
                    ))
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </div>
              <div className="hidden xl:w-full xl:basis-2/6 xl:block">
                <h2 className="text-2xl text-slate-50 font-medium mb-4">Top Anime</h2>
                {rankingData && rankingData.data.Page.media ? (
                    rankingData.data.Page.media.map((anime, index) => (
                      <RankingCard 
                        key={index} 
                        img={anime.coverImage.large} 
                        rank={index + 1} 
                        title={anime.title.english ? anime.title.english : anime.title.romaji}
                        id={anime.id}
                        handleAnimeClick={handleAnimeClick}
                      />
                    ))
                  ) : (
                    <p>Loading...</p>
                  )}
              </div>
            </main>
          </>
        )
      case selectedAnime && !isSearching:
        return (
          <>
            {animeData && animeData.data.Media ? (
              <AnimePage 
                animeData={animeData} 
                handleAnimeClick={handleAnimeClick}
                setIsSearching={setIsSearching}
                setSelectedAnime={setSelectedAnime}
                setSearchValue={setSearchValue}
                setSearchResults={setSearchResults}
                setCurrentSearchPage={setCurrentSearchPage}
                searchValue={searchValue}
              />
            ) : (
              <p>Loading...</p>
            )}
          </>
        )
      case isSearching:
        return (
          <SearchResultsPage 
            searchResults={searchResults} 
            handleAnimeClick={handleAnimeClick} 
            debounceSearchValue={debounceSearchValue} 
            setCurrentSearchPage={setCurrentSearchPage}
            currentSearchPage={currentSearchPage}  
          />
        )
      default:
        return <p>Oops something went wrong...</p>
    }
  }

  return (
    <>
      <header className="bg-zinc-700 top-0 z-[16] sticky text-white">
        <section className="max-w-9/10 py-4 mx-auto flex items-center justify-between min-[2100px]:max-w-[80%] min-[2200px]:max-w-[70%] min-[2300px]:max-w-[60%] min-[3000px]:max-w-[45%]">
          <div className="flex gap-10 w-3/4">
            <img src={logo} alt="Logo" className="h-10 cursor-pointer" onClick={() => handleHomeClick()}/>
            <div className="w-7/12 2xl:w-5/12 relative">
              <input id="search-bar" value={searchValue} type="text" placeholder="Search anime.." spellCheck="false" autoComplete="one-time-code" onInput={handleInputChange} onBlur={handleSearchFocusLoss} onFocus={handleSearchFocus} onKeyDown={handleSearchEnter} className="px-4 bg-zinc-800 h-full w-full focus:outline focus:outline-0 focus:outline-zinc-500 hidden sm:block"></input>
              <div
                className={`absolute w-full lg:w-[90%] xl:w-[80%] shadow-lg overflow-hidden ${
                  isDropdownVisible ? 'block h-auto' : 'hidden h-0'
                }`}
              >
                {searchResults && searchResults.data.Page.media ? (
                  searchResults.data.Page.media.map((anime, index) => (
                    index < 5 ? (
                      <div key={anime.id} className="p-2 border-b border-dashed border-zinc-700 bg-zinc-900 hover:bg-zinc-800">
                        <div className="flex items-start">
                          <img src={anime.coverImage.large} onMouseDown={() => handleAnimeClick(anime.id)} alt="img" className="h-16 mr-2 hover:cursor-pointer" />
                          <div>
                            <h3 onMouseDown={() => handleAnimeClick(anime.id)} className="font-semibold line-clamp-1 hover:line-clamp-none hover:cursor-pointer">{anime.title.english}</h3>
                            <p onMouseDown={() => handleAnimeClick(anime.id)} className="text-sm text-gray-500 line-clamp-1 hover:line-clamp-none hover:cursor-pointer">{anime.title.romaji}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )
                  ))
              ) : (
                <></>
              )}
              </div>
            </div>
          </div>
          <div>
            <button type="button" className="bg-violet-600 px-4 py-1 rounded-md text-l">Sign In</button>
          </div>
        </section>
      </header>
      {renderConditionalContent()};
    </>
  );
}

export default App;
