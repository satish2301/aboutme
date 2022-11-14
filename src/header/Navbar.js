import React from 'react';
import navbar from './navbar.css';
import { AiOutlineMenu,AiFillLinkedin,AiFillTwitterSquare,AiFillSkype } from 'react-icons/ai';
const Navbar = ()=>{

	return(
   <>

<div className="container-fluid">  
    
         <nav>
           <label className="logo">SATISH</label>
           <input type="checkbox" id="check"/>
           <label className="checkbtn" for="check"><AiOutlineMenu/></label>
           
           <ul>
              <li><a href="#intro">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#project">Project</a></li>
              <li><a href="#service">Service</a></li>
              <li><a href="#intro" className="button-85">Contact</a></li>

           </ul>
        </nav>
   </div>
   </>
		);
}

export default Navbar;