import { useState } from "react"
import {MdClose} from 'react-icons/md'




const Contact = () => {

// Component State
const [updateFormOpen, setUpdateFormOpen] = useState(false)
const [dateField, modifyDateField] = useState(false)

// Component Function


  return (
    <section id="sectionContact" className="flex flex-col lg:grid lg:grid-cols-50-50 bg-[#BABCB0]">

        {/* description div with conditional paragraph */}
        <div id="contactDescription" className="flex flex-col place-content-center">
            <h2 className="mx-auto my-3 text-4xl font-bebas w-1/2 text-center">Contact Us</h2>
            <p className="hidden lg:block lg:w-96 lg:mx-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas doloribus, cupiditate labore consequatur, in recusandae necessitatibus, quidem quia a cum iure eaque reiciendis. Eius eaque nostrum eos. Alias, sequi?</p>

            <div className="flex flex-col flex-wrap w-32 place-content-center relative top-[-3rem] left-[70%] lg:static lg:w-auto lg:mt-7">
                <p className="text-center w-28 text-xs my-1 lg:w-auto lg:text-xl">Need to modify your existing service?</p>
                <button className="h-4 w-20 mx-auto outline-none text-xs text-white text-center bg-[#8F9586] border-[#8F9586] rounded-md hover:bg-[#FF702A] transition-colors ease-in-out lg:h-10 lg:w-32 lg:text-base" onClick={()=>setUpdateFormOpen((prevState=>!prevState))}>Click Here!</button>
            </div>


                {/* update services form */}
            <div className={`${updateFormOpen ? '' : 'hidden'} absolute top-[1920px] md:top-auto left-[2px] z-10 md:left-20 bg-[#366067] w-[425px] md:w-[600px] rounded-md hover:opacity-100 transition ease-in-out duration-500 shadow-lg shadow-black`}>
                <h1 className="font-bebas text-4xl text-center text-white my-3">Update Services</h1>
                <button onClick={()=>setUpdateFormOpen((prevState=>!prevState))} className="relative w-5 top-[-3rem] left-[24rem] md:left-[35rem]">
                    <MdClose className='inline text-white' />
                </button>
                <form className="text-white">
                <div className="grid grid-cols-50-50 p-2 justify-between w-full">
                    <div className="inputGroup flex flex-col">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Full Name" className="border-none px-0 text-black"/>
                    </div>
                    <div className="inputGroup flex flex-col">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" placeholder="+1 555 555 5555" className="border-none px-0 text-black"/>
                    </div>
                </div>
                <div className="grid grid-cols-50-50 p-2 justify-between">
                    <div className="inputGroup flex flex-col">
                        <label htmlFor="fname">Email</label>
                        <input type="email" placeholder="your@email.com" className="border-none px-0 text-black"/>
                    </div>
                    <div className="inputGroup flex flex-col">
                        <label htmlFor="fname">Service Request</label>
                        <select type="text" placeholder="Home, Commercial, etc..." onSelectCapture={()=>modifyDateField((prevState=>!prevState))} className="border-none px-0 text-black">
                            <option value="">Services...</option>
                            <option value="Commercial">Commercial</option>
                            <option value="Move In/Out">Move In/Out</option>
                            <option value="Specialty">Specialty</option>
                        </select>
                        {/* form state ... working on conditionally rendering appropriate fields based on sleections, Malik mentioned this?*/}

                        <label htmlFor="fname" className={`${dateField ? 'APPEAR-ANI?' : 'hidden'}`}>New Dates</label>
                        <input type="date"className="text-black"/>
                    </div>
                </div>

                <div className="flex flex-col p-2 justify-between">
                    <label htmlFor="">Message</label>
                    <textarea rows="4" placeholder="What's the update to your project?" className="border-none p-0 text-black"></textarea>
                </div>

                <button className="flex place-content-center h-8 w-32 mx-auto my-3 outline-none text-white text-center bg-[#8F9586] border-[#8F9586] rounded-md hover:bg-[#FF702A] transition-colors ease-in-out">Send</button>
                </form>
            </div>
        </div>

        {/* original form */}
        <div id="contactForm" className="">
            <form action="" className="flex flex-col flex-wrap place-content-center">
                <div className="grid grid-cols-50-50 p-2 justify-between w-full">
                    <div className="inputGroup flex flex-col">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Full Name" className="border-none px-0"/>
                    </div>
                    <div className="inputGroup flex flex-col">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" placeholder="+1 555 555 5555" className="border-none px-0"/>
                    </div>
                </div>
                <div className="grid grid-cols-50-50 p-2 justify-between">
                    <div className="inputGroup flex flex-col">
                        <label htmlFor="fname">Email</label>
                        <input type="email" placeholder="your@email.com" className="border-none px-0"/>
                    </div>
                    <div className="inputGroup flex flex-col">
                        <label htmlFor="fname">Service Request</label>
                        <input type="text" placeholder="Home, Commercial, etc..." className="border-none px-0"/>
                    </div>
                </div>

                <div className="flex flex-col p-2 justify-between">
                    <label htmlFor="">Message</label>
                    <textarea rows="4" placeholder="What's your project?" className="border-none p-0"></textarea>
                </div>

                <button type="submit" className="h-8 w-32 mx-auto my-3 outline-none text-white text-center bg-[#8F9586] border-[#8F9586] rounded-md hover:bg-[#FF702A] transition-colors ease-in-out">Send</button>
            </form>
        </div>
    </section>
  )
}

export default Contact
