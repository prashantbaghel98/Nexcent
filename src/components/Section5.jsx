import React from 'react'

const Section5 = () => {
    return (
        <section className='flex flex-wrap gap-5 items-center bg-[#F5F7FA]'>
            <div className='sm:w-[40%] lg:w-[50%]'>
                <h2>Helping a local <br/> <span className='text-[#4CAF4F]'>business reinvent itself</span></h2>
                <h4>We reached here with our hard work and dedication</h4>
            </div>
            <div className='grid grid-cols-2 gap-10 sm:gap-20 justify-center sm:mx-auto'>
                <SectionLayout5 image="./Icon.png" number="2,245,341" category="Members" />
                <SectionLayout5 image="./Icon (1).png" number="2,245,341" category="Members" />
                <SectionLayout5 image="./Icon (3).png" number="2,245,341" category="Members" />
                <SectionLayout5 image="./Icon (4).png" number="2,245,341" category="Members" />
            </div> 
        </section>
    )
}

export default Section5


const SectionLayout5 = (props) => {
return(
    <div className='flex gap-5 items-center'>
        <div>
            <img src={props.image} alt="" />
        </div>
        <div>
            <h3>{props.number}</h3>
            <p>{props.category}</p>
        </div>
    </div>
)
}
