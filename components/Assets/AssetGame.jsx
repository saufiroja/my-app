import React from "react";
import Image from 'next/image';

const AssetGame = () => {
    return (
        <div className="absolute xl:left-[70%] xl:top-[34%] xl:flex lg:left-[70%] lg:top-[34%] lg:flex md:left-[70%] md:top-[40%] md:flex sm:hidden">
            <Image src="/images/game.svg" alt="impostor-logo" width={458} height={308}/>
        </div>
    );
};

export default AssetGame;