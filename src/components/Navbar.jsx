import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
   <nav className="navbar navbar-expand-md fixed-top navbar-light py-4 ">
  <div className="container">
    <Link to={'/'} className="logo text-uppercase " >Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto gap-3 mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to={'/about'} className="nav-link" >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/portfolio'} >portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/contact'} >contact</NavLink>
        </li>
        
       
      </ul>
       
    </div>
  </div>
</nav>


  )
}
