import React from 'react'
import { useModal } from '../Context'

const Section4 = () => {
    
    return (
        <>
        <section>

            <SectionLayout
                image="./section4.png"
                title="The unseen of spending three years at Pixelgrade"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
                btn="Learn More"
            />
        </section>
        </>
    )
}

export default Section4 



export const SectionLayout = (props) => {
    const { showModal, onOpen, onClose } = useModal();
    return (
        <div className='flex flex-wrap gap-5 justify-between'>
            <div className='mx-auto flex items-center'>
                <img src={props.image} alt="" className='sm:w-55 lg:w-95 '  />
            </div>
            <div className='sm:w-[50%] lg:p-15 flex flex-col gap-5 sm:gap-10'>
                <h2>{props.title}</h2>
                <h4>{props.desc}</h4>
                <button onClick={onOpen} className='w-[150px] mx-auto sm:mx-0'>{props.btn}</button>
            </div>
        </div>
    )
}