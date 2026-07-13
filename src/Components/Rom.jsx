import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import single from '../assets/single.jpg'

export default function Rom() {
  return (
    <div>

<div className='mt-10 items-center text-center'>
<div>

<h1 className='text-[#14274A] font-Adobe Garamond Pro text-4xl'>ROOMS AND RATES</h1>

<p className='mt-5'>Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, <br />
comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented <br />
by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces. </p>

</div>

{/* main nav */}
<nav className='mt-10 grid-cols-1'>

<section className='relative'>

<div className='h-150 w-250 items-center ml-45 '><img src={single} alt="" /></div>

<div className='absolute -bottom-20'><button className='rounded-none bg-[#14274A] text-3xl text-[#FFFFFF] 
font-Montserrat font-bold h-12 w-250 
 ml-45 '>SINGLE ROOM</button></div>
</section>

</nav>

{/* gird nav */}
<nav className='gird gird-col-1 text-black  mt-20 absolute ml-45'>

<div className='h-20 w-250  bg-[#FFFFFF] outline-1 rounded-b-lg'>

<div className='flex gap-100 justify-center items-center '>
<section className='flex mt-7 gap-5'>
     <AddCircleIcon className='text-[#E0B973]'/>
    
    <h1 className='text-[#14274A] font-Montserrat font-bold'>VIEW ROOM DETAILS</h1>
   
    </section>

<div><button className='rounded-md bg-[#E0B973] h-10 w-50 mt-7 text-[#FFFFFF] font-bold'>$147  Avg/night</button></div>
</div>

</div>

</nav>


</div>


















    </div>
  )
}
