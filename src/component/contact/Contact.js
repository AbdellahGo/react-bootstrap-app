import React from 'react'

const Contact = () => {
    return (
        <div className='contact py-5'>
            <div className='container'>
                <div className='row row-cols-lg-2 row-cols-1 align-items-center'>
                    <div className='contact-info'>
                        <h3 className='mb-4 fs-2 fw-bold text-center'>Contact Info</h3>
                        <ul className='list-group list-group-flush lead'>
                            <li className='list-group-item my-1 py-3 fw-bold'>Main Location: <span className='fw-normal'>50 Main st Boston MA</span></li>
                            <li className='list-group-item my-1 py-3 fw-bold'>Enrollment Phone: <span className='fw-normal'>(555) 555-5555</span></li>
                            <li className='list-group-item my-1 py-3 fw-bold'>Student Phone: <span className='fw-normal'>(333) 333-3333</span></li>
                            <li className='list-group-item my-1 py-3 fw-bold'>Enrollment Email: <span className='fw-normal'>(555) enroll@frontendbc.test</span></li>
                            <li className='list-group-item my-1 py-3 fw-bold'>Student Email: <span className='fw-normal'>student@frontendbc.test</span></li>
                        </ul>
                    </div>
                    <div className='card p-0 overflow-hidden map mt-lg-0 mt-4' style={{'height': '380px'}}>
                        <img className='img-fluid' src='https://img.freepik.com/free-vector/street-map-desing-with-catering-sector-pins_23-2147618798.jpg?size=626&ext=jpg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact






