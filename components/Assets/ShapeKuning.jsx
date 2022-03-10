import React from 'react';
import Image from 'next/image';

function ShapeKuning() {
  return (
    <div className="absolute xl:left-[55%] xl:top-[20%] xl:flex lg:left-[53%] lg:top-[17%] lg:flex md:hidden sm:hidden">
      <Image src="/images/kuning.svg" alt="Shape-Kuning" width={120} height={120} />
    </div>
  );
}

export default ShapeKuning;
