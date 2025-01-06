import React from 'react'

export default function About() {
  return (
    <div className='about-page '>
       <div className="container py-5 ">
        <div className="about-box">
        <div className="title text-center text-white mt-5 pt-5">
        <h1 className='p-0 m-0 pb-4 text-uppercase' >about component</h1>
        <i className='fa-solid fa-star text-white'></i>
        </div>
        <div className="desc text-white px-5 my-5  row">
          <p className='col-md-6  '>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files 
            including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p className='col-md-6  mb-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML,
               CSS, and JavaScript as well as optional SASS stylesheets for easy customization</p>
        </div>
        </div>

       </div>
      
    </div>
  )
}
