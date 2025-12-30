import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Login = ({ setToken }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async(e) => {
        try {
            e.preventDefault();

            const response = await axios.post('http://localhost:4000/api/user/admin', { email, password })

            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center w-full bg-gray-50'>
            <div className='bg-white border border-gray-300 rounded-none px-8 py-8 max-w-md w-full'>
                <h1 className='text-2xl font-serif font-bold mb-6 text-gray-900'>Admin Panel</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className='mb-4'>
                        <p className='text-sm font-medium text-gray-700 mb-2 font-sans'>Email Address</p>
                        <input 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className='rounded-none w-full px-3 py-2 border border-gray-300 outline-none focus:border-[#C5A059] transition-colors font-sans'
                            type="email"
                            placeholder='your@email.com'
                            required 
                        />
                    </div>
                    <div className='mb-4'>
                        <p className='text-sm font-medium text-gray-700 mb-2 font-sans'>Password</p>
                        <input 
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className='rounded-none w-full px-3 py-2 border border-gray-300 outline-none focus:border-[#C5A059] transition-colors font-sans'
                            type="password"
                            placeholder='Enter your password'
                            required 
                        />
                    </div>
                    <button 
                        className='mt-4 w-full py-3 px-4 rounded-none text-white bg-black uppercase tracking-widest hover:bg-gray-800 transition-colors font-sans text-sm'
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
