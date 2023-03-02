import React from 'react'

function Profile() {
  return (
    <dix className='flex absolute top-20 m-10'>
        <h1 className='text-5xl text-orange-500 font-mono'>Mark Justine Iral</h1>

       <div className='flex absolute top-10 m-5'>
        <h3 className='text-xl text-orange-500 font-mono'>BSIT 4.2A</h3>
       </div>
       <div className='flex absolute top-20 m-5 '>
        <img className='h-20 w-full border rounded-lg' src='https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg' alt='pic'/>
       </div>
    </dix>
  )
}

export default Profile