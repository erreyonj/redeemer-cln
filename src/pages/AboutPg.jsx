import bigIcon from '../assets/parras-PH-big-icon.png'

// Page Data
const tenets = ['Mission','Vision','Target/OurCustomer','Benefits/OurFaith']


// Page Functionality


const AboutPg = () => {

    
  return (
    <>
      <div id="aboutWrapper" className="flex flex-row xl:mt-20 xl:h-[705px]">
        <div id="aboutCore">
            <img src={bigIcon} alt="" />
            <p></p>
        </div>
        <div id="aboutCarousel">
            {tenets.map((tenet,i)=><div key={i} className="companyTenet"><h2>{tenet}</h2><p></p></div>)}
        </div>
      </div>
    </>
  )
}

export default AboutPg
