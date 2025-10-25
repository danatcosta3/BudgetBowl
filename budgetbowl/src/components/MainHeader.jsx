import React from 'react'
import { Link } from 'react-router-dom'

function MainHeader() {
  return (
   <div className='bg-blue-300, w-full, h-10'>
    <Link to="/">
    <p className='text-black'>Budget<p className='text-prim-main-dark'>Bowl</p></p>
    </Link>
   </div>
  )
}

export default MainHeader
