import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'
import NavResponsive from '~/hooks/Nav'
const PublicLayout = () => {
  return (
    <NavResponsive>
      <main className='flex flex-col justify-between h-full'>
        <Navigation/>
        <div className='mt-[100px]'>
          <Outlet/>
        </div>
        <Footer/>
      </main>
    </NavResponsive>
  )
}

export default PublicLayout