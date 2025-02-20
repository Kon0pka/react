import Header from './header'
import { Outlet } from React
import Footer from './footer'
import React from 'react'

const Layout = () => {
  return (
    <>
      <Header />
      <>
        <Outlet />
      </>
      <Footer />
    </>
  )
}

export default Layout