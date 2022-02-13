import React from "react";
import Image from 'next/image';

const AssetKuning = () => {
  return (
    <div className="absolute xl:ml-[-215px] xl:mt-[-185px] xl:flex lg:ml-[-215px] lg:mt-[-185px] lg:flex md:ml-[-215px] md:mt-[-185px] md:flex sm:ml-[-215px] sm:mt-[-185px]">
      <Image src="/images/kuning.svg" alt="impostor-logo" width={280} height={280}/>
    </div>
  );
};

export default AssetKuning;