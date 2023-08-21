import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiLogOut } from 'react-icons/bi'
import { ONLINE_CHATS, RESOLVED_CHATS, ORDERS } from '../Navigation/routes'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'store'
import { logoutAdmin } from 'store/adminThunks'

export const AdminPanelNav = () => {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div>
      <div className={`flex items-center justify-center bg-[#101010] py-6`}>
        <p className="text-[#FFFFFF] font-bold text-2xl lg:text-2xl tracking-widest uppercase">
          ADMIN PANEL
        </p>
      </div>
      <div className={`flex items-center justify-center bg-[#101010] py-6`}>
        <div className="flex justify-center items-center w-1/2">
          <NavLink
            to={ONLINE_CHATS}
            aria-label="Home"
            className="text-xl"
            style={({ isActive }) => ({
              color: isActive ? '#D87D4A' : 'white',
            })}
          >
            ONLINE CHATS
          </NavLink>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <NavLink
            to={RESOLVED_CHATS}
            aria-label="Home"
            className="text-xl"
            style={({ isActive }) => ({
              color: isActive ? '#D87D4A' : 'white',
            })}
          >
            RESOLVED CHATS
          </NavLink>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <NavLink
            to={ORDERS}
            aria-label="Home"
            className="text-xl"
            style={({ isActive }) => ({
              color: isActive ? '#D87D4A' : 'white',
            })}
          >
            ORDERS
          </NavLink>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <button
            className="text-xl text-white"
            onClick={() => dispatch(logoutAdmin())}
          >
            LOGOUT
          </button>
          <BiLogOut className="text-xl text-white" />
        </div>
      </div>
    </div>
  )
}
