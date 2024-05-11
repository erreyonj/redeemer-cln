import { useLocation } from "react-router-dom"




const Footer = () => {
    // Component State
    const location = useLocation()
    const { hash, pathname, search } = location
    const currentPage = `${pathname.slice(1)}`
    
    console.log(currentPage);

  return (
    <footer className={`flex bg-[#272C29] *:text-white relative bottom-[0px] h-60 justify-around`}>
        <div className="hidden md:flex md:flex-col md:place-content-center md:w-1/3">
            <h3 className="text-3xl font-bebas mx-auto">Another About</h3>
            <p className="text-center mx-auto mt-5 w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laborum cumque ipsum dolores atque debitis in dolorum aliquid enim eum.</p>
        </div>
        <div className="flex flex-col place-content-center w-1/3">
            <h3 className="text-3xl font-bebas mx-auto">Links</h3>
            <ul id="ftrLinkList" className="grid grid-cols-2 gap-x-10 w-40 mx-auto mt-5 *:text-lg *:mx-auto">
                <li><a>Home</a></li>
                <li><a>Services</a></li>
                <li><a>About</a></li>
                <li><a>Gallery</a></li>
                <li><a>Reviews</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
        <div className="flex flex-col place-content-center w-1/3">
            <h3 className="text-center">A Tag</h3>
        </div>
    </footer>
  )
}

export default Footer
