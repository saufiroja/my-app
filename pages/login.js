import React, { useState } from 'react';
import Image from 'next/image';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { useDispatch } from "react-redux"
import { loginUser } from '../redux/actions/users';
// import { Button } from '../components/Button';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState('')

  const router = useRouter()
  const dispatch = useDispatch()

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
    setLoading(true)

    dispatch(
      loginUser(data)
    )
    
    setTimeout(() => {
      router.push('/game')
    }, 3000);
  }
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
                <label htmlFor="email" className="mt-3">Email</label>
                <input type="email" placeholder='Email' className='border border-main rounded-large lg:w-400 md:w-300 h-12 py-1.5 px-3' value={email} onChange={e => setEmail(e.target.value)} />

                <label htmlFor="password" className="mt-3">Password</label>
                <input type="password" placeholder='Password' className='border border-main rounded-large lg:w-400 md:w-300 h-12 py-1.5 px-3' value={password} onChange={e => setPassword(e.target.value)} />
                {
                  loading ?
                  (
                    <button className='bg-gray-300 text-gray-600 h-12 rounded-large mt-4 hover:cursor-not-allowed'>Loading ...</button>
                  ) : (
                    <button type='button' className='bg-primary text-white h-12 rounded-large mt-4' onClick={handleLogin} loading={loading ? 1 : 0}>Login</button>
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

// const reduxState = (state) => ({
//   isLoading: state.users.isLoading
// })

// const reduxDispatch = (dispatch) => ({
//   loginUser: (data) => dispatch(loginUser(data))
// })

// export default connect(reduxState, reduxDispatch)(Login)
export default Login;