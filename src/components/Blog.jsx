import React from 'react'
import { useModal } from '../Context'


const Blog = () => {
    
    return (
        <section className='text-center' id='blog'>
            <h3>Caring is the new marketing</h3>
            <p className='lg:mx-86'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>

            <div className='flex flex-wrap gap-25 sm:gap-16 lg:gap-5 sm:justify-center lg:justify-between my-5'>
            <BlogLayout image="./section8-1.png" title="Creating Streamlined Safeguarding Processes with OneRen" />
            <BlogLayout image="./section8-2.png" title="Creating Streamlined Safeguarding Processes with OneRen" />
            <BlogLayout image="./section8-3.png" title="Creating Streamlined Safeguarding Processes with OneRen" />
            </div>

        </section>
    )
}

export default Blog
 

const BlogLayout = (props) => {
    const { showModal, onOpen, onClose } = useModal();
    return (
        <div className='relative  '>
            <div>
                <img src={props.image} alt="" className='sm:w-75 lg:w-95 ' /> 
            </div>
            <div className='bg-[#F5F7FA] py-3 absolute -bottom-7.5 left-6.5 sm:left-9 lg:left-7.5 w-80 h-46 sm:w-55 lg:w-78 flex flex-col gap-5 text-center items-center justify-center shadow-lg rounded'>
                <h4 className=''>{props.title}</h4>
                <button onClick={onOpen} className='w-[150px]'><a href="#">Read More</a></button>
            </div>
        </div>
    )
}