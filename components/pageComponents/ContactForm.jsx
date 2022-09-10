import React from 'react'

const ContactForm = () => {
    return(
        <div className='w-full max-w-xl my-2 mx-auto flex-none relative bg-[#4B2610]'>


        <form id="contact" action="https://formsubmit.co/3801d72d81b553c61907efeb12c5c2d8 className=' w-full flex  items-center justify-center" method="post">
             
            <fieldset>
                    <input className="bg-white border-b-2 border-[#888]" placeholder="Your name" name="name" type="text" tabIndex="1" required autoFocus />
            </fieldset>
                <input className="bg-white border-[#888]" type="text" name="_honey" style={{ display: "none" }} />
            <fieldset>
                    <input className="bg-white border-b-2 border-[#888]" placeholder="Your Email Address" name="email" type="email" tabIndex="2" required />
            </fieldset>
            <fieldset>
                <input  className="border-b-2 border-[#888]" placeholder="Your Phone Number (optional)" name="phone number" type="tel" tabIndex="3" required />
            </fieldset>

            <fieldset>
                <textarea placeholder="Type your message here...." tabIndex="5" name="textarea" required></textarea>
            </fieldset>
            <fieldset>
                <input  className="border-b-2 border-[#888]" type="hidden" name="_next" value="https://www.fundikipusa.co.ke/thanks.html" />

                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Send</button>
            </fieldset>
        </form>
    </div>
  )
}

export default ContactForm



