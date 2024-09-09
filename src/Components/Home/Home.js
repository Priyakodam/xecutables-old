import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero/Hero'
import AboutUs from './AboutUs/AboutUs'
import Products from './Products/Products'
import EngineeringServices from './EngineeringServices/EngineeringServices'
import ProfessionalServices from './ProfessionalServices/ProfessionalServices'
import ServiceMaintenance from './ServiceMaintenance/ServiceMaintenance'




const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Products />
      <EngineeringServices />
      <ProfessionalServices />
      <ServiceMaintenance />
    </div>
  )
}

export default Home