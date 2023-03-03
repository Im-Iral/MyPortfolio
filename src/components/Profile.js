import React from 'react'

function Profile(props) {
  return (
    <div className=''>
      <main className='px-20 py-6'>
        <div className='flex flex-col justify-center gap-[10px] h-[200px] items-start md:items-center'>
          <h1 className='text-sm font-mono'>Hi, am</h1>
          <h1 className='text-4xl font-mono text-orange-400 md:text-5xl md:text-black'>Mark Justine Iral</h1>
        </div>
        <div className='flex flex-col justify-center gap-[10px] h-[200px] items-start md:items-center'>
        <img src={require('./../img/mark.jpg')} alt="Profile" className='w-56 h-56 mx-auto object-cover transition-all duration-300 rounded-full cursor-pointer blur-sm hover:blur-none'/>
        </div>
      </main>
    </div>
  )
}

export default Profile