import React from 'react'

const Form = () => {
    return (
        <div className='Form py-4  bg-primary text-light'>
            <div className='container'>
                <div className='row row-cols-lg-2 row-cols-1 align-items-center'>
                    <div>
                        <h3 className='fw-bold'>Sign Up For Our NewsLetter</h3>
                    </div>
                    <form>
                    <div class=" input-group mt-lg-0 mt-3">
                        <input type="text" class="form-control ps-3 p-2" placeholder='Enter Email' />
                        <button class="btn btn-dark w-25 p-2" type="button" id="button-addon2">Submit</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form