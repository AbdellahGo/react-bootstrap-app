import React from 'react'
import img from '../../images/react.svg'
const ReactCourse = () => {
  return (
    <div className='ReactCourse py-5 text-center text-sm-start bg-dark text-light'>
      <div className='container'>
        <div className='row row-cols-lg-2 row-cols-1 align-items-center'>
          <div className='pe-lg-5 pe-0 mb-4 mb-lg-0'>
            <h4 className='fs-3'>Learn React</h4>
            <p className='fs-5 fw-medium'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
              deleniti possimus magnam corporis ratione facere!
            </p>
            <p className='fw-medium'>
              Lorem ipsum color sit, amer consectetur aclpisicing elt. cumque reicienais el
              autem eveniet mollitia, at asperiores suscipit que similique laboriosam iste mi
              placeat odit velit quos, nulla architecto amet voluptates?
            </p>
            <div className='btn btn-outline-light'>
              <i class="bi bi-chevron-right me-2"></i>
              <span>Read More</span>
            </div>
          </div>
          <div>
            <img className='img-fluid' src={img} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReactCourse