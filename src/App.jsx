import './App.css'
import Booking from './components/Layout/Booking'
import CompaniesSlider from './components/Layout/CompaniesSlider'
import Desination from './components/Layout/Desination'
import Footer from './components/Layout/Footer'
import HeroSection from './components/Layout/HeroSection'
import Navbar from './components/Layout/Navbar'
import Services from './components/Layout/Services'
import Testimonial from './components/Layout/Testimonial'

function App() {

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Services/>
    <Desination/>
    <Booking/>
    <Testimonial/>
    <CompaniesSlider/>
    <Footer/>
    </>
  )
}

export default App
