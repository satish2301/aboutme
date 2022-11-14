import React from 'react';
import { AiOutlineMenu,AiFillLinkedin,AiFillTwitterSquare,AiFillSkype } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import profile from '../image/profile.jpeg';
import Typewriter from 'typewriter-effect';
import intro from './intro.css';
import icon from '../image/glassesimoji.png';
import icon1 from '../image/crown.png';
const Intro = () =>{
	return(

      <>
   <div className="container-fluid mt-5" id="intro">
   
          <div className="row ">
                <div className="col-md-6 " data-aos="fade-right" data-aos-duration="2000"
     data-aos-easing="ease-in-sine">
                    <div className="i-left">
                      <h1 className="greet-heading">Hi! I am</h1>
                      <h1 className="name">Satish Chandra</h1>
                      <div className="text">
                         <Typewriter
                         options={{
                          autoStart:true,
                          loop:true,
                          delay:40,
                          strings:[
                             "Hello I am React-Developer",
                           " Hello I am Front End Developer",
                           " Hello I am Freelancer",
                          ],
                          }}
                          />
                      </div>
                      <p className="biodata">Frontend Developer with high level of experience in web desiging and development producting the form Quality work.</p>
                      <div>
                         <button className="button-85 hire-btn">Hire Me!</button>
                      </div>
                      <div className="icon-part">
                       <span className="icon"><a href="https://www.facebook.com/profile.php?id=100008538941241" target="_blank"><FaFacebookSquare/></a></span>
                       <span className="icon"><a href="linkedin.com/in/satish-chandra-a07aa623a" target="_blank"><AiFillLinkedin/></a></span>
                       <span className="icon"><a href="https://join.skype.com/invite/vsWtdh4oX04L" target="_blank"><AiFillSkype/></a></span>
                       <span className="icon"><a href="https://twitter.com/i/flow/login" target="_blank"><AiFillTwitterSquare/></a></span>
                      </div>
                      </div>
                </div>
                 <div className="col-md-6 text-center">
                      <img src={icon }className="iconemoji" data-aos="fade-right" data-aos-duration="3000"/>
                      <img src={profile} className="profile" data-aos="zoom-in-left"  data-aos-duration="3000"/>
                      
                      <div className="extracard" data-aos="fade-left" data-aos-duration="3000">
                         
                         <p>{<img src={icon1} className="crown"/>}Web development</p>
                      </div>
                      <div className="extracard1"  data-aos="fade-right" data-aos-duration="3000" >
                         
                         <p>{<img src={icon1} className="crown"/>}React Developer</p>
                      </div>
                </div>
               
          </div>
   
 </div>

      </>
		);
}

export default Intro;