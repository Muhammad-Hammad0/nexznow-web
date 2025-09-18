import React, { useState, useContext } from 'react';
import logo from '../assets/logo.png';
import { FaRegEye } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import axios from 'axios';
import { authDataContext } from '../context/AuthContext';
import { adminDataContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let { serverUrl } = useContext(authDataContext);
  let {adminData, getAdmin} = useContext(adminDataContext)  
  let navigate = useNavigate()


  const AdminLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/adminLogin`, // ✅ Fixed double slash issue
        { email, password },
        { withCredentials: true }
      );
      console.log(result.data);
      getAdmin()
      navigate("/")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start'>
      {/* Header */}
      <div className='w-full h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer'>
        <img className='w-[40px]' src={logo} alt="logo" />
        <h1 className='text-[22px] font-sans'>NumSports</h1>
      </div>

      {/* Intro */}
      <div className='w-full flex flex-col items-center gap-[10px] pt-10'>
        <span className='text-lg font-semibold'>Login Page</span>
        <span className='text-[16px]'>Welcome to NumSports, Apply to Admin Login</span>
      </div>

      {/* Form */}
      <div className="w-full flex justify-center items-start pt-10">
        <div className="max-w-[600px] w-full h-[230px] bg-[#00000025] border border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg flex items-center justify-center">
          <form
            onSubmit={AdminLogin}
            className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'
          >
            <div className='w-[90%] flex flex-col items-center gap-[15px]'>
              <input
                type="text"
                className='w-full h-[50px] border-[2px] border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold'
                placeholder='Email'
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <div className="w-full relative">
                <input
                  type={show ? "text" : "password"}
                  className='w-full h-[50px] border-[2px] border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] pr-[45px] font-semibold'
                  placeholder='Password'
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                {!show && (
                  <FaRegEye
                    className='absolute right-[15px] top-[50%] translate-y-[-50%] text-white cursor-pointer'
                    onClick={() => setShow(prev => !prev)}
                  />
                )}
                {show && (
                  <FaEye
                    className='absolute right-[15px] top-[50%] translate-y-[-50%] text-white cursor-pointer'
                    onClick={() => setShow(prev => !prev)}
                  />
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-[90%] h-[50px] bg-[#6767f5] text-white rounded-lg backdrop-blur-sm shadow-lg font-semibold hover:bg-[#6161ad] transition-all duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
