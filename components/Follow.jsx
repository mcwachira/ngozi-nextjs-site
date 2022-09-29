import React from 'react'
import { RiFacebookFill } from 'react-icons/ri'
import { FaTripadvisor } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


const style = { color: '#fff' }


const Follow = () => {
  return (
    <div className=" mt-10 w-full h-40 bg-[#d05c14] 
    flex flex-col md:flex-row justify-between items-center">

      <div className='mx-auto my-auto'> 

<p className='text-2xl md:text-4xl lg:text-5xl text-white'>

Follow Ngozi  Africa
</p>
      </div>

      <div className="flex  items-center space-x-4 mx-auto my-auto  ">
        <a href="https://www.facebook.com/profile.php?id=100076251337953" className='hover:bg-[#00B6F1] rounded-full '>
          <RiFacebookFill style={style} size={50} />
        </a>
        <a href="instagram.com" className='hover:bg-[#e95950]'>
        <FaInstagram style={style} size={50} /></a>

        <a href="https://en.tripadvisor.com.hk/Attraction_Review-g775870-d23796735-Reviews-Ngozi_Africa-Diani_Beach_Ukunda_Coast_Province.html" className='hover:bg-[#34E0A1]  rounded-full '>
          <FaTripadvisor style={style} size={50} />
        </a>

    
      </div>
    </div>
  )
}

export default Follow