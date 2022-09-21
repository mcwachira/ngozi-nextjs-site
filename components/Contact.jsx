import React, {useState} from 'react'

const Contact = () => {

  const [name, setName] =useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")



  const handleSubmit = () => {
    
  }

  return (
    <div className='md:w-1/2 w-full mx-auto my-10 mb-1'>
  
    
    
          <div className='my-10 mx-auto '>
              <h1 className='text-center text-3xl font-semibold my-2 mx -0'>
                  Write to Us 
              </h1>
              <form  className="flex flex-col my-1 mx-2"onSubmit={handleSubmit} method="post">

                  <input type=" text" name="first-name" placeholder="Name" className='my-3 py-3 border-solid border-2 border-black text-xl' required onChange={(e) => setName(e.target.value)}/>
                     
                      <input type="text" name="_honey" style={{display:"none"}}/>

                          <input type="email" name="email" placeholder="Enter your Email" className='my-3 py-3 border-solid border-2 border-black text-xl' required  onChange={(e) => setEmail(e.target.value)}/>
                              

                              <input type="text" placeholder="Subject" name="subject" className='my-3 py-3 border-solid border-2 border-black text-xl' required  onChange={(e) => setSubject(e.target.value)}/>
                                  



                  <textarea name="textarea" cols="80" rows="5" id="body" placeholder=" Type your message here..." className='my-2 py-2 border-solid border-2 border-black text-xl ' onChange={(e) => setMessage(e.target.value)}></textarea>

                                  <input type="hidden" name="_next" value="https://www.fundikipusa.co.ke/thanks.html"/>
          <input type="submit" className='-my-8 bg-[   #d05c14]  text-white cursor-pointer py-4 px-10 mx-auto' />
                                      
                                      
                                      
                                      
                                      </form>
                                  </div>
    </div>

  )
}

export default Contact