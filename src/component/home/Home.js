import React from 'react'
import img from '../../images/showcase.svg'
const Home = () => {
    return (
        <div className='home pt-5 text-center text-md-start bg-dark text-light' style={{'margin-top': '62px'}}>
            <div className='container'>
                <div className='row row-cols-lg-2 row-cols-1 align-items-center'>
                    <div>
                        <h2 className='mb-3'>Become a
                            <span className='ms-2 text-warning'>Web Developer</span>
                        </h2>
                        <p className='fs-6 fw-light'>
                            We focus on teaching our students the fundamentals of the latest and
                            greatest technologies to prepare them for their first dev role
                        </p>
                        <button className='btn btn-primary px-3 py-2' type='button' data-bs-toggle='modal' data-bs-target='#modal1'>Start The Enrollment</button>
                    </div>
                    <div className='modal fade text-dark' id='modal1' tabindex="-1">
                        <div className='modal-dialog'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <h2 className='modal-title fs-5'>Modal title</h2>
                                    <button className='btn-close' data-bs-dismiss='modal'></button>
                                </div>
                                <div className='modal-body'>
                                    <p>Fill out this form and we will get back to you</p>
                                    <form className='py-3'>
                                        <div class="mb-3">
                                            <label className='form-label' htmlFor='first'>First Name:</label>
                                            <input className='form-control' type='text' id='first' />
                                        </div>
                                        <div class="mb-3">
                                            <label className='form-label' htmlFor='first'>Last Name</label>
                                            <input className='form-control' type='text' id='last' />
                                        </div>
                                        <div class="mb-3">
                                            <label className='form-label' htmlFor='first'>Email:</label>
                                            <input className='form-control' type='text' id='email' />
                                        </div>
                                        <div class="mb-3">
                                            <label className='form-label' htmlFor='first'>Phone:</label>
                                            <input className='form-control' type='text' id='phone' />
                                        </div>
                                    </form>
                                </div>
                                <div className='modal-footer'>
                                    <button className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                                    <button className='btn btn-primary'>submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 mt-lg-0'>
                        <img className='img-fluid' src={img} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
