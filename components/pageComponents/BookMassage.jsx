import React, {useState} from 'react'

const BookMassage = () => {
  //state for the contact fields 
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [ number, setNumber] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  //form validation state
  const [errors, setErrors] = useState({})

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

    if (isValidForm) {
      setButtonText('Sending')

      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: email,
          fullName: fullName,
          number:number,
          subject: subject,
          message: message,

        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',

      });
      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // Reset form fields
        setFullName("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFullName("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(fullName, email, subject, message);
  };

  return (

    <>
      <div className='w-full max-w-xl my-2 mx-auto flex-none relative bg-[#d05c14]'>

        <form id="contact" className=' w-full flex  flex-col items-center justify-center text-white' method="post" onSubmit={handleSubmit}>
        
          <h1 className='text-3xl  pt-5 text-center font-semibold text-white'>
            Book a Massage
          </h1>

          <fieldset>
            <input className='text-white' placeholder="full Name" name="full Name" type="text" tabIndex="1" required autoFocus onChange={(e) => setFullName(e.target.value)} />
          </fieldset>

          <fieldset>
            <input className='text-white' placeholder="Your Email Address" name="email" type="email" tabIndex="2" required onChange={(e) => setEmail(e.target.value)} />
          </fieldset>
          <fieldset>
            <input className='text-white' placeholder="Your Phone Number (optional)" name="phone number" type="tel" tabIndex="3" required onChange={(e) => setNumber(e.target.value)} />
          </fieldset>

          <fieldset>
            <input className='text-white' placeholder="subject" name="subject" type="text" tabIndex="1" required autoFocus onChange={(e) => setSubject(e.target.value)} />
          </fieldset>
          <fieldset>
            <textarea placeholder="Type your message here...." tabIndex="5" name="textarea" required onChange={(e) => setMessage(e.target.value)}></textarea>
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Send</button>
          </fieldset>
        </form>
        <div className="text-left">
          {showSuccessMessage && (
            <p className="text-white text-center font-semibold text-sm my-2">
              Thankyou! Your Message has been delivered.
            </p>
          )}
          {showFailureMessage && (
            <p className="text-black text-center font-bold">
              Oops! Something went wrong, please try again.
            </p>
          )}
        </div>
      </div>
    </>
    
 
  )
}

export default BookMassage