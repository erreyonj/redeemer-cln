import ServiceCard from './ServiceCard'

const Services = (isPage) => {
    const ourServices = ['Home', 'Commercial', 'Move In/Out', 'Specialty']
    const serviceDescriptions = ['',]

    // optional tailwind classes if this component is embed level or landing page level
    const pageClassName = 'flex mt-20 lg:grid-cols-70-30'
    const notPageClass = 'flex flex-col place-content-center lg:grid-cols-70-30' 

    // returns a tailwind class for ordering elements on a page
    const second = () => 'order-2'
    const first = () => 'order-1'

  return (
    <section id="sectionServices" className={isPage?pageClassName:notPageClass}>
        <div id="serviceDescription" className={`flex flex-col place-content-center my-5 ${isPage&&second()}`}>
            <h2 className='text-4xl text-black font-bebas mx-auto'>Our Services</h2>
            <p className="hidden md:block lg:w-[950px] md:mx-auto text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dignissimos, aliquid, recusandae pariatur obcaecati voluptate soluta aut eos dicta cupiditate eum ratione illo id. Officiis sequi eius cupiditate repudiandae quaerat.</p>
        </div>
        <div id="swipeContainer" className={`p-3 ${isPage&&first()}`}>
            <div id="serviceCards" className="h-96 py-5 md:px-18 lg:px-28 xl:px-96 gap-5 flex flex-row place-content-between overflow-scroll snap-x *:mx-5 md:grid md:grid-cols-2 md:h-auto">
                {ourServices.map((service,i)=><ServiceCard key={i} title={service}/>)}
            </div>
        </div>
    </section>
  )
}

export default Services
