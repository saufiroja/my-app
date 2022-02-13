import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { loginUser } from '../redux/actions/users';
// import { Button } from '../components/Button';

function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { isLoading, error, loginUser, redirect } = props

  const router = useRouter()

  const handleLogin = (e) => {
    e.preventDefault()
    const data = {
      email,
      password
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    setEmail('')
    setPassword('')

    loginUser(data)
  }

  useEffect(() => {
    if(redirect){
      router.push('/edit-profile')
    } else {
      console.log('redirect: ', redirect);
    }
  }, [redirect, router])

  return (
    <div className="md:bg-impostor bg-main no-repeat bg-cover bg-center bg-fixed md:h-screen font-body">
      <div className="container py-14">
        {/* Navbar */}
        <nav>
          <div className='flex items-center justify-start'>
            <Image src="/images/impostor-logo.svg" alt="impostor-logo" width={24} height={24} />
            <span className='font-bold px-2.5 text-2xl'>Impostor</span>
          </div>
        </nav>

        {/* Main Component */}
        <div className='md:flex gap-2 justify-start items-center py-20'>
          <div>
            <h1 className='text-4xl text-center font-bold'>Login</h1>
            <form className='grid'>
              {
                error && (
                  <div className="border-red-200 border-transparent border-solid text-red-500 bg-red-200 relative p-3">
                    <p>{error}</p>
                  </div>
                )
              }
              <label htmlFor="email" className="mt-3">Email</label>
              <input type="email" placeholder='Email' className='border border-main rounded-large lg:w-400 md:w-300 h-12 py-1.5 px-3' value={email} onChange={e => setEmail(e.target.value)} />

              <label htmlFor="password" className="mt-3">Password</label>
              <input type="password" placeholder='Password' className='border border-main rounded-large lg:w-400 md:w-300 h-12 py-1.5 px-3' value={password} onChange={e => setPassword(e.target.value)} />
              {
                isLoading ?
                (
                  <button className='bg-gray-300 text-gray-600 h-12 rounded-large mt-4 hover:cursor-not-allowed'>Loading ...</button>
                ) : (
                  <button type='button' className='bg-primary text-white h-12 rounded-large mt-4' onClick={handleLogin} loading={isLoading ? 1 : 0}>Login</button>
                )
              }
              {/* <Button onClick={handleRegister} title="Register" loading={props.isLoading ? 1 : 0} /> */}
            </form>
            <div className="flex gap-2 mt-3">
              <h3>Belum Punya Akun?</h3>
              <Link href='/register'>
                <a className='text-blue-400 underline'>Daftar di sini</a>
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
  loginUser: (data) => dispatch(loginUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)