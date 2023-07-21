import React from 'react'

const Footer = () => {
  return (
    <div className='footer py-5 text-center text-bg-dark'>
      <div className='container'>
        <div className='position-relative'>
          <p>
            Copyright &copy; 2023, <span className='text-primary'>Abdellah</span>,<span className=' text-warning'>AXflash Bootcamp</span>
          </p>
          <a href="#top" className='btn btn-outline-light rounded-circle position-absolute end-0' style={{'bottom': '-10px'}}>
            <span class="fas fa-arrow-up fs-4"></span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer