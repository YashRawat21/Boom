import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import backgroundImage from "../assets/backgroundImage.jpg"
import Navbar from './Navbar'
const Home = () => {
  const [roomCode , setRoomCode] = useState()
  const navigate = useNavigate()
  const submitCode = (e)  => {
    e.preventDefault();
    navigate(`/room/${roomCode}`)
  }
    return (
        <div className=' '>
          <Navbar />

    <div className='relative h-screen'>
        <div className=' absolute h-full w-full flex overflow-hidden'>
            <img src= {backgroundImage}  className='object-cover w-full h-full '/>
        </div>
        <div className=' absolute h-full w-full flex overflow-hidden bg-black/60'>
            
        </div>
         <div className='lg:flex lg:pt-20 flex-col items-center justify-center relative z-10 px-6 md:max-w-[90vw] mx-auto'>
         <div className='pb-8'>
            <h1 className='text-[50px] md:text-[80px] text-white font-bold pt-12'>Video Chat App</h1>
            <p className='text-[26px] text-white -mt-2'>With ZegoCloud</p>
         </div>
       
       
        <form action='' className = 'text-white md:pt-12  flex flex-col items-center justify-center' onSubmit={submitCode} >
      <div className='flex flex-col justify-center items-center'>
      <h2 className='font-bold text-[30px] md:text-[40px] text-white pt-6'>Enter The Room Code</h2>
      <input className= '  py-1.5 md:py-2 px-4 rounded-full max-w-[14rem] mt-2 md:mt-6 outline-none text-black' type='text' required placeholder='Enter Room Code' value={roomCode} onChange={(e) => setRoomCode(e.target.value)}/>
      <button type='submit' className=' bg-blue-500  hover:bg-blue-400 duration-100 ease-out font-bold w-[5rem] rounded-full md:py-[7px] py-[5px] mt-2 md:mt-4 md:w-[7rem]' >Go</button>
      </div>
        </form>
         </div>
    </div>
        </div>
  )
}

export default Home