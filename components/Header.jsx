import React, {useState} from 'react'
import { IconContext } from 'react-icons'
import Link from 'next/link'
import { RiFacebookFill } from  'react-icons/ri'
import {FiTwitter} from 'react-icons/fi'
import { FaInstagram, FaBars } from 'react-icons/fa'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { BsAlarm } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { GiSmartphone } from 'react-icons/gi'
import Image from 'next/image'
import Hero from '../assets/images/hero.jpg'


const style = { color:'#48487F'}

const Header = () => {

    const [sideNav , setSideNav] = useState(false)

    const showSideNav = () => setSideNav(!sideNav)
    console.log(sideNav)
  return (

    <>
    <div className='relative'>


              <div className=' z-10 fixed w-full flex flex-col bg-white justify-between shadow-lg  p-8 md:pt-5 shadow-cyan-500/50'>

                  <div className='w-full flex  bg-white justify-between '>

                      <div className="flex  align-middle space-x-4 mx-auto ">
                          <a href="instagram.com" className='hover:bg-[#e95950]'><FaInstagram style={style} size={30} /></a>

                          <a href="facebook.com" className='hover:bg-[#00B6F1]'>
                              <RiFacebookFill style={style} size={30} />
                          </a>
                          <a href="facebook.com" className='hover:bg-[#00B6F1]'>
                              <FiTwitter style={style} size={30} />
                          </a>
                      </div>

                      <div className='mx-auto'>
                          logo
                      </div>

                      <div className="mx-auto">
                          <div>
                              0726601941
                          </div>
                        
                      
                  </div>

                 </div>


                  <div className='mt-5 flex md:hidden '>
                  {
                          sideNav === true ? (<AiOutlineCloseSquare style={style} size={30} className='cursor-pointer' onClick={() => showSideNav()} />): (<FaBars style = { style } size = { 30 } className = 'cursor-pointer' onClick = { () => showSideNav() }/>)
                  }
                     
                         
                      <div className='w-full'>
                          {/* <div className='absolute flex flex-col items-center self-end md:hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md
                           text-xl text-[#48487F] hover:text-[#4A4A59] '> */}

                          <div className={'absolute flex flex-col py-8 px-10 mt-10 space-y-6 font-bold text-xl bg-white text-[#48487f] hover:text-[#4a4a59] self-end sm:w-auto sm:self-center  left-6 right-6  drop-shadow-md '   + (sideNav  ? 'flex' : 'hidden')}>

                                  <Link href='/'>
                                      Home
                                  </Link>
                                  <Link href='/about'>
                                      About Us
                                  </Link>

                                  <Link href='/services'>
                                      Services
                                  </Link>


                                  <Link href='/blog'>
                                      Blog
                                  </Link>
                                  <Link href='/contact'>
                                      Contact Us
                                  </Link>

                                  <Link href='/appointments'>
                                      Make  Appointment
                                  </Link>
                            
                          </div>
                      </div>

                  </div>
                  <div className=' w-full hidden md:flex  bg-white justify-between flex-col md:flex-row '>
                
                      <div className='mt-5 flex space-x-6 align-middle justify-between text-xl text-[#48487F] hover:text-[#4A4A59]  mx-auto'>

                          <Link href='/'>
                              Home
                          </Link>
                          <Link href='/about'>
                              About Us
                          </Link>

                          <Link href='/services'>
                              Services
                          </Link>
                      </div>
                      <div className='my-6 hidden md:flex  space-x-6 align-middle justify-between text-xl text-[#48487F] hover:text-[#4A4A59] mx-auto'>

                          <Link href='/blog'>
                              Blog
                          </Link>
                          <Link href='/contact'>
                              Contact Us
                          </Link>

                          <Link href='/appointments'>
                              Make  Appointment
                          </Link>
                      </div>
                  </div>

              </div>

              <div className="  flex  justify-center pt-20 md:pt-10 h-auto">
                  <Image src={Hero} width="1400px" height="700px" className="mt-10" alt="hero" />

                  <div className='absolute mt-20 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                      <h1 className='text-xl md:text-5xl text-center font-medium my-5 text-[#48487F]' >
                          Ngozi  Africa
                      </h1>

                      <p className='text-center my-5 text-gray-700 text-xl md:text-3xl'>
                          Health Resort
                      </p>

                      <div className='flex justify-between align-middle gap-10 '>
                          <button className='bg-[#48487F] text-sm md:text-xl  px-2  md:px-10 py-1 md:py-2 text-white font-base rounded-sm' >

                              <Link href='/services'>
                                  Services
                              </Link>
                          </button>

                          <button className='bg-[#48487F] text-sm md:text-xl px-1 md:px-3 py-1 md:py-2 text-white font-base rounded-sm' >
                              <Link href='/appointments'>
                                  Make Appointment
                              </Link>
                          </button>
                      </div>
                  </div>


              </div>

              <div className='mt-20 top-3/4  w-full bg-white opacity-80 h-auto md:h-60 absolute shadow-lg shadow-cyan-500/50'>

                  <div className='mt-10 w-full flex flex-col gap-10 md:flex-row justify-between align-middle '>
                      <div className='flex justify-between align-middle gap-10 md:gap-5 mx-auto ' >
                          <div>
                              <BsAlarm style={style} size={50} />
                          </div>
                          <div>
                              <h3>
                                  Opening Hours
                              </h3>

                              <p>
                                  Monday -Friday

                              </p>
                              <span>
                                  8:30 am – 5:30 pm
                              </span>
                          </div>
                      </div>
                      <div className='flex justify-between align-middle gap-10 md:gap-5 mx-auto'>
                          <div>
                              <GoLocation style={style} size={50} />
                          </div>
                          <div>
                              <h3>
                                  MH47+6R2 Diani Beach
                              </h3>

                              <p>
                                  Kenya

                              </p>
                          </div>
                      </div>
                      <div className='flex justify-between align-middle gap-10 md:gap-5 mx-auto'>
                          <div>
                              <GiSmartphone style={style} size={50} />
                          </div>
                          <div>
                              <h3>
                                  Get in touch
                              </h3>

                              <p>

                                  0111 803944
                              </p>
                              <p>
                                  0721 215653
                              </p>
                          </div>
                      </div>


                      <div>

                      </div>
                  </div>

              </div>

</div>
         
    </>
  
  )
}

export default Header