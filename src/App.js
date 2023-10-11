import './App.css';
import logo from './img/aniwave.png'
import Carousel from './Carousel';
import RankingCard from './RankingCard';
import jujutsu from './img/jujutsu-small.png'

function App() {
  return (
    <>
      <header class="bg-zinc-700 top-0 z-10 sticky text-white">
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
      <main className="flex max-w-9/10 gap-4 mx-auto">
        <div className="h-20 w-full bg-green-600"></div>
        <div className="w-full basis-2/6 ">
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
