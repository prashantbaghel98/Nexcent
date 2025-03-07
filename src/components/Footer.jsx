import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home'
Link

const Footer = () => {
    return (
        <div className="bg-[#263238] text-white p-5 flex flex-col gap-5 sm:flex-row  justify-between">
            <div className="web-info flex flex-col gap-5    ">
                <div className='flex items-center gap-2'>
                    <img src="./logo.png" alt="" className='' />
                    <h3>NEXCENT</h3>
                </div>

                <div>
                    <p>Copyright © 2020 Landify UI Kit.</p>
                    <p>All rights reserved</p>
                </div>

                <div className='flex gap-3'>
                    <img src="./yt.png" alt="" className="cursor-pointer" />
                    <img src="./twitter.png" alt="" className="cursor-pointer" />
                    <img src="./web.png" alt="" className="cursor-pointer" />
                    <img src="./insta.png" alt="" className="cursor-pointer" />
                </div>
            </div>

            <div className="company flex flex-col gap-5">
                <h3>Company</h3>
                <ul>
                    <Link to={Home}><li>About</li></Link>
                    <Link to={Home}><li>Blog</li></Link>
                    <Link to={Home}><li>Contact Us</li></Link>
                    <Link to={Home}><li>Pricing</li></Link>
                    <Link to={Home}><li>Testominals</li></Link>
                </ul>
            </div>

            <div className="Support flex flex-col gap-5">
                <h3>Support</h3>
                <ul>
                    <Link to={Home}><li>Help Center</li></Link>
                    <Link to={Home}><li>Terms Of Service</li></Link>
                    <Link to={Home}><li>Legal</li></Link>
                    <Link to={Home}><li>Privacy Policy</li></Link>
                    <Link to={Home}><li>Status</li></Link>
                </ul>
            </div>

            <div className="contact flex flex-col gap-5">
                <h3>Stay up to data</h3>
                <form action="" className='flex w-fit items-center gap-5 px-2 '>
                    <input type="email" name="email" placeholder='Enter Email Here' className='px-1' />
                    <img src="./send.png" alt="" className='cursor-pointer ' />
                </form>
            </div>



        </div>

    )
}

export default Footer
