import React from 'react'
import {facialData, bodyData,waxingData, nailsData } from '../../data/services'
const OurServices = () => {

  return (

    <>
      <div>
     

      <div className='mt-10 mx-10'>
          <h1 className='text-3xl font-semibold text-[#48487F]' > Facials</h1>

      {facialData.map((data) => 
      (Object.entries((data)).map(([key, value] ) =>
       (
        <>
        
          <h1 className='mt-5 text-lg' key={key}>{key}  {value}</h1>
          
          
          
        </>
          ))))}
       
        </div>
    
        <div className='mt-10 mx-10'>
          <h1 className='text-3xl font-semibold text-[#48487F]' > Body Therapies</h1>

          {bodyData.map((data) =>
          (Object.entries((data)).map(([key, value]) =>
          (
            <>

              <h1 className='mt-5 text-lg' key={key}>{key}  {value}</h1>



            </>
          ))))}

        </div>
        <div className='mt-10 mx-10'>
          <h1 className='text-3xl font-semibold text-[#48487F]' > Waxing </h1>

          {waxingData.map((data) =>
          (Object.entries((data)).map(([key, value]) =>
          (
            <>

              <h1 className='mt-5 text-lg' key={key}>{key}  {value}</h1>



            </>
          ))))}

        </div>
        <div className='mt-10 mx-10'>
          <h1 className='text-3xl font-semibold text-[#48487F]' >Nails </h1>

          {waxingData.map((data) =>
          (Object.entries((data)).map(([key, value]) =>
          (
            <>

              <h1 className='mt-5 text-lg' key={key}>{key}  {value}</h1>



            </>
          ))))}

        </div>
     </div>
    </>
 
  )
}

export default OurServices 