import React from "react";
import Image from 'next/image';

const AssetUngu = () => {
    return (
        <div className="absolute xl:top-[-12%] xl:right-[-40%] xl:flex lg:top-[-32%] lg:right-[-60%] lg:flex md:top-[-12%] md:right-[-93%] md:flex sm:hidden">
            <Image src="/images/ungu.svg" alt="Asset-Ungu" width={964} height={964}/>
        </div>
    );
};

export default AssetUngu;