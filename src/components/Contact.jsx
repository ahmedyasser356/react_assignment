import React from 'react'

export default function Contact() {
  return (
    <div className='container contact-page py-5'>
      <div className="top text-center pb-4">
        <h1 className='p-0 m-0'>conatct section</h1>
        <i className='fa-solid fa-star text-white'></i>
        </div>
       <div className="col-md-8 col-12 mx-auto">
       <div className='contact-form gap-4 mt-5 d-flex flex-column '>
         <input type="text" className='' placeholder='userName'/>
         <input type="text" className='' placeholder='userAge'/>
         <input type="text" className='' placeholder='userEmail'/>
         <input type="text" className='' placeholder='userPassword'/>
        
        </div>
        <button className='mt-4'>send Message</button>
       </div>
       
    </div>
  )
}
