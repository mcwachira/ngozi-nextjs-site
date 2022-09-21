import React from 'react'

const BookMassage = () => {
  return (
    <div className='w-full max-w-xl my-8 mx-auto flex-none relative bg-[   #d05c14] '>

     
      <form id="contact" action="https://formsubmit.co/3801d72d81b553c61907efeb12c5c2d8   bg-[   #d05c14] className='w-full flex  items-center justify-center"  method="post">
        <h1 className='text-3xl  pt-5 text-center font-semibold text-white'>
      Book a Massage
        </h1>

        <fieldset>
          <input placeholder="Your name" name="name" type="text" tabIndex="1" required autoFocus/>
        </fieldset>
        <input type="text" name="_honey" style={{display:"none"}}/>
          <fieldset>
            <input placeholder="Your Email Address" name="email" type="email" tabIndex="2" required/>
          </fieldset>
          <fieldset>
            <input placeholder="Your Phone Number (optional)" name="phone number" type="tel" tabIndex="3" required/>
          </fieldset>

          <fieldset>
            <textarea placeholder="Type your message here...." tabIndex="5" name="textarea" required></textarea>
          </fieldset>
          <fieldset>
            <input type="hidden" name="_next" value="https://www.fundikipusa.co.ke/thanks.html"/>

              <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Send</button>
          </fieldset>
      </form>
   </div>
  )
}

export default BookMassage