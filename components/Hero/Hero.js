/* eslint-disable react/no-unescaped-entities */
import Button from '../Navbar/Button/Button';
import Navbar from '../Navbar/Navbar';
import AssetKuning from '/components/Assets/AssetKuning';
import AssetGame from '/components/Assets/AssetGame';
import AssetBatu from '/components/Assets/AssetBatu';
import AssetPink from '/components/Assets/AssetPink';
import ShapeKuning from '/components/Assets/ShapeKuning';

export default function Hero() {
  return (
    <div className="overflow-hidden">
      <AssetKuning />
      <ShapeKuning />
      <AssetPink />
      <AssetGame />
      <AssetBatu />
      <Navbar />
      <div className="xl:w-8/12 lg:w-8/12 md:w-[70%] sm:w-[99%] xl:pt-[5%] lg:pt-[4%] md:pt-[10%] sm:pt-[12%] xl:ml-[0] lg:ml-[0] md:ml-[0] sm:ml-[15%]">
        <h1 className="text-white xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl font-bold font-body pr-32">
          let's show your talent for game
        </h1>
        <div className="xl:ml-[0] lg:ml-[0] md:ml-[0] sm:ml-[20%]">
          <Button className="xl:mt-[5%] lg:mt-[5%] md:mt-[5%] sm:mt-[4%] text-white" variant="yellow">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
