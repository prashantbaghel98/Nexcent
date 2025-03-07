import { React, useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import OurClients from './components/OurClients'
import Community from './components/Community'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Section7 from './components/Section7'
import Blog from './components/Blog'
import Demo from './components/Demo'
import Footer from './components/Footer'
import Modal from './components/Modal'
import { useModal } from './Context'



const Home = () => {
  const { showModal, onOpen, onClose } = useModal();
  return (
    <>
    {showModal && <Modal/>}
      <Navbar />
      <HeroSection />
      <OurClients />
      <Community />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Blog />
      <Demo />
      <Footer />

    </>
  )
}

export default Home
