import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout