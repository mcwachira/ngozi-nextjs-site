import React from 'react'
import { RiFacebookFill } from 'react-icons/ri'
import { FiTwitter } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
import Link from 'next/link'


const style = { color: '#fff' }
const Footer = () => {
  return (
    <div>

          <div className=" mt-20 w-full  bg-[#48487F]/80 
    flex flex-col md:flex-row justify-between align-middle text-white">

              <div className='flex justify-center align-middle text-3xl mx-auto my-10 md:my-auto' >
                  logo
              </div>

              <div className='flex flex-col justify-between align-middle my-10 mx-auto gap-10 md:gap-2'>


                  <div>
                      <h2 className='font-base text-3xl'>
                          Contact us
                      </h2>
                      </div>
                      <div>

                      <button className='bg-white text-[#48487F]  px-12 py-4 font-base text-xl rounded-md' >
                          <Link href='/appointments'>
                              Call Now
                          </Link>
                      </button>
                  </div>

                  <div>

                      <div className="flex  align-middle space-x-4   ">
                          <a href="instagram.com" className='hover:bg-[#e95950]'>
                              <FaInstagram style={style} size={30} /></a>

                          <a href="facebook.com" className='hover:bg-[#00B6F1]'>
                              <RiFacebookFill style={style} size={30} />
                          </a>
                          <a href="facebook.com" className='hover:bg-[#00B6F1]'>
                              <FiTwitter style={style} size={30} />
                          </a>
                      </div>
                  </div>

              </div>
              <div className='flex flex-col justify-between align-middle my-10 mx-auto gap-10 md:gap-2'>
                  <div>
                      <h2 className='font-base text-3xl'>
                          Address
                      </h2>
                  </div>



                  <div>

                      <button className='bg-white text-[#48487F]  px-12 py-4 font-base text-xl rounded-md' >
                          <Link href='/appointments'>
                              Get Locations
                          </Link>
                      </button>
                  </div>
                  <div>
                      <p className='text-xl'>
                          MH47+6R2 Diani Beach
                          Kenya
                      </p>
                  </div>

              </div>
              <div className='flex flex-col justify-between align-middle my-10 mx-auto gap-10 md:gap-2'>
                  <div>
                      <h2 className='font-base text-3xl mb-5'>
                          Opening Hours
                      </h2>
                  </div>

                  <div className='flex flex-col gap-1'>
                      <p>Mon:	8:30 am – 5:30 pm</p>
                      <p>Tue:	8:30 am – 5:30 pm</p>
                      <p>Wed:	8:30 am – 5:30 pm</p>
                      <p>Thu:	8:30 am – 5:30 pm</p>
                      <p>Fri:	8:30 am – 5:30 pm</p>
                      <p>Sat:	8:30 am – 5:30 pm</p>
                      <p>Sun:	closed </p>


                  </div>



              </div>

    </div>
     
          <div className='text-center bg-white h-10 mt-2  text-gray-600 text-2xl'>

              &copy;
              {new Date().getFullYear()} Copyright Ngozi Africa .
          </div>
    </div>
  )
}

export default Footer