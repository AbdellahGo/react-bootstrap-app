import React from 'react'
import img from '../../images/fundamentals.svg'
const Fundamentals = () => {
    return (
        <div className='Fundamentals py-5 text-center text-sm-start' id='learn'>
            <div className='container'>
                <div className='row row-cols-lg-2 row-cols-1 align-items-center'>
                    <div>
                        <img className='img-fluid' src={img} />
                    </div>
                    <div className='ps-lg-5 ps-0 mt-4 mt-lg-0'>
                        <h4 className='fs-3'>Learn The Fundamentals</h4>
                        <p className='fs-5 fw-medium'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
                            deleniti possimus magnam corporis ratione facere!
                        </p>
                        <p className='fw-medium'>
                            Lorem ipsum color sit, amer consectetur aclpisicing elt. cumque reicienais el
                            autem eveniet mollitia, at asperiores suscipit que similique laboriosam iste mi
                            placeat odit velit quos, nulla architecto amet voluptates?
                        </p>
                        <div className='btn btn-outline-secondary'>
                        <i class="bi bi-chevron-right me-2"></i>
                            <span>Read More</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fundamentals
