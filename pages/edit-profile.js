import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../redux/actions/users";
import Image from 'next/image';
import AssetKuning from "../components/Assets/AssetKuning";
import LingkaranKuning from "../components/Assets/LingkaranKuning";
import AssetUngu from "../components/Assets/AssetUngu";
import AssetGame from "../components/Assets/AssetGame";
import AssetBatu from "../components/Assets/AssetBatu";


const EditProfile = (props) => {
    const { user, updateProfile } = props;
    const [username, setUsername] = useState(user.data.username)
    const [name, setName] = useState(user.data.name)
    const [bio, setBio] = useState(user.data.bio)

    const handleUpdate = () => {
        const data = {
            username,
            name,
            bio,
            id: user.data.id
        };

        console.log('data update: ', data);
        updateProfile(data)
    }
    return (
        <div className="bg-white no-repeat bg-cover h-screen w-screen font-body relative overflow-hidden">
            <AssetKuning />
            <LingkaranKuning />
            <AssetUngu />
            <AssetGame />
            <AssetBatu />
            
            <div className="container mx-auto px-[6%]">
                <div className="h-screen w-5/12 pt-[80px] xl:ml-4 lg:ml-4 md:ml-20 sm:ml-[30%]">
                    <p className="text-[38px] text-center font-semibold text-slate-700">Edit Profile</p>
                    <p className="text-left mt-4">Username</p>
                    <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-[40px] py-3 pl-4 ring-1 ring-slate-200 shadow-sm mt-2" type="text" aria-label="Filter projects" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />

                    <p className="text-left mt-4">FullName</p>
                    <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-[40px] py-3 pl-4 ring-1 ring-slate-200 shadow-sm mt-2" type="text" aria-label="Filter projects" placeholder="Fullname" value={name} onChange={(e) => setName(e.target.value)} />

                    <p className="text-left mt-4">Bio</p>
                    <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-[40px] py-3 pl-4 ring-1 ring-slate-200 shadow-sm mt-2" type="text" aria-label="Filter projects" placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} />

                    {/* {
                        loading ?
                        (
                        <button className='bg-gray-300 text-gray-600 h-12 rounded-large mt-4 hover:cursor-not-allowed w-full'>Loading ...</button>
                        ) : (
                        <button type='button' className='bg-primary text-white h-12 rounded-large mt-4 w-full' onClick={handleUpdate} loading={loading ? 1 : 0}>Update</button>
                        )
                    } */}
                    <button type="button" className="bg-primary text-white rounded-large mt-4 py-3 w-full" onClick={handleUpdate}>Update</button>
                    <div className="flex text-slate-700">
                        <p className="mt-4">Back To Profile?</p>
                        <p className="mt-4 underline underline-offset-4 text-blue-600 ml-4">Klick Here</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.users.user
})

const mapDispatchToProps = (dispatch) => ({
    updateProfile: (data) => dispatch(updateProfile(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);