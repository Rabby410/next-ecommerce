import React from 'react'
import Current from './components/current'
import Navbar from './components/common/header/navbar'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
   <>
   <Navbar />
   <Current/>
   </>
  )
}
