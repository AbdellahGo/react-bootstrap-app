import React from 'react'
import NavBar from './component/navBar/NavBar';
import Home from './component/home/Home';
import Form from './component/form/Form';
import Courses from './component/courses/Courses';
import Fundamentals from './component/fundamentals/Fundamentals';
import ReactCourse from './component/reactCourse/ReactCourse';
import Questions from './component/questions/Questions';
import OurTeam from './component/ourTeam/OurTeam';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
const App = () => {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Form/>
      <Courses/>
      <Fundamentals/>
      <ReactCourse/>
      <Questions/>
      <OurTeam/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
