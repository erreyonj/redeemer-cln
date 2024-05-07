const Contact = () => {
  return (
    <section id="sectionContact" className="flex flex-col lg:grid lg:grid-cols-50-50">
        <div id="contactDescription" className="flex flex-col place-content-center">
            <h2 className="mx-auto text-4xl font-bebas w-1/2 text-center">Contact Us</h2>
            <p className="hidden lg:block lg:w-96 lg:mx-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas doloribus, cupiditate labore consequatur, in recusandae necessitatibus, quidem quia a cum iure eaque reiciendis. Eius eaque nostrum eos. Alias, sequi?</p>
        </div>
        <div id="contactForm" className="">
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
    </section>
  )
}

export default Contact
