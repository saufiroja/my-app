import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";
import { useRouter } from 'next/router';
import axios from "axios";
import AssetKuning from '/components/Assets/AssetKuning';
import AssetUngu from '/components/Assets/AssetUngu';
import AssetGame from '/components/Assets/AssetGame';
import AssetBatu from '/components/Assets/AssetBatu';
import CardUser from "../CardUsers";

export default function Profile() {
    const [users, setUsers] = useState('')
    const router = useRouter()

    useEffect(() => {
        const token  = localStorage.getItem("token");
        if (!token) {
            return router.push('/')
        }
        axios.get(`https://impostorteam-app.herokuapp.com/api/users`)
        .then((result) => {
            setUsers(result.data.user)
            console.log('result:', result.data);
        })
    }, [router])

    const handleDetailUser = () => {
        console.log('diklik!');
    }

    return (
        <div className='bg-white no-repeat bg-cover h-screen w-screen font-body relative overflow-hidden'>
            <AssetKuning />
            <AssetUngu />
            <AssetGame />
            <AssetBatu />
            <div className="container px-[6%]">
                <div className="mt-100px">
                <Image src="/images/feature.svg" alt="profile-picture" width={150} height={26}/>
                </div>
                <div className="flex flex-row">
                    <div className="basis-1/3 h-screen">
                        <button className="bg-sky-600 hover:bg-sky-700 rounded-large px-9 py-[15px] flex flex-nowrap justify-center mt-12">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <h3 className="mx-3 text-slate-50">My Profile</h3>
                        </button>

                        <figure className="bg-slate-100 rounded-xl p-8 mt-6 font-body">
                            {/* <img className="w-24 h-24 mt-3 rounded-full mx-auto" src="./images/kelinci.jpeg" alt="" width="384" height="512"/>  */}
                            <Image src="/images/kelinci.jpeg" alt="profile-picture" width={200} height={200} className="w-24 h-24 mt-3 rounded-full mx-auto" />
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
                            <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none mt-[176px] appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-xl pl-10 ml-4 w-5/6 py-4 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Search Username..."></input>
                        </div>
                        {/* <figure className="w-[66%] ml-8 md:flex rounded-xl bg-slate-100">
                            <div className="md:p-4 text-center md:text-left">
                                <p className="text-lg font-medium">
                                    Saufi Roja
                                </p>
                            </div>
                        </figure> */}
                        <CardUser 
                            users={users}
                            handleDetailUser={handleDetailUser}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}