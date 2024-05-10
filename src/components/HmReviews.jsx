import Review from "../components/Review"

const HmReviews = () => {
  // wherever this actual data is stored, consider creating list twice for carousel purposes
const revPhs = ['Erre','David','Isaiah','Kiana','Alina','Danielle','James','Qwantese','Xavier','Nanama']

  return (
    <div id="sectionReviews" className="flex flex-col bg-[#BABCB0] pb-5 h-60">
        <div id="reviewsDescription" className="flex flex-col place-content-center mt-5">
            <h2 className="text-4xl text-center w-4/5 mx-auto font-bebas">Customer Reviews</h2>
        </div>
        <div id="scrollContainer" className="my-3 overflow-hidden">
            <div id="revCards" className="h-74 p-1 pb-3 relative grid grid-flow-col grid-cols-1 justify-items-stretch animate-infScrollLft snap-x *:mx-5">
                {revPhs.map((cust,i)=><Review key={i} name={cust}/>)}
                {revPhs.map((cust,i)=><Review key={`dup${i}`} name={cust}/>)}
            </div>
        </div>
    </div>
  )
}

export default HmReviews
