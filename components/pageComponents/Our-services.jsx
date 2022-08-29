import React from 'react'
import {facialData, bodyData,waxingData, nailsData } from '../../data/services'
const OurServices = () => {

  return (

    <>

    <h1>
      Our Services 
    </h1>
      <div className='mt-40'>
      {facialData.map((data) =>{
{Object.entries(data).forEach(([key, value ]) =>{
  
  console.log(key)
  
  
  return(
     <li key={key}>{key} : {value}</li>)
  
  })}
      })}


      </div>
    </>
 
  )
}

export default  OurServices