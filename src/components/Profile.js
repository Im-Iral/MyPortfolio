import React from 'react'
import {TypeAnimation} from 'react-type-animation'

function Profile(props) {
  return (
    <div className=''>
      <main className='px-20 py-6'>
        <div className='flex flex-col justify-center gap-[10px] h-[200px] items-start md:items-center'>
          <h1 className='text-sm font-mono'>Hi, am</h1>
          <h1 className='text-4xl font-mono text-orange-400 md:text-5xl md:text-black'>Mark Justine Iral</h1>
          <TypeAnimation className='font-mono text-black md:text-orange-400'
            sequence={[
              'Noob Developer',
              2000,
              'Front End',
              2000,
              'Ballers',
              2000,
              'Dota godz',
              2000,
            ]}
            repeat={Infinity}
            cursor={true}
            style={{fontSize: '2em'}}
          />
        </div>
        <div className='flex flex-col justify-center gap-[10px] h-[200px]'>
        <img src={require('./../img/mark.jpg')} alt="Profile" className='w-56 h-56 mx-auto object-cover 
                transition-all duration-300 rounded-full cursor-pointer blur-sm hover:blur-none'/>
        </div>
      </main>
    </div>
  )
}

export default Profile