import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../redux/actions/users";
import Image from 'next/image';


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
            <div className="absolute xl:ml-[-215px] xl:mt-[-185px] lg:ml-[-215px] lg:mt-[-185px] md:ml-[-215px] md:mt-[-185px]">
            <Image src="/images/kuning.svg" alt="impostor-logo" width={280} height={280}/>
            </div>
            <div className="absolute xl:left-[50%] xl:top-[20%] lg:left-[53%] lg:top-[17%] md:left-[53%] md:top-[17%]">
            <Image src="/images/kuning.svg" alt="impostor-logo" width={120} height={120}/>
            </div>
            <div className="absolute xl:top-[-12%] xl:right-[-40%] lg:top-[-12%] lg:right-[-60%] md:top-[-12%] md:right-[-60%]">
            <Image src="/images/ungu.svg" alt="impostor-logo" width={964} height={964}/>
            </div>
            <div className="absolute xl:left-[70%] xl:top-[34%] lg:left-[70%] lg:top-[34%] md:left-[70%] md:top-[34%]">
            <Image src="/images/game.svg" alt="impostor-logo" width={458} height={308}/>
            </div>
            <div className="absolute xl:left-[82%] xl:top-[78%] lg:left-[82%] lg:top-[70%] md:left-[82%] md:top-[70%]">
            <Image src="/images/batu.svg" alt="impostor-logo" width={79} height={31}/>
            </div>
            <div className="container mx-auto px-[6%]">
                <div className="h-screen w-5/12 pt-[110px] ml-4">
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