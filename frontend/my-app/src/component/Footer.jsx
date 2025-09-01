import React from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

function Footer() {

const navigate = useNavigate()

  return (
    <div className='w-[100%] md:h-[36vh] h-[21vh] mb-[77px] md:mb-[0px]'>
      <div className='w-[100%] md:h-[30vh] h-[15vh] md:mb-[0] bg-[#dbfcfcec]
      flex items-center justify-center md:px-[50px] px-[5px]'>
        <div className='md:w-[30%] w-[35%] h-[100%] flex items-start justify-center 
        flex-col gap-[5px]'>
            <div className='flex items-start justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
                <img src={logo} alt="" className='md:w-[40px] md:h-[40px] w-[30px] h-[30px] bg-black'/>
                <p className='text-[19px] md:text-[20px] text-[black]'>Nexzen </p>
               
            </div>

 <p className='text-[15px] text-[#1e2223] hidden md:block'>
NEXZEN is more than just an online store—it’s a community. A place where shoppers feel confident, valued, and inspired. Whether you’re here to find something unique, upgrade your lifestyle, or simply enjoy a smooth shopping journey, we’re here to make it.  </p>
                 <p className='text-[15px] text-[#1e2223] flex md:hidden'>
                    Fast. Easy. Relible. NumSports Shooping
                </p>

        </div>

<div className='md:w-[25%] w-[30%] h-[100%] flex items-center justify-center flex-col text-center'>
<div className='flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
<p className='text-[19px] md:text-[20px] text-[#1e2223] font-sans'>
COMPANY
</p>
</div>
<ul>
    <li className='text-[15px] text-[#1e2223] hidden md:block' onClick={()=>navigate("/")}>
        Home
    </li>
    <li className='text-[15px] text-[#1e2223] cursor-pointer' onClick={()=>navigate("/about")}>
        About Us
    </li>
    <li className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer'>
        Delivery
        </li>
    <li className='text-[15px] text-[#1e2223] cursor-pointer'>Privacy Policy</li>
</ul>
</div>

<div className='md:w-[25%] w-[40%]  h-[100%] flex items-center justify-center flex-col text-center'>
<div className='flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
<p className='text-[19px] md:text-[20px] text-[#1e2223] font-sans'>
GET IN TOUCH
</p>
</div>
<ul>
    <li className='text-[15px] text-[#1e2223] hidden md:block'>
       +923265870737
    </li>
    <li className='text-[15px] text-[#1e2223] cursor-pointer'>
       nexzennow@gmail.com
    </li>
    <li className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer'>
        +923272560635
        </li>
    <li className='text-[15px] text-[#1e2223] cursor-pointer'>hammaddeveloper02@gmail.com</li>
</ul> 
</div>

      </div>

<div className='w-[100%] h-[1px] bg-slate-400'>
   
</div>
 <div className='w-[100%] h-[5vh] bg-[#dbfcfcfe] flex items-center justify-center'>
Copyright 2025@NumSport.com-All Right Reserved

    </div>
    </div>
  )
}

export default Footer
