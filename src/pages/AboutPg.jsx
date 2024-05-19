import theParras from '../assets/parras-PH-big-icon.png'

// Page Data
const tenets = ['Mission','Vision','Target/OurCustomer','Benefits/OurFaith']


// Page Functionality


const AboutPg = () => {

    
  return (
    <>
      <div id="aboutWrapper" className="flex flex-col md:flex-row xl:mt-20 h-[1200px]">
        <div id="aboutCore" className='my-20'>
            <img src={theParras} alt="" className='w-[350px] md:w-[400px] mx-auto'/>
            <p></p>
        </div>
        {/* This paragraph should fade in as you scroll */}
        <div id="parrasAbout" className='md:hidden my-16 mx-auto text-center px-5'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat non rem ullam ipsa vitae optio praesentium harum a nobis voluptates perspiciatis, reiciendis explicabo quisquam expedita quos iure vero maiores quidem laborum iusto accusantium provident iste. Voluptas deserunt magni aspernatur consectetur reprehenderit repudiandae nulla tempora! Velit facilis repellat veniam dolorum, quasi autem quisquam atque labore nihil aut animi eveniet totam eos beatae sapiente, exercitationem eius? Accusamus exercitationem, magni earum illo sit totam autem sint nihil maiores?</p>
        </div>
        <div id="aboutCarousel" className='mt-20'>
            {tenets.map((tenet,i)=><div key={i} className="companyTenet"><h2>{tenet}</h2><p></p></div>)}
        </div>
      </div>
    </>
  )
}

export default AboutPg
