import React from 'react'
import Image from 'next/image'
import 'leaflet/dist/leaflet.css';
import { About, Reviews, Services, Follow, Contact } from '../components'
import { ContactForm } from '../components/pageComponents'
import contactImage from '../assets/images/contact.jpg'
import LocationMap from '../components/LocationMap'

//importing my map as this too prevent server side rendering as to avoid the reference error window is not defined
const contact = () => {
    
    
    return (
        <div className='pt-60 mb-10 ' >

            <h1 className='text-5xl text-center font-semibold text-[#48487F]' >

            Contact Us
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-2 mx-auto'>

                <div className="lg:col-span-6 col-span-1 w-full max-w-md mx-auto">
                    <div className=" relative top-10 ">
                        <ContactForm />

                    </div>
                </div>
                <div className=" lg:col-span-6 col-span-1 mx-auto my-20 ">

                   <Image src={contactImage} width='500px' height='500px' alt='contact image'/>

                </div>
              

            </div>



            <Follow />
            <LocationMap/>

        </div>

    )
}

export default contact