import React from 'react'
import img1 from '../imgs/poert1.png' 
import img2 from '../imgs/port2.png' 
import img3 from '../imgs/port3.png' 
export default function Portfolio() {
  return (
    <div className='portfolio-page py-5'>
         <div className="top text-center pb-4">
        <h1 className='p-0 m-0'>portfolio component</h1>
        <i className='fa-solid fa-star text-white'></i>
        </div>
        <div className="box container mt-5">
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
                <div className="inner rounded-3 overflow-hidden">
                    <img src={img1} className='w-100'  />
                    <div className="img-hover">
                     <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="inner rounded-3 overflow-hidden">
                    <img src={img2} className='w-100'  />
                    <div className="img-hover">
                     <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="inner rounded-3 overflow-hidden">
                    <img src={img3} className='w-100'  />
                    <div className="img-hover">
                     <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="inner rounded-3 overflow-hidden">
                    <img src={img1} className='w-100'  />
                    <div className="img-hover">
                     <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="inner rounded-3 overflow-hidden">
                    <img src={img2} className='w-100'  />
                    <div className="img-hover">
                     <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="inner rounded-3 overflow-hidden">
                    <img src={img3} className='w-100'  />
                    <div className="img-hover">
                     <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
          </div>
        </div>

      
    </div>
  )
}
