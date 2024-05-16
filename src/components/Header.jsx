import React from 'react'
import logoImg from '../assets/logo-swipe-blue.png'
import {FaBars} from 'react-icons/fa'
import {MdClose} from 'react-icons/md'
import {MdFacebook} from 'react-icons/md'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import { useState } from 'react'
import { Link , useLocation }  from 'react-router-dom'

const Header = () => {
    // Component Data
    const navPages = ['Services','About','Gallery','Contact']
    
    // Component Function
    const renderMenuLinks = () => navPages.map((page,i)=><Link key={i} to={`/${page}`} onClick={()=> setHeaderMenuOpen((prevState)=>!prevState)} className='w-5/6 text-center font-bebas text-5xl my-5 mx-auto border-b border-white transition-text duration-150 hover:text-6xl'>{page}</Link>)

    // Component State
    const [headerMenuOpen, setHeaderMenuOpen] = useState(false)
    const location = useLocation()
    const { hash, pathname, search } = location
    const currentPage = `${pathname.slice(1)}`

    //Component Style
    const highlite = () => `bg-[#3B443F] shadow-inner shadow-zinc-900  duration-300`
    const lightable = () => `shadow-none transition-all hover:bg-[#3B443F] hover:shadow-inner hover:shadow-zinc-900  duration-300`


  return (
    <header id="header" className='fixed top-0 h-20 w-screen bg-[#272C29] text-white flex flex-row justify-between z-[3]'>
                <div id="burgerDiv" className="flex order-first lg:hidden">
                    <button onClick={()=> setHeaderMenuOpen((prevState)=>!prevState)} className="mx-10">
                        {headerMenuOpen ? <MdClose className='inline text-white' /> : <FaBars className='inline text-white'/>}
                    </button>
                    <div id="menu" className={`fixed bg-[#272C29] opacity-95 top-20 w-screen h-screen ${headerMenuOpen?'':'hidden'}`}>
                        <nav className="flex flex-col">
                            {headerMenuOpen && renderMenuLinks()}
                        </nav>
                    </div>
                </div>
                <nav id="headerNav" className="hidden lg:block">
                    <ul className='flex flex-row flex-nowrap flex-grow-0 place-content-center m-0 p-0 *:text-3xl'>
                        {navPages.map((page,i)=><li key={i} className={`flex flex-row flex-wrap place-content-center ${page === currentPage ?`bg-[#3B443F] shadow-inner shadow-zinc-900  duration-300` : `shadow-none transition-all hover:bg-[#3B443F] hover:shadow-inner hover:shadow-zinc-900  duration-300`}`}><Link to={`/${page}`} className='m-5'><h2 className='font-bebas'>{page}</h2></Link></li>)}
                    </ul>
                </nav>
                <div id="headerSocials" className="hidden lg:flex lg:flex-row *:text-2xl lg:*:self-center lg:gap-5 lg:mr-10">
                    <a><MdFacebook /></a>
                    <a><FaTwitter /></a>
                    <a><FaInstagram /></a>
                </div>
                <div id="headerLogoBox" className='order-last lg:order-first'>
                    <Link to='/' onClick={()=> setHeaderMenuOpen((prevState)=>prevState&&false)}><img src={ logoImg } alt="Reedemers Clean Logo" className='h-20'/></Link>
                </div>
    </header>
  )
}

export default Header
