import React, { useRef } from 'react'
import { X } from 'lucide-react';
import { ModalProvider, useModal } from '../Context';
const Modal = () => {
    const { showModal, onOpen, onClose } = useModal();

    const modalRef = useRef();

    const closeModal = (e)=>{
        if(modalRef.current === e.target){
            onClose()
        }
    }


    return (
        <div ref={modalRef} onClick={closeModal} className='fixed flex justify-center items-center inset-0 backdrop-blur-sm z-2 bg-opacity-30  '>
            <div className='w-95 h-100  '>
                <div onClick={onClose} className='flex justify-end py-2'><X /></div>
                <div className='bg-[#F5F7FA] p-5 rounded'>
                    <h3 className=" text-2xl font-semibold text-gray-800 mb-4">
                        Exclusive Offer Just for You!
                    </h3>
                    <p className="mb-6">
                        Register now and get 50% off your first purchase. Don’t miss out on this limited-time offer!
                    </p>

                    <div className=''>
                    <form action="/ " className='flex flex-col gap-5'>
                        <input className='w-full border-2 p-2' type="text" placeholder='Enter Name' />
                        <input className='w-full border-2 p-2' type="number" placeholder='Enter Mobile Number' />
                        <input className='w-full border-2 p-2' type="email" name="" id="" placeholder='Enter Email'/>
                        <button className='my-2'>Click Here</button>
                    </form>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
