import React, {useState} from 'react'
import { IconContext } from 'react-icons'
import Link from 'next/link'
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
          

              <div className="  flex  justify-center pt-20 md:pt-20 h-auto">
                  <Image src={Hero} width="1400px" height="750px" className="mt-10" alt="hero" />

                  <div className='absolute mt-20 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
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