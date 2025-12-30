import React from 'react'

const NavBar = ({ setToken }) => {
  return (
    <div className='flex items-center py-3 px-[4%] justify-between bg-white border-b border-gray-200'>
      <div className='flex flex-col items-center'>
        <h1 className='font-serif text-2xl font-bold tracking-widest text-gray-900 uppercase'>SHEN LUXOR</h1>
        <p className='font-sans text-xs tracking-[0.2em] text-[#C5A059] -mt-1'>ADMIN PANEL</p>
      </div>
      <button 
        onClick={() => setToken('')} 
        className='bg-black text-white px-5 py-2 sm:px-7 sm:py-2 rounded-none uppercase tracking-widest hover:bg-gray-800 transition-colors text-xs sm:text-sm font-sans'
      >
        Logout
      </button>
    </div>
  )
}

export default NavBar
