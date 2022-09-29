import React, {useState} from 'react'
import { IconContext } from 'react-icons'
import Link from 'next/link'
import { BsAlarm } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { GiSmartphone } from 'react-icons/gi'
import Image from 'next/image'
import Hero from '../assets/images/hero.jpg'


const style = { color:'   #d05c14'}

const Header = () => {

    const [sideNav , setSideNav] = useState(false)

    const showSideNav = () => setSideNav(!sideNav)
    console.log(sideNav)
  return (

    <>
    <div className='relative'>
          

              <div className="  flex  justify-center pt-20 md:pt-20 h-auto bg-black">
                  <Image src={Hero} width="1400px" height="750px" className="mt-10 bg-black opacity-50" alt="hero" />

                  <div className='absolute  md:block mt-20 sm:md-40 md:mt-20 top:1/2 left:1/2 md:top-1/3 md:left-1/4 md:-translate-x-1/4 -translate-y-1/2  px-40 -mx-20 w-3/4'>
                      <h1 className='text-xl md:text-3xl  lg:text-4xl text-left my-5 text-white font-bold' >
                          Ngozi  Africa
                      </h1>

                      <p className='text-left my-5 text-white text-lg md:text-xl lg:text-2xl py-5'>
                         We offer the best body therapy services out our two locations in  diani.
                      </p>

                      <div className='flex  justify-between items-center gap-10 '>
                          <button className='bg-[#d05c14] text-base  md:text-lg  px-4  md:px-10 py-1 md:py-3 text-white font-base rounded-[22px]' >

                              <Link href='/services'>
                                 Learn More
                              </Link>
                          </button>

                          {/* <button className='bg-[#d05c14] text-sm md:text-base px-1 md:px-3 py-1 md:py-2 text-white font-base rounded-sm' >
                              <Link href='/appointments'>
                                  Book Appointment
                              </Link>
                          </button> */}
                      </div>
                  </div>


              </div>

              <div className='md:-mt-40 md:top-3/4  w-full bg-white opacity-80 h-auto md:h-60  '>

                  <div className='mt-10 w-full flex flex-col gap-10 md:flex-row justify-between items-center mx-auto'>
                      <div className='mt-2 md:mt-10  flex basis-full  items-center gap-10 md:gap-5 mx-auto ' >
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
                      <div className='mt-2 md:mt-10 flex basis-full j items-center gap-10 md:gap-5 mx-auto'>
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
                      <div className='mt-2 md:mt-10 flex basis-full  items-center gap-10 md:gap-5 mx-auto'>
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