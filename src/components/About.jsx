import ownersImg from '../assets/parras-PH.png'

const About = () => {
  return (
    <section id="sectionAbout" className="flex flex-col place-content-center lg:flex-row bg-[#BABCB0] *:my-5 *:lg:w-1/3">
        <div id="aboutDescription" className="flex flex-col place-content-center">
            <h2 className='mx-auto text-4xl font-bebas w-1/2 text-center'>Who we are</h2>
            <p className="text-center text-lg w-2/3 mx-auto lg:block lg:w-96 lg:mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, itaque! A voluptatibus deserunt rem nam beatae, optio accusamus repellat quo ut qui ipsa sint ullam dolores. Maxime tempora sint expedita!</p>
        </div>
        <div id="ownerPhoto" className="flex justify-center">
            <img src={ownersImg} alt="Photo of Owners Kal-El and Sabina Parra"/>
        </div>
    </section>
  )
}

export default About
