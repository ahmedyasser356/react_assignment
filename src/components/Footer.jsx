import React from 'react'

export default function Footer() {
  return (
    <footer className='pt-4'>
     <div className="container ">
        <div className="footer-box text-center text-white py-5 row g-4">
            <div className="col-md-4">
               <div className="inner px-md-1 px-5">
               <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
               </div>
            </div>
            <div className="col-md-4">
                <div className="inner px-md-1 px-5">
                <h3>AROUND THE WEB</h3>
                 <div className="icons d-flex gap-3 justify-content-center flex-wrap">
                    <i className='fa-brands icon fa-facebook'></i>
                    <i className='fa-brands icon fa-twitter'></i>
                    <i className='fa-brands icon fa-linkedin-in'></i>
                    <i className="fa-solid icon fa-globe"></i>
                 </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="inner px-md-1 px-5">
                    <h3>ABOUT FREELANCER</h3>
                 
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>

        </div>
     </div>
     <footer className='footer-footer py-3 text-center text-white'>
        <p className='mb-0'>Copyright © Your Website 2021</p>
     </footer>
      
    </footer>
  )
}
