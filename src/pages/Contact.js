import React from 'react'
import MainLayout from '../layout/MainLayout'

function Contact() {
  return (
    <MainLayout>
        <div>
            <div className='flex w-full justify-center items-center gap-[10px] h-[620px]'>
                <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-orange-100 w-full max-w-4xl 
                    p-8 sm:p-12 rounded-xl shadow-lg overflow-hidden'>
                    <div className='flex flex-col space-y-8 justify-between'>
                        <div>
                            <h1 className='font-bold text-4xl tracking-wide'>Contact Me</h1>
                            <p className='pt-2 text-sm'>
                                The Quick Brown Fox Jumps Over The Lazy Dog. 
                                The Quick Brown Fox Jumps Over The Lazy Dog.
                            </p>
                        </div>
                        <div className='flex flex-col space-y-6'>
                            <div className='inline-flex space-x-2 items-center'>
                                <ion-icon name="call-outline" className='text-xl'></ion-icon>
                                <span>+(68) 0968 294 3013</span>
                            </div>
                            <div className='inline-flex space-x-2 items-center'>
                                <ion-icon name="mail-outline" className='text-xl'></ion-icon>
                                <span>i-m.iral@hacktiv.io</span>
                            </div>
                            <div className='inline-flex space-x-2 items-center'>
                                <ion-icon name="pin-outline" className='text-xl'></ion-icon>
                                <span>Malagasang 1-f Imus City, Cavite</span>
                            </div>
                        </div>
                        <div className='flex space-x-4 text-lg'>
                            <a href='/'><ion-icon name="logo-facebook" className='text-xl'></ion-icon></a>
                            <a href='/'><ion-icon name="logo-instagram" className='text-xl'></ion-icon></a>
                        </div>
                    </div>
                    <div className='relative'>
                        {/** Circle for the top right*/}
                        <div className='absolute z-0 w-40 h-40 bg-black rounded-full -right-28 -top-28'/>
                        {/** Circle for the top right*/}
                        <div className='absolute z-0 w-40 h-40 bg-black rounded-full -left-28 -bottom-20'/>
                        {/** This is for the background the form.*/}
                        <div className='relative z-10 bg-white rounded-xl shadow-lg p-8 md:w-80'>
                            <form className='flex flex-col space-y-4'>
                                {/** For the Name*/}
                                <div>
                                    <label className='text-sm'>Your name</label>
                                    <input type='text' placeholder='Name Please...' 
                                    className='ring-1 ring-gray-300 w-full rounded-md mt-2 px-4 py-2 
                                    outline-none focus:ring-2 focus:ring-orange-400'/>
                                </div>
                                {/** For the Email*/}
                                <div>
                                    <label className='text-sm'>Email Address</label>
                                    <input type='email' placeholder='Email Please...' 
                                    className='ring-1 ring-gray-300 w-full rounded-md mt-2 px-4 py-2 
                                    outline-none focus:ring-2 focus:ring-orange-400'/>
                                </div>
                                {/** For the Description*/}
                                <div>
                                    <label className='text-sm'>Message</label>
                                    <textarea placeholder='Message Me...' 
                                    rows='3' className='ring-1 ring-gray-300 w-full rounded-md mt-2 px-4 py-2 
                                    outline-none focus:ring-2 focus:ring-orange-400'/>
                                </div>
                                {/** For the Button */}
                                <button className='inline-block self-end bg-orange-500 font-bold 
                                rounded-lg px-6 py-2 uppercase text-sm'>
                                    Send Message.
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default Contact