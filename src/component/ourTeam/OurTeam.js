import React from 'react'

const OurTeam = () => {
    return (
        <div className='our-team p-5 text-center bg-primary' id='instructors'>
            <div className='container'>
                <div className='text-light'>
                    <h2>Our Instructors</h2>
                    <p className='fw-light fs-5'>Our instructors all have 5+ years working as a web developer in the industry</p>
                </div>
                <div className='row row-cols-lg-4 row-cols-md-2 row-cols-1 row-gap-4 mt-5'>
                    <div>
                        <div className="card text-bg-light">
                            <img src='https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=399&q=80' className="rounded-circle mx-auto mt-3 mb-2" style={{ 'width': '100px', 'height': '100px', 'objectFit': 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title fs-4">John Doe</h5>
                                <p className="card-text fw-medium">
                                    Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                    Assumenda accusamus nobis sed
                                    cupiditate iusto? Quibusdam.
                                </p>
                                <ul className='ps-0 d-flex gap-3 justify-content-center'>
                                    <a href="#" className="card-link text-dark"><i class="fa-brands fs-5 mt-3 fa-facebook-f"></i></a>
                                    <a href="#" className="card-link text-dark"><i class="fa-brands fs-5 mt-3 fa-twitter"></i></a>
                                    <a href="#" className="card-link text-dark"><i class="fa-brands fs-5 mt-3 fa-linkedin-in"></i></a>
                                    <a href="#" className="card-link text-dark"><i class="fa-brands fs-5 mt-3 fa-instagram"></i></a>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card text-bg-light">
                            <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60' className="rounded-circle mx-auto mt-3 mb-2" style={{ 'width': '100px', 'height': '100px', 'objectFit': 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title fs-4">Jane Doe</h5>
                                <p className="card-text fw-medium">
                                    Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                    Assumenda accusamus nobis sed
                                    cupiditate iusto? Quibusdam.
                                </p>
                                <ul className='ps-0 d-flex gap-3 justify-content-center'>
                                    <a href="#" className="card-link text-dark"><i class="fa-brands fs-5 mt-3 fa-facebook-f"></i></a>
                                    <a href="#" className="card-link text-dark"><i class="fa-brands fs-5 mt-3 fa-twitter"></i></a>
                                    <a href="#" className="card-link text-dark"><i class="fa-brands fs-5 mt-3 fa-linkedin-in"></i></a>
                                    <a href="#" className="card-link text-dark"><i class="fa-brands fs-5 mt-3 fa-instagram"></i></a>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card text-bg-light">
                            <img src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60' className="rounded-circle mx-auto mt-3 mb-2" style={{ 'width': '100px', 'height': '100px', 'objectFit': 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title fs-4">Steve Smith</h5>
                                <p className="card-text fw-medium">
                                    Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                    Assumenda accusamus nobis sed
                                    cupiditate iusto? Quibusdam.
                                </p>
                                <ul className='ps-0 d-flex gap-3 justify-content-center'>
                                    <a href="#" className="card-link text-dark"><i class="fa-brands fs-5 mt-3 fa-facebook-f"></i></a>
                                    <a href="#" className="card-link text-dark"><i class="fa-brands fs-5 mt-3 fa-twitter"></i></a>
                                    <a href="#" className="card-link text-dark"><i class="fa-brands fs-5 mt-3 fa-linkedin-in"></i></a>
                                    <a href="#" className="card-link text-dark"><i class="fa-brands fs-5 mt-3 fa-instagram"></i></a>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card text-bg-light">
                            <img src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60' className="rounded-circle mx-auto mt-3 mb-2" style={{ 'width': '100px', 'height': '100px', 'objectFit': 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title fs-4">Sara Smith</h5>
                                <p className="card-text fw-medium">
                                    Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                    Assumenda accusamus nobis sed
                                    cupiditate iusto? Quibusdam.
                                </p>
                                <ul className='ps-0 d-flex gap-3 justify-content-center'>
                                    <a href="#" className="card-link text-dark"><i class="fa-brands fs-5 mt-3 fa-facebook-f"></i></a>
                                    <a href="#" className="card-link text-dark"><i class="fa-brands fs-5 mt-3 fa-twitter"></i></a>
                                    <a href="#" className="card-link text-dark"><i class="fa-brands fs-5 mt-3 fa-linkedin-in"></i></a>
                                    <a href="#" className="card-link text-dark"><i class="fa-brands fs-5 mt-3 fa-instagram"></i></a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam