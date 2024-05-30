import { useLocation } from "react-router-dom"
import { useState } from "react"
import {MdClose} from 'react-icons/md'
import { Link } from "react-router-dom"




const Footer = () => {
    // Component State
    const location = useLocation()
    const { hash, pathname, search } = location
    const currentPage = `${pathname.slice(1)}`
    const [employeeFormOpen, setEmployeeFormOpen] = useState(false)
    
    console.log(currentPage);

  return (
    <footer className={`flex bg-[#272C29] *:text-white relative bottom-[0px] h-60 justify-around`}>
        <div className="hidden md:flex md:flex-col md:place-content-center md:w-1/3">
            <h3 className="text-3xl font-bebas mx-auto">Another About</h3>
            <p className="text-center mx-auto mt-5 w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laborum cumque ipsum dolores atque debitis in dolorum aliquid enim eum.</p>
        </div>
        <div className="flex flex-col place-content-center w-1/3">
            <h3 className="text-3xl font-bebas mx-auto">Links</h3>
            <ul id="ftrLinkList" className="grid grid-cols-2 gap-x-10 w-40 mx-auto mt-5 *:text-lg *:mx-auto">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Services'>Services</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Gallery'>Gallery</Link></li>
                {/* <li><Link to='/'>Reviews</Link></li> */}
                <li><Link to='/Contact'>Contact</Link></li>
            </ul>
        </div>
        <div className="flex flex-col place-content-center w-1/3">

            <div className="flex flex-col flex-wrap w-32 font-bebas text-3xl place-content-center top-[-3rem] lg:static lg:w-auto lg:mt-7">
                {/* <p className="text-center w-28 text-xs my-1 lg:w-auto lg:text-xl">Need to modify your existing service?</p> */}
                <button className="" onClick={()=>setEmployeeFormOpen((prevState=>!prevState))}>Join Our Team!</button>
            </div>

            <div id="newEmployeeForm" className={`${employeeFormOpen ? '' : 'hidden'} relative bottom-36 right-[17.5rem] md:top-auto md:right-[125%] z-10 bg-[#366067] w-[475px] md:w-[600px] rounded-md hover:opacity-100 transition ease-in-out duration-500 shadow-lg shadow-black`}>
                <h1 className="font-bebas text-4xl text-center text-white my-3">Join Our Team</h1>
                <button onClick={()=>setEmployeeFormOpen((prevState=>!prevState))} className="relative w-5 top-[-3rem] left-[27rem] md:left-[35rem]">
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
                        <input type="text" placeholder="Home, Commercial, etc..." className="border-none px-0 text-black"/>
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
    </footer>
  )
}

export default Footer
