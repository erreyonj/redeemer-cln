import Services from "../components/Services"
import { Outlet } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"


const ServicesPg = () => {
  // Component Data
  const ourServices = ['Commercial', 'Move In/Out', 'Specialty']

  // Component Style
  // these function adds "slide out" animation classes to show appropraite service option
  const commSlideOut = () => {}
  const movingSlideOut = () => {}
  const specialtySlideOut = () => {}


  return (
    <>
      {/* <Services isPage /> */}
      <div id="selector" className="flex flex-col xl:mt-20 h-[750px] place-content-center">
          <p className="font-bebas text-5xl text-center mb-10">Which of our services can we offer you?</p>
          <div id="serviceTracks" className="flex place-content-center shadow-xl-inner">
            <button onClick={true}>
              <h2 className="font-bebas text-2xl mx-10 text-center">Commercial</h2>
            </button>
            <button>
              <h2 className="font-bebas text-2xl mx-10 text-center">Move In/Out</h2>
            </button>
            <button>
              <h2 className="font-bebas text-2xl mx-10 text-center">Specialty</h2>
            </button>
          </div>
        </div>
    </>
  )
}

export default ServicesPg
