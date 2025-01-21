import React from 'react'

const RankingCard = ({ img, rank, title, id, handleAnimeClick }) => {
  return (
    <div className="flex items-center bg-zinc-800 rounded-md gap-4 mb-2 relative">
        <h1 className={`pl-3 -mt-[4px] text-6xl text-border ${rank.toString() === "1" ? "text-yellow-600" : rank.toString() === "2" ? "text-stone-400" : rank.toString() === "3" ? "text-amber-800" : "text-slate-50"}`}>{rank}</h1>
        <img className="h-[4.5rem] cursor-pointer" src={img} alt="Logo" onClick={() => handleAnimeClick(id)}/>
        <p className="text-gray-400 text-xl line-clamp-2 cursor-pointer" onClick={() => handleAnimeClick(id)}>{title}</p>
        <div className={`absolute right-0 h-full w-1 rounded-r-xl ${rank.toString() === "1" ? "bg-yellow-600" : rank.toString() === "2" ? "bg-stone-400" : rank.toString() === "3" ? "bg-amber-800" : "hidden"}`}></div>
    </div>
  )
}

export default RankingCard