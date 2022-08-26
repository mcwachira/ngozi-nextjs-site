import React from 'react'
import { IconContext } from 'react-icons'
import Link from 'next/link'
import { RiFacebookFill } from  'react-icons/ri'
import {FiTwitter} from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
import { BsAlarm } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { GiSmartphone } from 'react-icons/gi'
import Image from 'next/image'
import Hero from '../assets/images/hero.jpg'

const style = { color:'#48487F'}

const Header = () => {
  return (

    <>
          <div className=' z-10 fixed w-full flex bg-white justify-between shadow-lg h-30 pt-10 shadow-cyan-500/50'>

              <div className="flex align-middle flex-col mx-auto">

                  <div className="flex  align-middle space-x-4  ">
                      <a href="instagram.com" className='hover:bg-[#e95950]'><FaInstagram style={style} size={30} /></a>

                      <a href="facebook.com" className='hover:bg-[#00B6F1]'>
                          <RiFacebookFill style={style} size={30} />
                      </a>
                      <a href="facebook.com" className='hover:bg-[#00B6F1]'>
                          <FiTwitter style={style} size={30} />
                      </a>
                  </div>

                  <div className='mt-5 flex space-x-6 align-middle justify-between text-lg text-[#48487F] hover:text-[#4A4A59]'>

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
              </div>

              <div className='mx-auto'>
                  logo
              </div>

              <div className="mx-auto">
                  <div>
                      0726601941
                  </div>


                  <div className='mt-5 flex space-x-6 align-middle justify-between text-lg text-[#48487F] hover:text-[#4A4A59]'>

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

          <div className="  flex  justify-center">
<Image src={Hero} width="1400px" height="700px" className="mx-auto" alt="hero"/>
         
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <h1 className='text-7xl  font-medium my-5 text-[#48487F]' >
                      Ngozi  Africa
                  </h1>

                  <p className='text-center my-5 text-white text-4xl'>
                      Health Resort
                  </p>

                  <div className='flex justify-between align-middle gap-10 '>
                      <button className='bg-[#48487F]  px-10 py-3 text-white font-base rounded-sm' >

                          <Link href='/services'>
                              Services
                          </Link>
                      </button>

                      <button className='bg-[#48487F]  px-3 py-3 text-white font-base rounded-sm' >
                          <Link href='/appointments'>
                              Make Appointment
                          </Link>
                      </button>
                  </div>
              </div>

           
          </div>

          <div className='mt-10 top-3/4  w-full bg-white opacity-80 h-60 absolute shadow-lg shadow-cyan-500/50'>

              <div className='mt-10 w-full flex flex-col md:flex-row justify-between align-middle '>
              <div className='flex justify-between align-middle gap-5 mx-auto' >
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
              <div className='flex justify-between align-middle gap-5 mx-auto'>
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
              <div className='flex justify-between align-middle gap-5 mx-auto'>
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
        
    </>
  
  )
}

export default Header