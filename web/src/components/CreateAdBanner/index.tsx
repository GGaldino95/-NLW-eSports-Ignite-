import * as Dialog from '@radix-ui/react-dialog';
import { MagnifyingGlassPlus } from 'phosphor-react';

export const CreateAdBanner = () => {
  return (
    <section className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
      <section className="bg-[#2A2634] py-6 px-8 flex justify-between items-center">
        <summary>
          <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
          <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
        </summary>

        <Dialog.Trigger type="button" className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </section>
    </section>
  );
};
