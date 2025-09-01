import React from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoListSharp } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  let navigate = useNavigate();

  return (
    <div className='w-[18%] min-h-[100vh] border-r-[1px] border-black py-[60px] fixed left-0 top-0 '>
      <div className='flex flex-col gap-4 pt-[40px] pl-[20%] text-[15px]'>
        
        <div 
          className='flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-3 cursor-pointer hover:bg-[#2c7b89] text-black'
          onClick={() => navigate('/add')}
        >
          <IoMdAddCircleOutline className='w-[20px] h-[20px]'/>
          <p className='hidden md:block'>Add Items</p>
        </div>

        <div 
          className='flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-3 cursor-pointer hover:bg-[#2c7b89] text-black'
          onClick={() => navigate('/lists')}
        >
          <IoListSharp className='w-[20px] h-[20px]'/>
          <p className='hidden md:block'>List Items</p>
        </div>

        <div 
          className='flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-3 cursor-pointer hover:bg-[#2c7b89] text-black'
          onClick={() => navigate('/order')}
        >
          <TiTick className='w-[20px] h-[20px]'/>
          <p className='hidden md:block'>View Orders</p>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;
