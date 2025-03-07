import React from 'react'

const Community = () => {
  return (
    <section className='text-center'>
        <h2 className=''>Manage your entire community in a single system</h2>
        <h3>Who is Nextcent suitable for?</h3>
        <div className='sm:flex justify-between my-15 gap-5 sm:gap-10 lg:gap-40'>
            <CommunityBox image="./system1.png" title="Membership Organisations" desc="Our membership management software provides full automation of membership renewals and payments"/>
            <CommunityBox image="./system2.png" title="National Associations" desc="Our membership management software provides full automation of membership renewals and payments"/>
            <CommunityBox image="./system3.png" title="Clubs And Groups" desc="Our membership management software provides full automation of membership renewals and payments"/>
        </div>
    </section>
  )
}

export default Community

const CommunityBox = (props) => {
    return (
        <div className='flex flex-col items-center p-5 shadow rounded'>
           <img src={props.image} alt="" className='w-10' />
           <h3>{props.title}</h3> 
           <h4>{props.desc}</h4>
        </div>
    )
}