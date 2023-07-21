import React from 'react'

const Questions = () => {
    return (
        <div className='questions py-5  '>
            <div className='container'>
                <h2 className='text-center mb-4'>Frequently Asked Questions</h2>
                <div class="accordion" id="accordionParent">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#Q1" aria-controls="Q1">
                                How much does it cost to attend?
                            </button>
                        </h2>
                        <div id="Q1" class="accordion-collapse collapse show">
                            <div class="accordion-body">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beata fuga animi distinctio perspiciatis adipisci velit maiores totam tempora accusamus modi explicabo
                                    accusantium consequatur, presentium rem quisquam molestias at quos vero. Officiis ad velit doloremque at. Dignissimos presentium necessitatibus natus corrupti cum
                                    consequatur aliquam! Minima molestias iure quam distinctio velit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Q2" aria-controls="Q2">
                                What do I need to Know?
                            </button>
                        </h2>
                        <div id="Q2" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beata fuga animi distinctio perspiciatis adipisci velit maiores totam tempora accusamus modi explicabo
                                    accusantium consequatur, presentium rem quisquam molestias at quos vero. Officiis ad velit doloremque at. Dignissimos presentium necessitatibus natus corrupti cum
                                    consequatur aliquam! Minima molestias iure quam distinctio velit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Q3" aria-controls="Q3">
                                How Do I sign up?
                            </button>
                        </h2>
                        <div id="Q3" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beata fuga animi distinctio perspiciatis adipisci velit maiores totam tempora accusamus modi explicabo
                                    accusantium consequatur, presentium rem quisquam molestias at quos vero. Officiis ad velit doloremque at. Dignissimos presentium necessitatibus natus corrupti cum
                                    consequatur aliquam! Minima molestias iure quam distinctio velit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Q4" aria-controls="Q4">
                                Do you help me find a job?
                            </button>
                        </h2>
                        <div id="Q4" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beata fuga animi distinctio perspiciatis adipisci velit maiores totam tempora accusamus modi explicabo
                                    accusantium consequatur, presentium rem quisquam molestias at quos vero. Officiis ad velit doloremque at. Dignissimos presentium necessitatibus natus corrupti cum
                                    consequatur aliquam! Minima molestias iure quam distinctio velit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions 