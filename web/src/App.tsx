import { useEffect, useState } from 'react';
import axios from 'axios';
import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdBanner, CreateAdModal, GameBanner } from './components';

import logoImg from './assets/logo-nlw-esports.svg';
import './styles/main.css';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: { ads: number };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then((response) => setGames(response.data));
  }, []);

  return (
    <main className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="nlw-logo" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.
      </h1>

      <section className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => (
          <GameBanner key={game.id} title={game.title} adsCount={game._count.ads} bannerUrl={game.bannerUrl} />
        ))}
      </section>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </main>
  )
}

export default App
