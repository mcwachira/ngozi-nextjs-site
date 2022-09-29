import React from 'react'
import { RiFacebookFill } from 'react-icons/ri'
import { FaInstagram, FaTripadvisor } from 'react-icons/fa'
import Link from 'next/link'
import Logo from '../assets/logo/ngozi-logo.png'
import Image  from 'next/image'


const style = { color: '#fff' }
const Footer = () => {
  return (
    <div>

          <div className=" mt-20 w-full  bg-[#d05c14] 
    flex flex-col md:flex-row justify-between items-center text-white">

              <div className='flex justify-center items-center text-3xl mx-auto my-10 md:my-auto' >
                  <Image src={Logo} alt='logo' width='150px' height='150px' />
              </div>

              <div className='flex flex-col justify-between items-center my-10 mx-auto gap-10 md:gap-2'>


                  <div>
                    
                      </div>
                      <div>

                      <button className='bg-white text-black  px-12 py-4 font-base text-xl rounded-md' >
                          <Link href='/appointments'>
                              Call Now
                          </Link>
                      </button>
                  </div>

                  <div>

                      <div className="flex  items-center space-x-4  mt-5  ">
                          <a href="instagram.com" className='hover:bg-[rgb(233,89,80)]'>
                              <FaInstagram style={style} size={50} /></a>

                          <a href="https://www.facebook.com/profile.php?id=100076251337953" className='hover:bg-[#00B6F1] rounded-full '>
                              <RiFacebookFill style={style} size={50} />
                          </a>
                          <a href="https://en.tripadvisor.com.hk/Attraction_Review-g775870-d23796735-Reviews-Ngozi_Africa-Diani_Beach_Ukunda_Coast_Province.html" className='hover:bg-[#34E0A1]  rounded-full '>
                              <FaTripadvisor style={style} size={50} />
                          </a>
                    
                      </div>
                  </div>

              </div>
              <div className='flex flex-col justify-between items-center my-10 mx-auto gap-10 md:gap-2'>
                  {/* <div>
                      <h2 className='font-base text-3xl'>
                          Address
                      </h2>
                  </div> */}



                  <div>

                      <button className='bg-white text-black    px-12 py-4 font-base text-xl rounded-md' >
                          <a href='https://www.google.com/maps/dir//Ngozi+Africa/@-4.3444343,39.4945219,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x182f119b92e35819:0x1610b617d1a25b85!2m2!1d39.5645625!2d-4.3444375' target="_blank" rel="noreferrer" >
                              Get Locations
                          </a>
                      </button>
                  </div>
                  <div className='mt-5'>
                      <p className='text-xl '>
                          MH47+6R2 Diani Beach
                          Kenya
                      </p>
                  </div>

              </div>
              <div className='flex flex-col justify-between items-center my-10 mx-auto gap-10 md:gap-2'>
                  <div>
                      <h2 className='font-base text-3xl mb-5'>
                          Opening Hours
                      </h2>
                  </div>

                  <div className='flex flex-col gap-1'>
                      <p>Mon:	8:30 am – 6.00 pm</p>
                      <p>Tue:	8:30 am – 6.00 pm</p>
                      <p>Wed:	8:30 am – 6.00 pm</p>
                      <p>Thu:	8:30 am – 6.00 pm</p>
                      <p>Fri:	8:30 am – 6.00 pm</p>
                      <p>Sat:	8:30 am – 6.00 pm</p>
                      <p>Sun:	10:00 am– 6.00 pm</p>


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