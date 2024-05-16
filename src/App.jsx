import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import HomePage from './pages/HomePage'
import ServicesPg from './pages/ServicesPg'
import MainLayout from './layouts/MainLayout'
import AboutPg from './pages/AboutPg'
import ContactPg from './pages/ContactPg'
import GalleryPg from './pages/GalleryPg'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <MainLayout/> }>
      <Route index element={ <HomePage/> }/>
      <Route path='/Services' element={ <ServicesPg/> }/>
      <Route path='/About' element={ <AboutPg/> }/>
      <Route path='/Gallery' element={ <GalleryPg/> }/>
      <Route path='/Contact' element={ <ContactPg/> }/>
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
