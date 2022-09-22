import React, {useState} from 'react'

const Contact = () => {

  //state for the contact fields 
  const [fullName, setFullName] =useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

//form validation state
const [errors , setErrors] = useState({})

//setting button text on form submission
const [buttonText, setButtonText] = useState('send')

//error and successfully messages state
const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  //validating our form states

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;
    
    if (fullName.length <= 0) {
      tempErrors["fullName"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }

    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let isValidForm = handleValidation()

    if(isValidForm)  {
      setButtonText('Sending')

      const res = await fetch ('/api/sendgrid', {
        body: JSON.stringify({
          email:email,
          fullName:fullName,
          subject:subject,
          message:message,

        }),
        headers:{
          'Content-Type':'application/json'
        },
        method:'POST',

      });
      const {error} =  await res.json();
      if(error){
        console.log(error)
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return 
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
    
    console.log(fullName, email, subject, message);
  }

  return (
    <div className='md:w-1/2 w-full mx-auto my-10 mb-1'>
  
    
    
          <div className='my-10 mx-auto '>
              <h1 className='text-center text-3xl font-semibold my-2 mx -0'>
                  Write to Us 
              </h1>
              <form  className="flex flex-col my-1 mx-2"onSubmit={handleSubmit} method="post">

                  <input type=" text" name="fullName" placeholder="Full Name" className='my-3 py-3 border-solid border-2 border-black text-xl' required onChange={(e) => setFullName(e.target.value)}/>
                     
                      <input type="text" name="_honey" style={{display:"none"}}/>

                          <input type="email" name="email" placeholder="Enter your Email" className='my-3 py-3 border-solid border-2 border-black text-xl' required  onChange={(e) => setEmail(e.target.value)}/>
                              

                              <input type="text" placeholder="Subject" name="subject" className='my-3 py-3 border-solid border-2 border-black text-xl' required  onChange={(e) => setSubject(e.target.value)}/>
                                  



          <textarea name="textarea" cols="80" rows="5" id="body" placeholder=" Type your message here..." className='my-2 py-2 border-solid border-2 border-black text-xl ' required onChange={(e) => setMessage(e.target.value)}></textarea>

                              
          <button type="submit" className='-my-8 bg-[#d05c14]  text-white cursor-pointer py-4 px-10 mx-auto'>Send</button>
                                      
                                      
                                      
                                      
                                      </form>
                                  </div>
    </div>

  )
}

export default Contact