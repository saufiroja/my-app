import React, { useState } from 'react';
import Image from 'next/image';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { registerUser } from '../redux/actions/users';
// import { Button } from '../components/Button';

function Register(props) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const handleRegister = (e) => {
    e.preventDefault()
    const data = {
      username,
      email,
      password
    }

    setUsername('')
    setEmail('')
    setPassword('')

    props.registerUser(data)
    setTimeout(() => {
      router.push('/login')
    }, 3000);
  }
  return (
    <div className="md:bg-impostor bg-main no-repeat bg-cover bg-center bg-fixed h-screen font-body">
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
            <h1 className='text-4xl text-center font-bold'>Register</h1>
            <form className='grid'>
                <label htmlFor="username" className="mt-3">Username</label>
                <input type="text" placeholder='Username' className='border border-main rounded-large lg:w-400 md:w-300 h-12 py-1.5 px-3' value={username} onChange={e => setUsername(e.target.value)} />

                <label htmlFor="email" className="mt-3">Email</label>
                <input type="email" placeholder='Email' className='border border-main rounded-large lg:w-400 md:w-300 h-12 py-1.5 px-3' value={email} onChange={e => setEmail(e.target.value)} />

                <label htmlFor="password" className="mt-3">Password</label>
                <input type="password" placeholder='Password' className='border border-main rounded-large lg:w-400 md:w-300 h-12 py-1.5 px-3' value={password} onChange={e => setPassword(e.target.value)} />
                {
                  props.isLoading ?
                  (
                    <button className='bg-gray-300 text-gray-600 h-12 rounded-large mt-4 hover:cursor-not-allowed'>Loading ...</button>
                  ) : (
                    <button type='button' className='bg-primary text-white h-12 rounded-large mt-4' onClick={handleRegister} loading={props.isLoading ? 1 : 0}>Register</button>
                  )
                }
                {/* <Button onClick={handleRegister} title="Register" loading={props.isLoading ? 1 : 0} /> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const reduxState = (state) => ({
  isLoading: state.users.isLoading
})

const reduxDispatch = (dispatch) => ({
  registerUser: (data) => dispatch(registerUser(data))
})

export default connect(reduxState, reduxDispatch)(Register)