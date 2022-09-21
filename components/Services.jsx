import React from 'react'
import Image from 'next/image'
import facial from '../assets/images/facial.jpg'
import body from '../assets/images/body.jpg'
import waxing from '../assets/images/waxing.jpg'

import MyLink from './Link'


const Services =  () => {

    return (

        <div className='mt-10 w-full flex flex-col md:flex-row justify-between items-center '>
            <div className='flex justify-between flex-col items-center gap-5 mx-auto' >
                <div>
                <MyLink href="/services">
        <Image src={facial} width='200px' height='200px' alt='facial massage' className='cursor-pointer rounded-full'/>
        
                </MyLink> 
                        </div>
                <div>
                    <h2 className='text-center mt-2 text-xl'>
                    Facial  Therapy
                 </h2>
                </div>
            </div>
            <div className='flex justify-between items-center gap-5 mx-auto flex-col'>
          
                    <div>

                        <MyLink href="/services">
                        <Image src={body} width='200px' height='200px' alt='body massage' className='cursor-pointer  rounded-full ' />
           
                        </MyLink> 
                                 </div>
             
                <div>
                 

                    <h2 className='text-center mt-2 text-xl'>
                      Body Therapy

                    </h2>
                </div>
            </div>
            <div className='flex justify-between items-center gap-5 mx-auto flex-col'>
                <div>
                  

        <MyLink href="/services" >
                        <Image src={waxing} width='200px' height='200px' alt='body' className='cursor-pointer  rounded-full' />
        </MyLink>
        
                </div>
                <div>
                    <h2 className='text-center mt-2 text-xl'>
                      Waxing
                    </h2>

                    
                </div>
            </div>

          

            <div>
            </div>

            </div>
    )
}

export default Services