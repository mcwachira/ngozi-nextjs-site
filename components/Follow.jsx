import React from 'react'
import { RiFacebookFill } from 'react-icons/ri'
import { FiTwitter } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'


const style = { color: '#fff' }


const Follow = () => {
  return (
    <div className=" mt-10 w-full h-40 bg-[#48487F] 
    flex flex-col md:flex-row justify-between items-center">

      <div className='mx-auto my-auto'> 

<p className='text-4xl md:text-5xl text-white'>

Follow Ngozi  Africa
</p>
      </div>

      <div className="flex  items-center space-x-4 mx-auto my-auto  ">
        <a href="instagram.com" className='hover:bg-[#e95950]'>
        <FaInstagram style={style} size={50} /></a>

        <a href="facebook.com" className='hover:bg-[#00B6F1]'>
          <RiFacebookFill style={style} size={50} />
        </a>
        <a href="facebook.com" className='hover:bg-[#00B6F1]'>
          <FiTwitter style={style} size={50} />
        </a>
      </div>
    </div>
  )
}

export default Follow