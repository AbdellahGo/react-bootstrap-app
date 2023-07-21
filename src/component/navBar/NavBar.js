import React from 'react'

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-dark navbar-dark fixed-top'>
      <div className='container'>
        <a href='#' className='navbar-brand fs-4 fw-bold text-light'>AXflash Bootcamp</a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#menu'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='menu'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li class="nav-item">
              <a class="nav-link" href="#learn">What You'll Learn</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#questions">Questions</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#instructors">Instructors</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar