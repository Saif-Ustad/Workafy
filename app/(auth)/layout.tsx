import Footer from '@/components/HomePage/Footer'
import Navbar from '@/components/HomePage/Navbar'
import React from 'react'

const Layout = ({children}:{children: React.ReactNode}) => {
  return (
    <>
      <Navbar />
      <main className='auth'>{children}</main>
      <Footer />
    </>
    
  )
}

export default Layout
