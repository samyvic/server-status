'use client'
import React from 'react'
import Button from '../../components/buttuon'
import Welcome from '../../components/welcome'
import Link from 'next/link'




export default function WelcomePage() {

  return (
    <>
        <div className="container flex flex-row items-center justify-center text-center
         h-screen w-full relative bg-slate-50 z-0">
            <div className="registerForm w-7/12 flex justify-center z-10">
            
                <form action="" className='w-5/6 shadow-2xl rounded py-20 bg-white flex flex-col items-center' style={{zIndex:"3"}}>
                    <h1 className="text-4xl">Welcome</h1>
                    <p className='text-gray-500 my-4'>Have an account to enter the status dashboard</p>
                   
                    <Link href="/register" className='w-3/4 border-solid border-white rounded m-2 p-4 text-white
                        bg-blue-600 hover:bg-blue-800 duration-500 '>
                        Register
                    </Link>
                    <Link href="/login" className='w-3/4 border-solid border-white rounded m-2 p-4 text-white
                        bg-blue-600 hover:bg-blue-800 duration-500'>
                        Login
                    </Link>
                    
                </form>

            </div>
            <Welcome></Welcome>
        </div>
    </>
  )
}
