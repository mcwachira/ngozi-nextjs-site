import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Hero from '../assets/images/hero.jpg' 
import About from '../components/About'
import { RiFacebookFill } from 'react-icons/ri'
import { FiTwitter } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
import facial from '../assets/images/facial.jpeg'
import body from '../assets/images/bodymassage-4.jpeg'
import refine from '../assets/images/bodymassage.jpeg'
import { galleryPhotos } from '../data/services'


const style = { color: '#000' }
const AboutPage = () => {
  return (
    <div>




      <div className="  flex  justify-center pt-20 md:pt-20 h-auto bg-black">
        <Image src={Hero} width="1400px" height="750px" className="mt-10 bg-black opacity-50" alt="hero" />

        <div className='absolute  md:block mt-20 sm:md-40 md:mt-20 top:1/2 left:1/2 md:top-1/2 md:left-1/4 md:-translate-x-1/4 -translate-y-1/2 px-40 -mx-10 w-3/4'>
          <h1 className='text-xl md:text-3xl  lg:text-4xl text-left my-5 text-white font-bold' >
            About Us
          </h1>

          <p className='text-left my-5 text-white text-lg md:text-xl lg:text-2xl py-5 '>
            We offer the best massage services out our various location in diani.
          </p>

          <div className='flex  justify-between items-center gap-10 '>
            <button className='bg-[#d05c14] text-base  md:text-lg  px-4  md:px-10 py-1 md:py-3 text-white font-base rounded-[22px]' >

              <Link href='/services'>
                Learn More
              </Link>
            </button>

         </div>
        </div>


      </div>


<About/>
<div className='my-20'>


      <h3 className='text-3xl text-center font-semibold text-[#d05c14]' >    Our Therapy hub</h3>

      <div className=' flex flex-col gap-5'>
      
    
        <div className='self-center'>
    
        
            <p className='  text-lg my-5 pr-20 pl-20'>
              We offer high quality services to all our clients making you get the best out of your money
            </p>

            <div className="socials  self-center">
              <div className="flex justify-center  items-center gap-20 ">
                <a href="instagram.com" className='hover:bg-[#e95950] bg-[#FFECE7] rounded-full '>
                  <FaInstagram style={style} size={50} /></a>

                <a href="https://www.facebook.com/profile.php?id=100076251337953" className='hover:bg-[#00B6F1] bg-[#FFECE7] rounded-full '>
                  <RiFacebookFill style={style} size={50} />
                </a>
                <a href="facebook.com" className='hover:bg-[#00B6F1] bg-[#FFECE7] rounded-full '>
                  <FiTwitter style={style} size={50} />
                </a>
              </div>
            </div>
    
          
        </div>
   

     

       
</div>
  
      </div>
      <div className=' w-full pr-8 pl-8  mx-auto m-10 text-[#d05c14] bg-[#F6F5F5'>
        <h2 className='mt-5 text-center text-4xl font-bold'> Our Team </h2>
{/* 
        <div className="row flex mr-8 ml-8 flex=-wrap ">

        <div className='mt-10 w-full flex flex-col md:flex-row justify-between items-center '>

          <div className='flex justify-between flex-col items-center gap-5 mx-auto' >
            <div>
             
                <div className='bg-white shadow-lg px-20 py-10'>
                <Image src={facial} width='50px' height='50px' alt='facial massage' className='cursor-pointer rounded-full -mt-10' />

                  <h4 className='text-center text-xl'>
                    Founder
                  </h4>

                <h2 className='text-center text-3xl'>
                  Jane doe
                  </h2>

                </div>

            
            </div>
        
          </div>
          <div className='flex justify-between items-center gap-5 mx-auto flex-col'>

              <div className='bg-white shadow-lg px-20 py-10'>

             
                <Image src={body} width='200px' height='200px' alt='body massage' className='cursor-pointer  rounded-full ' />

            
            </div>

            <div>


              <h2 className='text-center mt-2 text-xl'>
                Body Therapy

              </h2>
            </div>
          </div>
          

          </div>

          <div>
          </div>

        </div> */}
</div>

      <div className='container mx-auto -my-60'>
        <h3 className='text-3xl text-center font-semibold text-[#d05c14] my-10' > 
          Gallery
        </h3>
        {galleryPhotos.map((photo) => console.log(photo))}
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>

          <Masonry gutter={'2rem'}>
            {galleryPhotos.map((photo, index) => (<img key={index} src={photo.src}  style={{ width: "100%", display: "block" }}alt='gallery photo' />))}
          </Masonry>
        </ResponsiveMasonry>

      </div>

    

    </div>
  )
}


export default AboutPage