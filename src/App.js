import './App.css';
import logo from './img/aniwave.png'
import Carousel from './Carousel';

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
    </>
  );
}

export default App;
