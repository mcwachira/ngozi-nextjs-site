import React from 'react'
import { About, Reviews, Services, Follow, Contact } from '../components'
import { BookMassage, OurServices } from '../components/pageComponents'
const services= () => {
    return (
        <div className='pt-60 mb-10 ' >
           
            <h1 className='text-5xl text-center font-semibold text-[#48487F]' >

                Our Services
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 mx-auto'>
                <div className=" lg:col-span-6 col-span-1 mx-auto ">
                
                        <OurServices />
              
                </div>
                    <div className="lg:col-span-6 col-span-1 w-full max-w-md mx-auto">
                    <div className="lg:sticky relative top-10 lg:top-60">
                        <BookMassage />

                    </div>
                </div>
       
</div>
         
          
           
            <Follow />
            <Contact />
                  
        </div>
  
    )
}

export default services