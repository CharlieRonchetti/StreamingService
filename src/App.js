import './App.css';
import logo from './img/aniwave.png'
import Carousel from './Carousel';
import RankingCard from './RankingCard';
import TrendingCard from './TrendingCard';
import jujutsu from './img/jujutsu-small.png'
import goodnightworld from './img/goodnightworld.png'
import RankingCardMobile from './RankingCardMobile';

function App() {
  return (
    <>
      <header class="bg-zinc-700 top-0 z-[16] sticky text-white">
        <section class="max-w-9/10 py-4 mx-auto flex items-center justify-between">
          <div class="flex gap-10 w-3/4">
            <img src={logo} alt="Logo" class="h-10" />
            <input type="text" placeholder="Search anime.." class="w-7/12 xl:w-5/12 px-4 bg-zinc-800 rounded-md focus:outline focus:outline-1 focus:outline-zinc-500 hidden sm:block"></input>
          </div>
          <div>
            <button type="button" class="bg-violet-600 px-4 py-1 rounded-md text-l">Sign In</button>
          </div>
        </section>
      </header>
      <Carousel></Carousel>
      <main className="flex flex-col max-w-9/10 mx-auto xl:flex-row xl:gap-4">
        <div className='w-full xl:hidden'>
          <h2 className="text-2xl text-slate-50 font-medium mb-4">Top Anime</h2>
          <div className="flex overflow-scroll gap-4">
            <RankingCardMobile img={goodnightworld} rank="1" title="JUJUTSU KAISEN Season 2"></RankingCardMobile>
            <RankingCardMobile img={goodnightworld} rank="2" title=""></RankingCardMobile>
            <RankingCardMobile img={goodnightworld} rank="3" title=""></RankingCardMobile>
            <RankingCardMobile img={goodnightworld} rank="4" title=""></RankingCardMobile>
            <RankingCardMobile img={goodnightworld} rank="5" title=""></RankingCardMobile>
            <RankingCardMobile img={goodnightworld} rank="6" title=""></RankingCardMobile>
            <RankingCardMobile img={goodnightworld} rank="7" title=""></RankingCardMobile>
            <RankingCardMobile img={goodnightworld} rank="8" title=""></RankingCardMobile>
            <RankingCardMobile img={goodnightworld} rank="9" title=""></RankingCardMobile>
          </div>
        </div>
        <div className="xl:h-20 w-full">
          <h2 className="text-2xl text-slate-50 font-medium mb-4">Trending</h2>
          <div className="flex overflow-scroll gap-4 xl:overflow-hidden xl:grid xl:grid-cols-5">
            <TrendingCard img={goodnightworld}></TrendingCard>
            <TrendingCard img={goodnightworld}></TrendingCard>
            <TrendingCard img={goodnightworld}></TrendingCard>
            <TrendingCard img={goodnightworld}></TrendingCard>
            <TrendingCard img={goodnightworld}></TrendingCard>
            <TrendingCard img={goodnightworld}></TrendingCard>
            <TrendingCard img={goodnightworld}></TrendingCard>
            <TrendingCard img={goodnightworld}></TrendingCard>
            <TrendingCard img={goodnightworld}></TrendingCard>
            <TrendingCard img={goodnightworld}></TrendingCard>
          </div>
        </div>
        <div className="hidden xl:w-full xl:basis-2/6 xl:block">
          <h2 className="text-2xl text-slate-50 font-medium mb-4">Top Anime</h2>
          <RankingCard img={jujutsu} rank="1" title="JUJUTSU KAISEN Season 2"></RankingCard>
          <RankingCard img={jujutsu} rank="2" title=""></RankingCard>
          <RankingCard img={jujutsu} rank="3" title=""></RankingCard>
          <RankingCard img={jujutsu} rank="4" title=""></RankingCard>
          <RankingCard img={jujutsu} rank="5" title=""></RankingCard>
          <RankingCard img={jujutsu} rank="6" title=""></RankingCard>
          <RankingCard img={jujutsu} rank="7" title=""></RankingCard>
          <RankingCard img={jujutsu} rank="8" title=""></RankingCard>
          <RankingCard img={jujutsu} rank="9" title=""></RankingCard>
        </div>
      </main>
    </>
  );
}

export default App;
