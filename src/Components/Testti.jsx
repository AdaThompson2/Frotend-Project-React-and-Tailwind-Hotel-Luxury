import React from 'react'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

export default function Testti() {
  return (
    <div>


        <nav className='flex flex-col gap-5 pb-20'>
    
    <div className='flex flex-col gap-3'>

<h1 className='text-3xl text-[#14274A] font-bold font-Adobe Garamond Pro pl-140'>Testimonials</h1>

<p className='text-[#14274A] font-Montserrat pl-120'>"Calm, Serene, Retro – What a way to relax and enjoy"</p>
<h3 className='font-Montserrat text-[#14274A] pl-140'>Mr. and Mrs. Baxter, UK</h3>

<nav className='flex pl-150 gap-3 text-[#FFFFFF] '>
{/* 1 button */}
<div><button className='flex items-center rounded-md 
bg-[#E0B973] pr-1 pl-1 pt-1 pb-1'>
    <ArrowBackIosOutlinedIcon/>
    </button></div>

    {/* 2 button */}
    <div><button className='flex items-center rounded-md 
bg-[#E0B973] pl-1 pr-1 pb-1 pt-1'>
    <ArrowForwardIosOutlinedIcon/>
    </button></div>



</nav>

</div>
</nav>













    </div>
  )
}
