import React ,{usestate} from 'react';
import './App.css';
import Navbar from './header/Navbar.js';
import Intro from './introComponent/Intro.js';
import Service from './service/Service.js';
import Skill from './skill/Skill.js';
import Contact from './contactComponent/Contact.js';
import Project from './projectComponent/Project.js';
function App() {
  return (
    <>
     <Navbar />
     <Intro />
     <Service />
     <Skill />
     <Project />
     <Contact />
 </>
  );
}

export default App;
