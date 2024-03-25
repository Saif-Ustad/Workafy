import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <>
      <Navbar />
      <main className='auth'>{children}</main>
      <Footer />
    </>
    
  )
}

export default layout
