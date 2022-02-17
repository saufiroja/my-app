import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { registerUser } from '../redux/actions/users';
// import { Button } from '../components/Button';
import AssetKuning from "../components/Assets/AssetKuning";
import LingkaranKuning from "../components/Assets/LingkaranKuning";
import AssetUngu from "../components/Assets/AssetUngu";
import AssetGame from "../components/Assets/AssetGame";
import AssetBatu from "../components/Assets/AssetBatu";

function Register(props) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const { isLoading, error, registerUser, redirect } = props

  const handleRegister = (e) => {
    e.preventDefault()

    const data = {
      username,
      email,
      password
    }

    registerUser(data)
  }

  useEffect(() => {
    if(error){
      console.log('error auth: ', error);
    } else {
      console.log('tidak ada error');
      setUsername('')
      setEmail('')
      setPassword('')
    }
  }, [error])

  // useEffect(() => {
  //   if(redirect){
  //     router.push('/')
  //   } else {
  //     console.log('redirect: ', redirect);
  //   }
  // }, [redirect, router])

  return (
    <div className="bg-white no-repeat bg-cover h-screen w-screen font-body relative overflow-hidden">
      <AssetKuning />
      <LingkaranKuning />
      <AssetUngu />
      <AssetGame />
      <AssetBatu />

      <div className="container py-14">
        {/* Navbar */}
        <nav>
          <div className='flex items-center justify-start xl:ml-[5%] lg:ml-[5%] md:ml-[12%]'>
            <Image src="/images/impostor-logo.svg" alt="impostor-logo" width={24} height={24} />
            <span className='font-bold px-2.5 text-2xl'>Impostor</span>
          </div>
        </nav>

        {/* Main Component */}
        <div className='md:flex gap-2 justify-start items-center py-20 xl:ml-[5%] lg:ml-[5%] md:ml-[12%]'>
          <div>
            <h1 className='text-4xl text-center font-bold'>Register</h1>
            <form className='grid'>
              {
                error && (
                  <div className="border-red-200 border-transparent border-solid text-red-500 bg-red-200 relative p-3">
                    <p>{error}</p>
                  </div>
                )
              }
              <label htmlFor="username" className="mt-3">Username</label>
              <input type="text" placeholder='Username' className='border border-main rounded-large lg:w-400 md:w-300 h-12 py-1.5 px-3' value={username} onChange={e => setUsername(e.target.value)} />

              <label htmlFor="email" className="mt-3">Email</label>
              <input type="email" name='email' placeholder='Email' className='border border-main rounded-large lg:w-400 md:w-300 h-12 py-1.5 px-3' value={email} onChange={e => setEmail(e.target.value)}/>

              <label htmlFor="password" className="mt-3">Password</label>
              <input type="password" placeholder='Password' className='border border-main rounded-large lg:w-400 md:w-300 h-12 py-1.5 px-3' value={password} onChange={e => setPassword(e.target.value)} />
              {
                isLoading ?
                (
                  <button className='bg-gray-300 text-gray-600 h-12 rounded-large mt-4 hover:cursor-not-allowed'>Loading ...</button>
                ) : (
                  <button type='button' className='bg-primary text-white h-12 rounded-large mt-4 hover:bg-blue-700' onClick={handleRegister} loading={isLoading ? 1 : 0}>Register</button>
                )
              }
              {/* <Button onClick={handleRegister} title="Register" loading={props.isLoading ? 1 : 0} /> */}
            </form>
            <div className="flex gap-2 mt-3">
              <h3>Sudah punya akun?</h3>
              <Link href='/login'>
                <a className='text-blue-400 underline'>Login di sini</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isLoading: state.users.isLoading,
  error: state.users.error,
  redirect: state.users.redirect
})

const mapDispatchToProps = (dispatch) => ({
  registerUser: (data) => dispatch(registerUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)