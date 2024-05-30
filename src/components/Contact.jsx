const Contact = () => {
  return (
    <section id="sectionContact" className="flex flex-col lg:grid lg:grid-cols-50-50 bg-[#BABCB0]">
        <div id="contactDescription" className="flex flex-col place-content-center">
            <h2 className="mx-auto text-4xl font-bebas w-1/2 text-center">Contact Us</h2>
            <p className="hidden lg:block lg:w-96 lg:mx-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas doloribus, cupiditate labore consequatur, in recusandae necessitatibus, quidem quia a cum iure eaque reiciendis. Eius eaque nostrum eos. Alias, sequi?</p>
        </div>
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
