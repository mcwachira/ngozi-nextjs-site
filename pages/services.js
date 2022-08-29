import React from 'react'
import { About, Reviews, Services, Follow, Contact, Footer } from '../components'
import { OurServices } from '../components/pageComponents'
const services= () => {
    return (
        <div className='h-full'>
           
            
            <Follow />
            <Contact />
            <Footer />
            <OurServices />
        </div>
  
    )
}

export default services