import React, { useState } from 'react'
import Image from 'next/image'
import { IconContext } from 'react-icons'
import Logo from '../assets/logo/ngozi-logo.png'
import Link from 'next/link'
import { RiFacebookFill } from 'react-icons/ri'
import { FiTwitter } from 'react-icons/fi'
import { FaInstagram, FaBars } from 'react-icons/fa'
import { AiOutlineCloseSquare } from 'react-icons/ai'



const style = { color: '#48487F' }

const Navbar = () => {

    const [sideNav, setSideNav] = useState(false)

    const showSideNav = () => setSideNav(!sideNav)
    // console.log(sideNav)
    return (

        <>
            <div className='relative'>


                <div className=' z-10 fixed w-full flex flex-col bg-white justify-between shadow-lg  
                p-8 md:pt-5'>

                    <div className='w-full flex  bg-white justify-between'>

                        <div className="flex  items-center space-x-4 mx-auto ">
                            <a href="instagram.com" className='hover:bg-[#e95950]'><FaInstagram style={style} size={30} /></a>

                            <a href="facebook.com" className='hover:bg-[#00B6F1]'>
                                <RiFacebookFill style={style} size={30} />
                            </a>
                            <a href="facebook.com" className='hover:bg-[#00B6F1]'>
                                <FiTwitter style={style} size={30} />
                            </a>
                        </div>

                        <div className='mx-auto'>
                            <Image src={Logo} alt='logo' width='100px' height='150px'/>
                        </div>

                        <div className="mx-auto">
                            <div>
                                0721 215653
                            </div>


                        </div>

                    </div>
                       <div className=' w-full hidden md:flex  bg-white justify-between flex-col md:flex-row '>

                        <div className='mt-5 flex space-x-6 items-center justify-between text-xl text-[#48487F] hover:text-[#4A4A59]  mx-auto'>

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
                        <div className='my-6 hidden md:flex  space-x-6 items-center justify-between text-xl text-[#48487F] hover:text-[#4A4A59] mx-auto'>

                            <Link href='/blog'>
                                Blog
                            </Link>
                            <Link href='/contact'>
                                Contact Us
                            </Link>

                            {/* <Link href='/appointments'>
                                Make  Appointment
                            </Link> */}
                        </div>
                    </div>


                    <div className='mt-5 flex md:hidden  '>
                        {
                            sideNav === true ? (<AiOutlineCloseSquare style={style} size={30} className='cursor-pointer' onClick={() => showSideNav()} />) : (<FaBars style={style} size={30} className='cursor-pointer' onClick={() => showSideNav()} />)
                        }


                        <div className='w-full  md:hidden '>
                            {/* <div className='absolute flex flex-col items-center self-end md:hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md
                           text-xl text-[#48487F] hover:text-[#4A4A59] '> */}

                            <div className={'absolute flex flex-col py-8 px-10 mt-10 space-y-6 font-bold text-xl bg-white text-[#48487f] hover:text-[#4a4a59] self-end sm:w-auto sm:self-center  left-6 right-6  drop-shadow-md ' + (sideNav ? 'flex' : 'hidden')}>

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

                    </div>
                 

                </div>



        

        </>

    )

                        }

    export default Navbar