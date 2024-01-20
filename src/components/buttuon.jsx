import React from 'react'

export default function Button(props) {
  return (
    <button className='w-3/4 border-solid border-white rounded m-2 p-4 text-white
     bg-blue-600 hover:bg-blue-800 duration-500'>{props.children}</button>
  )
}
