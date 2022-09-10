import React from 'react'
import {facialData,maternityData,  bodyData,waxingData, nailsData } from '../../data/services'
const OurServices = () => {

  return (

    <>
      <div>
     

      <div className='mt-10 mx-10'>
          <h1 className='text-3xl font-semibold text-[#4B2610]' > Facials</h1>

      {facialData.map((data) => 
      (Object.entries((data)).map(([key, value] ) =>
       (
        <>
        
          <div className='bg-white shadow-lg  my-10 py-5 px-5  w-full'>
            <h1 className='mt-5 text-lg font-bold' key={key}>{key}  </h1>
            <p>{value}</p>
        </div>
         
          
          
          
        </>
          ))))}
       
        </div>
    
        <div className='mt-10 mx-10'>
          <h1 className='text-3xl font-semibold text-[#4B2610]' > Body Therapies</h1>

          {bodyData.map((data) =>
          (Object.entries((data)).map(([key, value]) =>
          (
            <>

               <div className='bg-white shadow-lg  my-10 py-5 px-5  w-full'>
            <h1 className='mt-5 text-lg font-bold' key={key}>{key}  </h1>
              <p> {value}</p>


</div>
            </>
          ))))}

        </div>

        <div className='mt-10 mx-10'>
          <h1 className='text-3xl font-semibold text-[#4B2610]' >SPECIALIZED MATERNITY BODY TREATMENTS</h1>

          {maternityData.map((data) =>
          (Object.entries((data)).map(([key, value]) =>
          (
            <>

              <div className='bg-white shadow-lg  my-10 py-5 px-5  w-full'>
                <h1 className='mt-5 text-lg font-bold' key={key}>{key}  </h1>
                <p> {value}</p>


              </div>



            </>
          ))))}

        </div>

        
        <div className='mt-10 mx-10'>
          <h1 className='text-3xl font-semibold text-[#4B2610]' > Waxing </h1>

          {waxingData.map((data) =>
          (Object.entries((data)).map(([key, value]) =>
          (
            <>

                          <div className='bg-white shadow-lg  my-10 py-5 px-5  w-full'>
            <h1 className='mt-5 text-lg font-bold' key={key}>{key}  </h1>
              <p> {value}</p>


</div>



            </>
          ))))}

        </div>
        <div className='mt-10 mx-10'>
          <h1 className='text-3xl font-semibold text-[#4B2610]' >Nails </h1>

          {waxingData.map((data) =>
          (Object.entries((data)).map(([key, value]) =>
          (
            <>

                          <div className='bg-white shadow-lg  my-10 py-5 px-5  w-full'>
            <h1 className='mt-5 text-lg font-bold' key={key}>{key}  </h1>
              <p> {value}</p>


</div>



            </>
          ))))}

        </div>
     </div>
    </>
 
  )
}

export default OurServices 