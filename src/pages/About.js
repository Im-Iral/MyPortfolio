import React from 'react'
import MainLayout from '../layout/MainLayout'


function About() {
  return (
    <MainLayout>
        <div className='flex flex-col justify-center gap-[10px] h-[200px] items-start md:items-center'>
          <h1 className='text-sm font-mono'>Hi, About Me?</h1>
          <h1 className='text-4xl font-mono text-orange-400 md:text-5xl md:text-black'>I Don't have Identity.</h1>
        </div>
    </MainLayout>
  )
}

export default About