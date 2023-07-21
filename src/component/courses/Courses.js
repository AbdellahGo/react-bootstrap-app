import React from 'react'

const Courses = () => {
    return (
        <div className='courses py-5 text-center'>
            <div className='container'>
                <div className='row row-cols-lg-3 row-cols-md-2 row-cols-1 row-gap-3'>
                    <div className='pe-lg-1'>
                        <div className='text-bg-dark p-3'>
                            <i class="bi bi-laptop h1 mb-3"></i>
                            <h4>Virtual</h4>
                            <p>
                                Lorem, ipsum dolar sit amat consectetur adipisicing
                                elit. lure, quas quidem possimus dolorum esse
                                eligendi?
                            </p>
                            <button className='btn btn-primary'>Read More</button>
                        </div>
                    </div>
                    <div className='pe-lg-1'>
                        <div className='bg-secondary text-light p-3'>
                            <i class="bi bi-person-square h1 mb-3"></i>
                            <h4>Hybrid</h4>
                            <p>
                                Lorem, ipsum dolar sit amat consectetur adipisicing
                                elit. lure, quas quidem possimus dolorum esse
                                eligendi?
                            </p>
                            <button className='btn btn-dark'>Read More</button>
                        </div>
                    </div>
                    <div className='pe-lg-1'>
                        <div className='text-bg-dark p-3'>
                            <i class="bi bi-people h1 mb-3"></i>
                            <h4>In Person</h4>
                            <p>
                                Lorem, ipsum dolar sit amat consectetur adipisicing
                                elit. lure, quas quidem possimus dolorum esse
                                eligendi?
                            </p>
                            <button className='btn btn-primary'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses