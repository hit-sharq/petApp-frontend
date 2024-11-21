import React from 'react'
import { NavLink } from 'react-router-dom'

import '../Navbar.css'

export function Navbar() {
  return (
    <div className='navbar-main'>
      <div className='navbar'>
          <NavLink to='/overview'>
            <img src='/petlogo.png' alt='' className='w-[200px] h-[]' />
          </NavLink>
        <div className='flex'>
          <div className='px-[20px]'>
            <NavLink
              to='/overview'
              className={({ isActive, isPending }) => {
                let className = 'text-wrapper-36'
                if (isActive) {
                  className += ' active'
                } else if (isPending) {
                  className += ' pending'
                }
                return className
              }}
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? 'green' : 'white',
                }
              }}>
              Overview
            </NavLink>
          </div>
          <div className='px-[20px]'>
            <NavLink
              to='/health'
              className={({ isActive, isPending }) => {
                let className = 'text-wrapper-36'
                if (isActive) {
                  className += ' active'
                } else if (isPending) {
                  className += ' pending'
                }
                return className
              }}
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? 'green' : 'white',
                }
              }}>
              Health
            </NavLink>
          </div>
          <div className='px-[20px]'>
            <NavLink
              to='/appointment'
              className={({ isActive, isPending }) => {
                let className = 'text-wrapper-36'
                if (isActive) {
                  className += ' active'
                } else if (isPending) {
                  className += ' pending'
                }
                return className
              }}
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? 'green' : 'white',
                }
              }}>
              Appointments
            </NavLink>
          </div>
          <div className='px-[20px]'>
            <NavLink
              to='/community'
              className={({ isActive, isPending }) => {
                let className = 'text-wrapper-36'
                if (isActive) {
                  className += ' active'
                } else if (isPending) {
                  className += 'text-wrapper-36'
                }
                return className
              }}
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? 'green' : 'white',
                }
              }}>
              Community
            </NavLink>
          </div>
        </div>
        <div className='w-[] h-[60px] object-contain flex justify-center '>
          <NavLink to='/profilePage'>
          <img src='/petsettings.png' alt='' />
          </NavLink>
        </div>
      </div>
    </div>
  )
}
