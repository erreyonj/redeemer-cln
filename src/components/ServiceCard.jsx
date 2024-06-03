import plchldr from '../assets/cleancloset1.png'
import { useLocation } from 'react-router-dom'




const ServiceCard = ({title, description}) => {

  // Component State
  const location = useLocation()
  const { hash, pathname, search } = location
  const currentPage = `${pathname}`

  return (
    <div id={title} className="w-[400px] h-[360px] lg:w-[450px] md:w-96 p-3 flex-shrink-0 shadow-md shadow-black bg-[#366067] rounded-md *:text-white snap-center md:last:animate-none md:first:ml-32 sericeCard">
        <img src={plchldr} alt="placeholder"/>
        <h2 className='text-3xl font-bebas mx-auto w-1/2 text-center'>{title}</h2>
        <p className='text-xs md:text-sm text-center'>{description}.</p>
    </div>
  )
}

export default ServiceCard
