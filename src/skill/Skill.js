import React from 'react';
import './skill.css';
const Skill =()=>{
	return(

         <>
         <div className="container-fluid" id="skills">
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-md-7">
                        <h1 className="offset-md-1" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Our Skills</h1>
                        <img src="https://img.freepik.com/free-vector/teamwork-tiny-people-with-gears-cogwheels-team-partners-working-upgrade-repair-improving-skills-client-service-flat-vector-illustration-business-organization-cooperation-concept_74855-20950.jpg?w=900&t=st=1663739784~exp=1663740384~hmac=b12ab39591fbf5aec311498207dbe5eda57deff6ad84cd7ba010375ead734a9b" width="100%"  data-aos="fade-up"
     data-aos-duration="3000"/>
                    </div>
                    <div className="col-md-5 skils-bar"  data-aos="fade-left"
     data-aos-duration="3000">
                         <div className="mt-5 d-flex">
                           <div>
                              <label>HTML</label>
                           </div>
                           <div className="">
                              <progress className="bar" value="80" max="100"/>
                           </div>                         
                       
                         </div>
                         <div className="d-flex">
                           <div>
                              <label>CSS</label>
                           </div>
                           <div className="">
                              <progress className="bar-c" value="60" max="100"/>
                           </div>                         
                       
                         </div>
                         <div className=" d-flex">
                           <div>
                              <label>JAVASCRIPT</label>
                           </div>
                           <div className="">
                              <progress className="bar-j" value="50" max="100"/>
                           </div>                         
                         </div>
                         <div className=" d-flex">
                           <div>
                              <label>BOOTSTRAP</label>
                           </div>
                           <div className="">
                              <progress className="bar-b" value="70" max="100"/>
                           </div>                         
                       
                         </div>
                         <div className=" d-flex">
                           <div>
                              <label>REACT.JS</label>
                           </div>
                           <div className="">
                              <progress className="bar-r" value="50" max="100"/>
                           </div>                         
                       
                         </div>
                         <div className=" d-flex">
                           <div>
                              <label>C++</label>
                           </div>
                           <div className="">
                              <progress className="bar-cc" value="50" max="100"/>
                           </div>                         
                       
                         </div>
                         <div className=" d-flex">
                           <div>
                              <label>JAVA</label>
                           </div>
                           <div className="">
                              <progress className="bar-ja" value="60" max="100"/>
                           </div>                         
                       
                         </div>

                    </div>
                </div>
            </div>    
         </div>
         </>
		);
}
 export default Skill;