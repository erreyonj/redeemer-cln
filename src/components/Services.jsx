import ServiceCard from './ServiceCard'
import { useLocation } from 'react-router-dom'

const Services = (isPage) => {
    // Component Data
    const ourServices = ['Commercial', 'Move In/Out', 'Specialty']
    // const homeInfo = "Let us bring the sparkle back to your sanctuary! Choose from whole-home makeovers or targeted area touch-ups. We'll leave your home not just clean, but refreshed and rejuvenated."
    const commercialInfo = 'Your workplace is your second home. Let us maintain its charm with our reliable commercial cleaning services. From office spaces to retail stores, we tailor our approach to suit your business needs, fostering a clean and welcoming environment for all.'
    const moveingInfo = 'Moving can be chaotic, but your new beginning starts with a fresh space. Our thorough cleaning sweeps away the stress, ensuring your old or new place shines bright. Trust us to leave it immaculate for the next chapter of your journey.'
    const specialtyInfo = "Got a unique cleaning challenge? We've got the solution! From post-construction dust to pet hair pandemonium, our specialty cleaning tackles it all. Experience our personalized touch and let us transform your space into a pristine haven, tailored just for you."
    const serviceDescriptions = [commercialInfo,moveingInfo,specialtyInfo]


    // Component State
    const location = useLocation()
    const { hash, pathname, search } = location
    const currentPage = `${pathname}`

    // Component Styling
    // optional tailwind classes if this component is embed level or landing page level
    const pageClass = 'h-[450px] mt-20 flex flex-row place-content-center lg:mx- xl:h-[750px]'
    const notPageClass = 'h-[500px] lg:h-[550px] flex flex-col place-content-center md:my-5 lg:mx-10' 
    // returns a tailwind class for ordering elements on a page
    const second = () => 'order-2'
    const first = () => 'order-1'
    const hideMe = () => 'hidden'
    const showMe = () => 'block'


    // Component Functionality
    

    console.log(currentPage);

  return (
    <section id="sectionServices" className={currentPage==='/Services'?pageClass:notPageClass}>
        <div id="serviceDescription" className={`flex flex-col place-content-center my-2`}>
            <h2 className={`text-4xl text-black text-center font-bebas mx-3 ${currentPage==='/Services'? 'hidden': 'block'}`}>Our Services</h2>
            
            <p className="hidden md:block lg:w-1/2 md:mx-auto text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dignissimos, aliquid, recusandae pariatur obcaecati voluptate soluta aut eos dicta cupiditate eum ratione illo id. Officiis sequi eius cupiditate repudiandae quaerat.</p>
        </div>
        <div id="serviceCards" className={`h-[350px] md:w-[80] lg:w-[675px] md:h-[400px] p-5 ${(currentPage==='Services')&&first()} gap-5 flex flex-row place-content-between overflow-scroll lg:flex-nowrap snap-x *:mx-5  md:h-auto `}> {/* <-- maybe add shadow around cards here? shadow-slate-300 shadow-inner */}
            {ourServices.map((service,i)=><ServiceCard key={i} title={service} description={serviceDescriptions[i]}/>)}
        </div>
        <div id="screen" className={`hidden xl:block absolute top-[575px] left-[380px] xl:top-[620px] xl:left-[615px] h-[350px] xl:h-[415px]  w-28 bg-gradient-to-l to-transparent from-white`}> </div>
    </section>
  )
}

export default Services
