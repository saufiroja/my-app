import React from 'react';
import Image from 'next/image';

function AssetGame() {
  return (
    <div className="absolute xl:left-[82%] xl:top-[78%] xl:flex lg:left-[82%] lg:top-[70%] lg:flex md:left-[82%] md:top-[67%] md:flex sm:hidden">
      <Image src="/images/batu.svg" alt="impostor-logo" width={79} height={31} />
    </div>
  );
}

export default AssetGame;
