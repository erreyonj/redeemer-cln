import Services from "../components/Services"
import { Outlet } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"


const ServicesPg = () => {
  // Component Data
  const ourServices = ['Commercial', 'Move In/Out', 'Specialty']


  return (
    <>
      {/* <Services isPage /> */}
      <div id="selector" className="flex flex-col xl:mt-20 xl:h-[750px] place-content-center">
        <div className="flex flex-col place-content-center mx-auto">
          <p className="font-bebas text-5xl text-center mb-10">Which of our services can we offer you?</p>
          <div className="flex place-content-center shadow-xl-inner">
            {ourServices.map((service,index)=><h2 className="font-bebas text-2xl mx-10 text-center">{service}</h2>)}
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesPg
