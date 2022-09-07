import React from 'react'
import Image from 'next/image'
import facial from '../assets/images/facial.png'
import body from '../assets/images/body.png'
import Link from 'next/link'


const Services =  () => {

    return (

        <div className='mt-20 w-full flex flex-col md:flex-row justify-between items-center '>
            <div className='flex justify-between flex-col items-center gap-5 mx-auto' >
                <div>
                <Link href="/services">
        <Image src={facial} width='150px' height='150px' alt='facial' className='cursor-pointer'/>
        
                </Link> 
                        </div>
                <div>
                    <h2 className='text-center mt-2 text-xl'>
                    Facial  Therapy
                 </h2>
                </div>
            </div>
            <div className='flex justify-between items-center gap-5 mx-auto flex-col'>
          
                    <div>

                        <Link href="/services">
        <Image src={body} width='150px' height='150px' alt='body' className='cursor-pointer ' />
           
                        </Link> 
                                 </div>
             
                <div>
                 

                    <h2 className='text-center mt-2 text-xl'>
                      Body Therapy

                    </h2>
                </div>
            </div>
            <div className='flex justify-between items-center gap-5 mx-auto flex-col'>
                <div>
                  

        <Link href="/services" >
                    <Image src={body} width='150px' height='150px' alt='body' className='cursor-pointer ]' />
        </Link>
        
                </div>
                <div>
                    <h2 className='text-center mt-2 text-xl'>
                      Waxing
                    </h2>

                    
                </div>
            </div>

            <div className='flex justify-between items-center gap-5 mx-auto flex-col'>
                <div>


        <Link href="/services">
                    <Image src={body} width='150px' height='150px' alt='body' className='cursor-pointer ' />
        </Link>
        
                </div>
                <div>
                    <h2 className='text-center mt-2 text-xl'>
                        Nails
                    </h2>


                </div>
            </div>

            <div>
            </div>

            </div>
    )
}

export default Services