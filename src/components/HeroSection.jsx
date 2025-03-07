import React from 'react'
import { useModal } from '../Context';

const HeroSection = () => {
    const { showModal, onOpen, onClose } = useModal();
    return (
        <section className='bg-[#F5F7FA]  lg::h-[70vh] sm:flex justify-around '>

            <div className="left mb-15 sm:my-auto">
                <h2>Lessons and insights <br /><span className='text-[#4CAF4F]'>from 8 years</span></h2>
                <p className='w-85 sm:w-full my-5'>Where to grow your business as a photographer: site or social media?</p>
                <button onClick={onOpen}>Register</button>
            </div>

            <div className="right flex items-center">
                <img src="./hero.png" alt="" />
            </div>
        </section>
    )
}

export default HeroSection
