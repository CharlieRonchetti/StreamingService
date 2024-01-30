import './App.css';
import logo from './img/aniwave.png'
import Carousel from './Carousel';
import RankingCard from './RankingCard';
import TrendingCard from './TrendingCard';
import darkgathering from './img/darkgathering.jpg'
import hikari from './img/hikarinoou.jpg'
import highcard from './img/highcard.jpg'
import tsukimichi from './img/tsukimichi.jpg'
import clannad from './img/clannad.jpg'
import sololeveling from './img/sololeveling.jpg'
import apothocary from './img/apothecarydiaries.jpg'
import banished from './img/banished.jpg'
import frieren from './img/frierin.jpg'
import chained from './img/chainedsoldier.jpg'
import onepiece from './img/onepiece.jpg'
import mashle from './img/mashle.jpg'
import shangri from './img/shangri.jpg'
import healingmagic from './img/healingmagic.jpg'
import timeloop from './img/seventhtimeloop.jpg'
import ragna from './img/ragna.jpg'
import RankingCardMobile from './RankingCardMobile';

function App() {
  return (
    <>
      <header className="bg-zinc-700 top-0 z-[16] sticky text-white">
        <section className="max-w-9/10 py-4 mx-auto flex items-center justify-between">
          <div className="flex gap-10 w-3/4">
            <img src={logo} alt="Logo" className="h-10" />
            <input type="text" placeholder="Search anime.." className="w-7/12 xl:w-5/12 px-4 bg-zinc-800 rounded-md focus:outline focus:outline-1 focus:outline-zinc-500 hidden sm:block"></input>
          </div>
          <div>
            <button type="button" className="bg-violet-600 px-4 py-1 rounded-md text-l">Sign In</button>
          </div>
        </section>
      </header>
      <Carousel></Carousel>
      <main className="flex flex-col max-w-9/10 mx-auto xl:flex-row xl:gap-4">
        <div className='w-full xl:hidden'>
          <h2 className="text-2xl text-slate-50 font-medium mb-4">Top Anime</h2>
          <div className="flex overflow-scroll gap-4">
            <RankingCardMobile img={onepiece} rank="1" title="ONE PIECE"></RankingCardMobile>
            <RankingCardMobile img={sololeveling} rank="2" title="Solo Leveling"></RankingCardMobile>
            <RankingCardMobile img={mashle} rank="3" title="MASHLE: MAGIC AND MUSCLES Season 2"></RankingCardMobile>
            <RankingCardMobile img={shangri} rank="4" title="Shangri-La Frontier"></RankingCardMobile>
            <RankingCardMobile img={apothocary} rank="5" title="The Apothecary Diaries"></RankingCardMobile>
            <RankingCardMobile img={healingmagic} rank="6" title="The Wrong Way to Use Healing Magic"></RankingCardMobile>
            <RankingCardMobile img={timeloop} rank="7" title="7th Time Loop: The Villainess Enjoys a Carefree Life Married to Her Worst Enemy!"></RankingCardMobile>
            <RankingCardMobile img={banished} rank="8" title="Banished from the Hero's Party, I Decided to Live a Quiet Life in the Countryside Season 2"></RankingCardMobile>
            <RankingCardMobile img={ragna} rank="9" title="Ragna Crimson"></RankingCardMobile>
          </div>
        </div>
        <div className="xl:h-20 w-full">
          <h2 className="text-2xl text-slate-50 font-medium mb-4">Trending</h2>
          <div className="flex overflow-scroll gap-4 xl:overflow-hidden xl:grid xl:grid-cols-5">
            <TrendingCard img={clannad} title="Clannad"></TrendingCard>
            <TrendingCard img={darkgathering} title="Dark Gathering"></TrendingCard>
            <TrendingCard img={hikari} title="Hikari no Ou 2nd Season"></TrendingCard>
            <TrendingCard img={highcard} title="HIGH CARD Season 2"></TrendingCard>
            <TrendingCard img={sololeveling} title="Solo Leveling"></TrendingCard>
            <TrendingCard img={tsukimichi} title="TSUKIMICHI - Moonlit Fantasy Season 2"></TrendingCard>
            <TrendingCard img={apothocary} title="The Apothecary Diaries"></TrendingCard>
            <TrendingCard img={banished} title="Banished from the Hero's Party, I Decided to Live a Quite Life in the Countryside Season 2"></TrendingCard>
            <TrendingCard img={frieren} title="Frieren: Beyond Journey's End"></TrendingCard>
            <TrendingCard img={chained} title="Chained Soldier"></TrendingCard>
          </div>
        </div>
        <div className="hidden xl:w-full xl:basis-2/6 xl:block">
          <h2 className="text-2xl text-slate-50 font-medium mb-4">Top Anime</h2>
          <RankingCard img={onepiece} rank="1" title="ONE PIECE"></RankingCard>
          <RankingCard img={sololeveling} rank="2" title="Solo Leveling"></RankingCard>
          <RankingCard img={mashle} rank="3" title="MASHLE: MAGIC AND MUSCLES Season 2"></RankingCard>
          <RankingCard img={shangri} rank="4" title="Shangri-La Frontier"></RankingCard>
          <RankingCard img={apothocary} rank="5" title="The Apothecary Diaries"></RankingCard>
          <RankingCard img={healingmagic} rank="6" title="The Wrong Way to Use Healing Magic"></RankingCard>
          <RankingCard img={timeloop} rank="7" title="7th Time Loop: The Villainess Enjoys a Carefree Life Married to Her Worst Enemy!"></RankingCard>
          <RankingCard img={banished} rank="8" title="Banished from the Hero's Party, I Decided to Live a Quiet Life in the Countryside Season 2"></RankingCard>
          <RankingCard img={ragna} rank="9" title="Ragna Crimson"></RankingCard>
        </div>
      </main>
    </>
  );
}

export default App;
