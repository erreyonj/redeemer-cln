import plchldr from '../assets/cleancloset1.png'

const ServiceCard = ({title, description}) => {
  return (
    <div id={title} className="w-[400px] p-3 flex-shrink-0 shadow-md shadow-black bg-[#366067] rounded-md *:text-white first:animate-pendSlideR first:ml-16 last:animate-pendSlideL snap-center md:first:animate-none md:last:animate-none md:first:mx-auto md:mx-auto md:w-96">
        <img src={plchldr} alt="placeholder"/>
        <h2 className='text-3xl font-bebas mx-auto w-1/2 text-center'>{title}</h2>
        <p className='text-sm text-center'>{description}.</p>
    </div>
  )
}

export default ServiceCard
