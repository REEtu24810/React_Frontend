import React from 'react'
// import Home from './components/pages/Home';
import About from './components/pages/about';
import Navbar1 from './components/pages/Navbar1';
import Hero from './components/Hero/hero';
import About1 from './components/pages/about1';
import Our_Course from './components/pages/our_course';
import Discuss_page from './components/pages/discuss_page';


const App = () => {
  return (
    <div>
    <Navbar1/>
    <Hero/>
    <About/>
    <About1/>
    <Our_Course/>
    <Discuss_page/>
    
    
      {/* <Home></Home> */}
      
      
    </div>
  )
}

export default App