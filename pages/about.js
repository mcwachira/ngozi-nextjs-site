import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Hero from '../assets/images/hero.jpg' 
import About from '../components/About'
import { RiFacebookFill } from 'react-icons/ri'
import { FaInstagram, FaTripadvisor } from 'react-icons/fa'
import facial from '../assets/images/facial.jpeg'
import body from '../assets/images/bodymassage-4.jpeg'
import refine from '../assets/images/bodymassage.jpeg'
import founder from '../assets/images/martha-img.png'
import { galleryPhotos } from '../data/services'


const style = { color: '#000' }
const AboutPage = () => {
  return (
    <div>




      <div className="  flex  justify-center pt-20 md:pt-20 h-auto bg-black">
        <Image src={Hero} width="1400px" height="750px" className="mt-10 bg-black opacity-50" alt="hero" />

        <div className='absolute w-full  mt-48 px-10   md:block md:mt-10  md:top-1/3 md:left-1/4 md:-translate-x-1/4 -translate-y-1/2  md:px-20 md:w-3/4'>
                    <h1 className='text-xl md:text-3xl  lg:text-4xl text-left my-5 text-white font-bold' >
            About Us
          </h1>

          <p className='text-left my-5 text-white text-lg md:text-xl lg:text-2xl py-5'>
          We are the best when it comes to offering holistic body therapies.
          </p>

          <div className='hidden sm:flex  justify-between items-center  md:gap-10 '>
            <button className='bg-[#d05c14] text-base  md:text-lg  px-4  md:px-10  py-2 md:py-3 text-white font-base rounded-[22px]' >


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
               
                <a href="https://en.tripadvisor.com.hk/Attraction_Review-g775870-d23796735-Reviews-Ngozi_Africa-Diani_Beach_Ukunda_Coast_Province.html" className='hover:bg-[#34E0A1]  rounded-full '>
                  <FaTripadvisor style={style} size={50} />
                </a>

              </div>
            </div>
    
          
        </div>
   

     

       
</div>
  
      </div>
      <div className=' w-full pr-8 pl-8  mx-auto m-10 bg-[#F6F5F5'>
      

        <div className="flex flex-col md:flex-row mx-auto gap-10 w-full">
    

          <div className="flex flex-col mx-auto w-full ">
            <h3 className='my-10 text-center text-4xl font-bold  text-[#d05c14]'> About Me </h3>
            <p className='text-black  items-center justify-center'>
            I  am a passionate and experienced aesthetician with over 10 years of experienced in the spa  industry providing body therapies.
            I enjoy being the bridge between people and their body therapy and skin care journey, providing them with quality solutions of care,
            adept in performing facial treatment ,diagnosing skin issues, treating acne , body therapy and hair waxing.
            </p>
            <p className='text-black'>
            My experience in the industry has taught me professionalism, working well with all kinds of  of personalities and in all kinds of situations while keeping the end result in mind.
            I take pride in my work and amd ensure that every customer transaction is an occasion , not a chore or just another transaction.          </p>

            
          </div>
          <div className="flex  w-full mx-auto  items-center justify-center">
            <Image src={founder} alt='founder ' width='300px' height='400px' />
          </div>
        </div>
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

"Ngozi Africa is a high-end health resort in Diani, KE. Our seasoned staff comprises certified therapists qualified in Complementary and alternative medicine (CAM). Book a quality experience and let us soothe your nervous system as well as improve your psychological condition. We also specialize in all-round body therapies, body scrub, reflexology, facials, foot and hand therapy ,deep tissue , aromatherapy , hollistic , swedish , ashiatsu , marternity treatment that's your whole body taken care of!"

export default AboutPage