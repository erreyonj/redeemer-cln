import React from 'react'
import theParras from '../assets/parras-PH-big-icon.png'

const ContactPg = () => {
  return (
    <>
        <div id="contactWrapper" className="flex flex-col md:flex-row mt-32 h-[750px]">
            <div id="contactCore" className='hidden md:block'>
                <img src={theParras} alt="" />
                <p></p>
            </div>

            <div>
                <h1 className='font-bebas text-center text-4xl my-10'>Drop Us A Line!</h1>
            </div>

            <div id="contactForm" className="mx-auto w-full p-3">
                <form action="" className="flex flex-col flex-wrap place-content-center *:w-full">
                    <div className="grid grid-cols-50-50 p-2 justify-between">
                        <div className="inputGroup flex flex-col">
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder="Full Name" className="border-t-0 border-l-0 border-r-0 border-black px-0"/>
                        </div>
                        <div className="inputGroup flex flex-col">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" placeholder="+1 555 555 5555" className="border-t-0 border-l-0 border-r-0 border-black px-0"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-50-50 p-2 justify-between">
                        <div className="inputGroup flex flex-col">
                            <label htmlFor="fname">Email</label>
                            <input type="email" placeholder="your@email.com" className="border-t-0 border-l-0 border-r-0 border-black px-0"/>
                        </div>
                        <div className="inputGroup flex flex-col">
                            <label htmlFor="fname">Service Request</label>
                            <input type="text" placeholder="Home, Commercial, etc..." className="border-t-0 border-l-0 border-r-0 border-black px-0"/>
                        </div>
                    </div>

                    <div className="flex flex-col p-2 justify-between">
                        <label htmlFor="">Message</label>
                        <textarea rows="4" placeholder="What's your project?" className="p-0"></textarea>
                    </div>

                    <button type="submit" className="btn">Send</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default ContactPg
