interface IGameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export const GameBanner = ({ adsCount, bannerUrl, title }: IGameBannerProps) => {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={bannerUrl} alt="" />

      <summary className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 right-0 bottom-0">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block">{adsCount} anuncio(s)</span>
      </summary>
    </a>
  );
};
