import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import axios from 'axios';
import { useContext } from 'react';
import { authDataContext } from '../context/AuthContext';
import { adminDataContext } from '../context/AdminContext';

function Nav() {
  let navigate = useNavigate(); 
  let {serverUrl} = useContext(authDataContext)
  let {getAdmin} =useContext(adminDataContext)

  const logOut = async()=>{
    try {
        const result = await axios.get(serverUrl + "/api/auth/logout",{withCredentials:true})
        console.log(result.data);
        getAdmin()
        navigate("/login")
        
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className='w-[100vw] h-[70px] bg-black z-10 fixed top-0 flex items-center justify-between px-[30px] overflow-x-hidden shadow-md shadow-black'>
      <div
        className='w-[30%] flex items-center justify-start gap-[10px] cursor-pointer'
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="logo.png" className='w-[70px]' />
      
      </div>

      {/* RGB Border Animated Button */}
      <button
        className='relative text-[15px] cursor-pointer bg-[#000000ca] py-[10px] px-[20px] rounded-2xl text-white font-semibold transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95'
        style={{
          border: '3px solid transparent',
          backgroundImage: 'linear-gradient(#000000ca, #000000ca), linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet, red)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
          animation: 'rgbBorder 3s linear infinite'
        }}
      onClick={logOut} >
        LogOut
      </button>

      {/* Keyframes */}
      <style>{`
        @keyframes rgbBorder {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        button {
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  )
}

export default Nav
