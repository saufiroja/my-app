import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";

export default function Profile() {
    return (
        <div className="bg-impostor no-repeat bg-cover h-screen w-screen font-body">
            <div className="container mx-auto px-[6%]">
                <div className="flex flex-row">
                    <div className="basis-1/3 h-screen">
                    {/* <img className="mt-6" src="./images/logo-black.png"/> */}
                    <Image src="/images/logo-black.png" alt="logo-black" className="mt-6" width={30} height={30} />
                        <button className="bg-sky-600 hover:bg-sky-700 rounded-large px-9 py-[15px] flex flex-nowrap justify-center mt-12">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <h3 className="mx-3 text-slate-50">My Profile</h3>
                        </button>

                        <figure className="bg-slate-100 rounded-xl p-8 mt-6 font-body">
                            {/* <img className="w-24 h-24 mt-3 rounded-full mx-auto" src="./images/kelinci.jpeg" alt="" width="384" height="512"/>  */}
                            <Image src="/images/kelinci.jpeg" alt="profile-picture" width={384} height={512} className="w-24 h-24 mt-3 rounded-full mx-auto" />
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

                    <div className="basis-1/3">
                        <div className="flex items-center w-full mr-4">
                            <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none mt-[176px] appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-xl py-2 pl-10 ml-4 w-5/6 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Search Username..."></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}