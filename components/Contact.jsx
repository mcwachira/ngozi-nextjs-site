import React from 'react'

const Contact = () => {
  return (
    <div className='md:w-1/2 w-full mx-auto my-10 mb-1'>
  
    
    
          <div className='my-10 mx-auto '>
              <h1 className='text-center text-3xl font-semibold my-2 mx -0'>
                  Write to Us 
              </h1>
              <form  className="flex flex-col my-1 mx-2"action="https://formsubmit.co/3801d72d81b553c61907efeb12c5c2d8" method="post">

                  <input type=" text" name="first-name" placeholder="Name" className='my-3 py-3 border-solid border-2 border-black text-xl' required
/>                      
                      <input type="text" name="_honey" style={{display:"none"}}/>

                          <input type="email" name="email" placeholder="Enter your Email" className='my-3 py-3 border-solid border-2 border-black text-xl' required />
                              

                              <input type="text" placeholder="Subject" name="subject" className='my-3 py-3 border-solid border-2 border-black text-xl' required />
                                  



                  <textarea name="textarea" cols="80" rows="5" id="body" placeholder=" Type your message here..." className='my-2 py-2 border-solid border-2 border-black text-xl'></textarea>

                                  <input type="hidden" name="_next" value="https://www.fundikipusa.co.ke/thanks.html"/>
          <input type="submit" className='-my-8 bg-[#4B2610]  text-white cursor-pointer py-4 px-10 mx-auto' />
                                      
                                      
                                      
                                      
                                      </form>
                                  </div>
    </div>

  )
}

export default Contact