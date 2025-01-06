import React from 'react'
import Navbar from './Navbar'
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet></Outlet>
      <Footer/>
    </div>
  )
}
