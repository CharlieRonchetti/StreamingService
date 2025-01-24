import React from 'react'

const SearchResultsPage = ({ searchResults, handleAnimeClick, debounceSearchValue, setCurrentSearchPage, currentSearchPage }) => {
  const handlePrevPageClick = () => {
    setCurrentSearchPage(currentSearchPage - 1)
    window.scrollTo(0,0);
  }

  const handleNextPageClick = () => {
    setCurrentSearchPage(currentSearchPage + 1)
    window.scrollTo(0,0);
  }

  const renderPageSelectButtons = () => {
    const buttons = []
    if(currentSearchPage !== 1) {
        buttons.push(<button key={1} className="text-slate-50 bg-zinc-700 rounded-lg px-2 mb-4 text-xl" onClick={() => handlePrevPageClick()}>Prev</button>)
    }
    if(searchResults && searchResults.data.Page.pageInfo.hasNextPage === true) {
        buttons.push(<button key={2} className="text-slate-50 bg-zinc-700 rounded-lg px-2 mb-4 text-xl" onClick={() => handleNextPageClick()}>Next</button>)
    }
    return buttons
  }

  return (
    <main className="max-w-9/10 mx-auto pt-[1.5rem] min-[2100px]:max-w-[80%] min-[2200px]:max-w-[70%] min-[2300px]:max-w-[60%] min-[3000px]:max-w-[45%]">
        <div className="xl:h-20 w-full">
            <h2 className="text-2xl text-slate-50 font-medium mt-[0.5rem] mb-4">Showing results for: <span className="italic">{debounceSearchValue}</span></h2>
            <div className="gap-x-4 overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6">
            {searchResults && searchResults.data.Page.media ? (
                searchResults.data.Page.media.map((anime, index) => (
                    <div key={index} className='min-w-fit'>
                        <div className="">
                            <img className="h-[22rem] max-w-0 min-w-full rounded-lg overflow-hidden object-cover cursor-pointer" src={anime.coverImage.large} alt="Logo" onClick={() => handleAnimeClick(anime.id)}/>
                        </div>
                        <p className="text-gray-300 hover:text-violet-400 font-medium text-lg mb-6 line-clamp-2 pr-2 cursor-pointer" onClick={() => handleAnimeClick(anime.id)}>{anime.title.english ? anime.title.english : anime.title.romaji}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
            </div>
            <div className="flex justify-center gap-4">
                {renderPageSelectButtons()}
            </div>
        </div>
    </main>
  )
}

export default SearchResultsPage