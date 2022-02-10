import React from "react";

export default function EditProfile() {
    return (
        <div className="bg-impostor no-repeat bg-cover h-screen w-screen font-body">
            <div className="container mx-auto px-[6%]">
                <div className="h-screen w-5/12 pt-[130px]">
                    <p className="text-[38px] text-center font-semibold text-slate-700">Edit Profile</p>
                    <p className="text-left mt-4">Username</p>
                    <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-[40px] py-3 pl-4 ring-1 ring-slate-200 shadow-sm mt-2" type="text" aria-label="Filter projects" placeholder="Username"></input>
                    <p className="text-left mt-4">FullName</p>
                    <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-[40px] py-3 pl-4 ring-1 ring-slate-200 shadow-sm mt-2" type="text" aria-label="Filter projects" placeholder="Fullname"></input>
                    <p className="text-left mt-4">Bio</p>
                    <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-[40px] py-3 pl-4 ring-1 ring-slate-200 shadow-sm mt-2" type="text" aria-label="Filter projects" placeholder="Bio"></input>
                    <button type="button" className="bg-primary text-white rounded-large mt-4 py-3 w-full">Update</button>
                    <div className="flex text-slate-700">
                        <p className="mt-4">Back To Profile?</p>
                        <p className="mt-4 underline underline-offset-4 text-blue-600 ml-4">Klick Here</p>
                    </div>
                </div>
            </div>
        </div>
    )
}