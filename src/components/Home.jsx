import React from 'react'
import homeImage from '../imgs/avataaars.svg'
export default function Home() {
  return (
    <div className='home-page  py-5'>
      <div className="container text-center">
        <div className="d-flex flex-column align-items-center">
        <img src={homeImage} className='home-image mb-5' alt="" />
        <div className="middle pb-4">
        <h1 className='p-0 m-0'>Start Framework</h1>
        <i className='fa-solid fa-star text-white'></i>
        </div>
        <p className='mt-4 text-white'>Graphic Artist - Web Designer - Illustrator</p>
        </div>

      </div>
    </div>
  )
}
