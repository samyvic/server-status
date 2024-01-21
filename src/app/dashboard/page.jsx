'use client'
import React from 'react'
import Navbar from '../../components/navbar'
import Server from '../../components/server'

import {signOut} from 'next-auth/react'

export default function Dashboard() {

  return (
    <>
        <div className='dashboard w-full min-h-full flex flex-col justify-start items-start bg-slate-50'>
            <Navbar></Navbar>
            <div className="container my-36 mx-auto w-full">
            <h1 className='heading text-2xl text-center font-bold'>All System Operational</h1>
            
            <div className='servers-container w-full'>
              <Server></Server>
            </div>
            </div>
        </div>
    </>

  )
}
