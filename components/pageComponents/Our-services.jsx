import React from 'react'
import { facialData, maternityData, BodyRetreatData, BodyRestoreData, BodyRefineData, BodyCouplesData, waxingData, nailsData } from '../../data/services'
import Image from 'next/image'
import facial from '../../assets/images/facial.jpeg'
import body from '../../assets/images/bodymassage-4.jpeg'
import refine from '../../assets/images/bodymassage.jpeg'
import back from '../../assets/images/bodymassage-2.jpeg'
import waxing from '../../assets/images/waxing.jpg'
import pregnancy from '../../assets/images/pregnancy-massage.jpg'
import { GiDeathStar } from 'react-icons/gi'

const OurServices = () => {

  return (

    <>
      <div>
     

      <div className='mt-10 mx-10'>
          <h1 className='text-3xl text-center font-semibold text-[   #d05c14]' > Facials</h1>
          <div className=' mt-8 flex  justify-center items-center'>
            <Image src={facial} width='500px' height='300px' alt='body massage' className='  rounded-md' />
          </div>
         

      {facialData.map((data , index) => 
      (Object.entries((data)).map(([key, value] ) =>
       (
        <>
        
          <div className='bg-white shadow-lg  my-10 py-5 px-5  w-full' key={index}>
            <h1 className='mt-5 text-lg font-bold' key={key}>{key}  </h1>
            <p>{value}</p>
        </div>
         
          
          
          
        </>
          ))))}
       
        </div>
    
        <div className='mt-10 mx-10'>
          <h1 className='text-3xl font-semibold text-[#d05c14]' > Body Therapies</h1>

          <div className=' mt-8 flex  justify-center items-center'>
            <Image src={body} width='500px' height='300px' alt='body massage' className='  rounded-md' />
          </div>

          <h2 className='text-3xl text-center mt-8 font-semibold text-[#d05c14]' >Retreat</h2>

            {
            BodyRetreatData.map((data, index) => data.map((d) => (Object.entries((d)).map(([key, value]) =>
              <>
                  <div className='bg-white shadow-lg  my-5 py-5 px-5  w-full' key={index}>
                  
                    <h3 className='mt-3 text-lg font-bold'> {key}</h3>
                  <p>{value}  </p>
                    </div>
                    </>
              ))
            )
            )
              }
      

        </div>


        <div className='mt-10 mx-10'>
          <h1 className='text-3xl font-semibold text-[#d05c14]' >Restore </h1>

          <div className=' mt-8 flex  justify-center items-center'>
            <Image src={back} width='500px' height='300px' alt='body massage' className='  rounded-md' />
          </div>



          {
            BodyRestoreData.map((data, index) => data.map((d) => (Object.entries((d)).map(([key, value]) =>
              <>
                <div className='bg-white shadow-lg  my-5 py-5 px-5  w-full' key={index}>

                  <h3 className='mt-3 text-lg font-bold'> {key}</h3>
                  <p>{value}  </p>
                </div>
              </>
            ))
            )
            )
          }


        </div>

        <div className='mt-10 mx-10'>
          <h1 className='text-3xl font-semibold text-[#d05c14]' >Refine </h1>

          <div className=' mt-8 flex  justify-center items-center'>
            <Image src={refine} width='500px' height='300px' alt='body massage' className='  rounded-md' />
          </div>


          {
            BodyRefineData.map((data, index) => data.map((d) => (Object.entries((d)).map(([key, value]) =>
              <>
                <div className='bg-white shadow-lg  my-5 py-5 px-5  w-full' key={index}>

                  <h3 className='mt-3 text-lg font-bold'> {key}</h3>
                  <p>{value}  </p>
                </div>
              </>
            ))
            )
            )
          }


        </div>


        <div className='mt-10 mx-10'>
          <h1 className='text-3xl font-semibold text-[#d05c14]' >Couples </h1>




          {
            BodyCouplesData.map((data, index) => data.map((d) => (Object.entries((d)).map(([key, value]) =>
              <>
                <div className='bg-white shadow-lg  my-5 py-5 px-5  w-full' key={index}>

                  <h3 className='mt-3 text-lg font-bold'> {key}</h3>
                  <p>{value}  </p>
                </div>
              </>
            ))
            )
            )
          }


        </div>

        <div className='mt-10 mx-10'>
          <h1 className='text-3xl font-semibold text-[#d05c14]' >SPECIALIZED MATERNITY BODY TREATMENTS</h1>

          <div className=' mt-8 flex  justify-center items-center'>
            <Image src={pregnancy} width='500px' height='300px' alt='body massage' className=' rounded-md' />
          </div>
          {maternityData.map((data, index) =>
          (Object.entries((data)).map(([key, value]) =>
          (
            <>

              <div className='bg-white shadow-lg  my-10 py-5 px-5  w-full' key="index">
                <h1 className='mt-5 text-lg font-bold' key={key}>{key}  </h1>
                <p> {value}</p>


              </div>



            </>
          ))))}

        </div>

 
        <div className='mt-10 mx-10'>
          <h1 className='text-3xl font-semibold text-[   #d05c14]' >Waxing  </h1>

          {waxingData.map((data , index) =>
          (Object.entries((data)).map(([key, value]) =>
          (
            <>

                          <div className=' w-full' key="index">
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