import { useEffect, useState } from 'react';
import { GameController } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdBanner, GameBanner, Input } from './components';

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
    fetch('http://localhost:3333/games')
      .then((response) => response.json())
      .then((data) => setGames(data));
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

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60" />

          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25">
            <Dialog.Title className="text-3xl font-black">Publique um anúncio</Dialog.Title>

            <form className="mt-8 flex flex-col gap-4">
              <section className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">Qual o game?</label>
                <Input
                  id="game"
                  type="text"
                  placeholder="Selecione o game que deseja jogar"
                />
              </section>

              <section className="flex flex-col gap-2">
                <label htmlFor="name">Seu nome (ou nickname)</label>
                <Input id="name" type="text" placeholder="Como te chamam dentro do game?" />
              </section>

              <section className="grid grid-cols-2 gap-6">
                <section className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                  <Input id="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO" />
                </section>

                <section className="flex flex-col gap-2">
                  <label htmlFor="discord">Qual seu Discord?</label>
                  <Input id="discord" type="text" placeholder="Usuário#0000" />
                </section>
              </section>

              <section className="flex gap-6">
                <section className="flex flex-col gap-2">
                  <label htmlFor="weekDays">Quando costuma jogar?</label>

                  <section className="grid grid-cols-4 gap-2">
                    <button className="w-8 h-8 rounded bg-zinc-900" type="button" title="Domingo">D</button>
                    <button className="w-8 h-8 rounded bg-zinc-900" type="button" title="Segunda">S</button>
                    <button className="w-8 h-8 rounded bg-zinc-900" type="button" title="Terça">T</button>
                    <button className="w-8 h-8 rounded bg-zinc-900" type="button" title="Quarta">Q</button>
                    <button className="w-8 h-8 rounded bg-zinc-900" type="button" title="Quinta">Q</button>
                    <button className="w-8 h-8 rounded bg-zinc-900" type="button" title="Sexta">S</button>
                    <button className="w-8 h-8 rounded bg-zinc-900" type="button" title="Sábado">S</button>
                  </section>
                </section>

                <section className="flex flex-col gap-2 flex-1">
                  <label htmlFor="hourStart">Qual horário do dia?</label>
                  <section className="grid grid-cols-2 gap-2">
                    <Input id="hourStart" type="time" placeholder="De" />
                    <Input id="hourEnd" type="time" placeholder="Até" />
                  </section>
                </section>
              </section>

              <section className="mt-2 flex gap-2 text-sm">
                <Input type="checkbox" />
                Costumo me conectar ao chat de voz
              </section>

              <footer className="mt-4 flex justify-end gap-4">
                <Dialog.Close
                  type="button"
                  className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
                >
                  Cancelar
                </Dialog.Close>

                <button
                  type="submit"
                  className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                >
                  <GameController size={24} />
                  Enconstrar Duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </main>
  )
}

export default App
