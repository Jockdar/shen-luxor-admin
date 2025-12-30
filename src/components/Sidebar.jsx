import React from 'react'
import { NavLink } from 'react-router-dom'
import {assets} from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r border-gray-200 bg-white'>
      <div className='flex flex-col gap-2 pt-6 pl-[20%] text-[15px]'>
          <NavLink 
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-4 rounded-none transition-colors font-sans ${
                isActive 
                  ? 'bg-gray-50 border-r-[3px] border-[#C5A059] text-black font-medium' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`
            }
            to='/add'
          >
              <img className='w-5 h-5' src={assets.add_icon} alt="" />
              <p className='md:block'>Add Items</p>
          </NavLink>
          <NavLink 
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-4 rounded-none transition-colors font-sans ${
                isActive 
                  ? 'bg-gray-50 border-r-[3px] border-[#C5A059] text-black font-medium' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`
            }
            to='/list'
          >
              <img className='w-5 h-5' src={assets.order_icon} alt="" />
              <p className='md:block'>List Items</p>
          </NavLink>
          <NavLink 
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-4 rounded-none transition-colors font-sans ${
                isActive 
                  ? 'bg-gray-50 border-r-[3px] border-[#C5A059] text-black font-medium' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`
            }
            to='/order'
          >
              <img className='w-5 h-5' src={assets.order_icon} alt="" />
              <p className='md:block'>Order Items</p>
          </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
