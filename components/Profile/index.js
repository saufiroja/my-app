import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";
import AssetKuning from '/components/Assets/AssetKuning';
import AssetUngu from '/components/Assets/AssetUngu';
import AssetGame from '/components/Assets/AssetGame';
import AssetBatu from '/components/Assets/AssetBatu';

export default function Profile() {
    return (
        <div className='bg-white no-repeat bg-cover h-screen w-screen font-body relative overflow-hidden'>
            <AssetKuning />
            <AssetUngu />
            <AssetGame />
            <AssetBatu />
            <div className="container px-[6%]">
                <img class="mt-[3%]" src="/images/feature.svg" alt="" width="200" height="40"></img>
                <div className="flex flex-row">
                    <div className="basis-1/3 h-screen">
                        <button className="bg-sky-600 hover:bg-sky-700 rounded-large px-9 py-[15px] flex flex-nowrap justify-center mt-12">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <h3 className="mx-3 text-slate-50">My Profile</h3>
                        </button>

                        <figure className="bg-slate-100 rounded-xl p-8 mt-6 font-body relative">
                            {/* <Image src="/images/kelinci.jpeg" alt="profile-picture" width={100} height={100} className="rounded-full]" /> */}
                            <img class="w-24 h-24 rounded-full mx-auto" src="/images/kelinci.jpeg" alt="" width="384" height="512"></img>
                            <div className="pt-6 space-y-4">
                                <figcaption className="font-medium">
                                <div className="">
                                    <p className="mt-5 text-sky-500">Data Profile</p>
                                    <p className="mt-5">Username:</p>
                                    <p className="mt-5">Full Name:</p>
                                    <p className="mt-5">Bio:</p>
                                    <p className="mt-5">Score:</p>
                                </div>
                                </figcaption>
                            </div>
                        </figure>
                    </div>

                    <div className="basis-1/3 ml-8">
                        <div className="flex w-full">
                            <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none mt-[126px] appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-xl pl-10 ml-4 w-5/6 py-4 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Search Username..."></input>
                        </div>
                        <card class="w-[66%] ml-12 md:flex rounded-xl bg-slate-100 mt-6">
                            <div class="md:p-4 md:text-left text-center">
                                <p class="text-lg font-medium">
                                    Saufi Roja
                                </p>
                            </div>
                        </card>
                    </div>
                </div>
            </div>
        </div>
    )
}