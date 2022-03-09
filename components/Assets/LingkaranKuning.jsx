import React from "react";
import Image from 'next/image';

const LingkaranKuning = () => {
  return (
    <div className="absolute xl:left-[50%] xl:top-[20%] xl:flex lg:left-[53%] lg:top-[17%] lg:flex md:hidden sm:hidden">
        <Image src="/images/kuning.svg" alt="Lingkaran-Kuning" width={120} height={120}/>
    </div>
  );
};

export default LingkaranKuning;
