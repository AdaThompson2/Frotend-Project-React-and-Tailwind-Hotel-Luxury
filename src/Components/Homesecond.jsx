import React from 'react'
import image from '../assets/steven.png'
import img from '../assets/andrew.png'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

export default function Homesecond() {
  return (
    
    
    
    <div className='bg-white '>

        <p className='flex items-center justify-center pt-10  text-[#14274A] font-Montserrat text-4xl'>All our 
            room types are including complementary breakfast</p>

        <nav className='flex items-center justify-center gap-15 mt-10 '>
            <div className='h-50 w-px bg-[#14274A]'></div>
            
         {/* container 1 */}
            <div className='flex flex-col gap-5'>
                


                <h2 className='font-Adobe Garamond Pro text-4xl text-[#14274A] font-bold '>Luxury redefined</h2>

     <p className='font-Montserrat  text-[#14274A]'>Our rooms are designed to transport <br />
you into an environment made for leisure. <br />
Take your mind off the day-to-day of home <br />
life and find a private paradise for yourself.</p>

<div><button className='rounded-md text-[#FFFFFF] bg-[#E0B973] pr-4 pl-4 pt-2 pb-2'>EXPLORE</button></div>
            </div>

            {/* container 2 */}

            <div className='w-150 h-100 '><img src={image} alt="" /></div>
</nav>

 
<nav className='flex items-center justify-center gap-15 mt-10'>
<div className='h-60 w-px bg-[#14274A]'></div>

{/* container 1 */}

<div className='flex flex-col gap-5'>
<h2 className='font-Adobe Garamond Pro text-3xl text-[#14274A] font-bold '>Leave your worries in <br />
the sand</h2>

<p className='font-Montserrat  text-[#14274A]'>We love life at the beach. Being close <br />
to the ocean with access to endless sandy <br />
beach ensures a relaxed state of mind. It <br />
seems like time stands still watching the <br />
ocean.</p>

<div><button className='rounded-md text-[#FFFFFF] bg-[#E0B973] pr-4 pl-4 pt-2 pb-2'>EXPLORE</button></div>

</div>
{/* container 2 */}
<div className='w-150 h-100 '>

<img src={img} alt="" />
</div>

</nav>


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
