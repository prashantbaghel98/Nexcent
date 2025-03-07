import React from 'react'

const Section7 = () => {
    return (
        <section className='bg-[#F5F7FA] flex flex-wrap justify-between'>
            <div className='sm:w-[40%] lg:[w-50%]' >
                <img src="./section7.png" alt="" className='w-100 ' />
            </div>

            <div className='sm:w-[50%] flex flex-col gap-5'>
                <p className=''>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>

                <div>
                    <h3 className='text-[#4CAF4F]'>Tim Smith</h3>
                    <p>British Dragon Boat Racing Association</p>
                </div>

                <div>
                    <img src="./section7a.png" alt="" />
                </div>
                <div>
                <button>Meet all customers</button>
                </div>
            </div>
        </section>
    )
}

export default Section7
