import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    
  return (
    <>
    <div className='text-center m-3'>
      <Link href="/" className="btn btn-primary m-2 animated-link">Homepage</Link>
      <Link href="/" className="btn btn-success m-2 animated-link">About Us</Link>
      <Link href="/" className="btn btn-info m-2 animated-link">Contact Us</Link>
    </div>
    
    </>
    
  )
}
