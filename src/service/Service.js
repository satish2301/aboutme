import React from 'react'
 import './service.css';
 import design from '../image/heartemoji.png';
const Service = () =>{
	return(

      <>
        <div className="container-fluid service-part" id="service">
            <div className="container-fluid">
            <div className="row justify-content-evenly">
                <div className="col-md-5">
                     <h1 className="s-left-heading" data-aos="fade-right" data-aos-duration="1000"
     data-aos-easing="ease-in-sine">My Awesome {<br/>}<span className="text-warning fw-bold">Service</span></h1>
                     <p className="fw-bold">I am awesome developer and i am provide good service </p>
                </div>
                <div className="col-md-3 second-card"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                     <div className="s-right-design">
                         <img src={design} className="design"/>
                         <h2 className="service-first">Design</h2>
                         <p className="service-first-data">Figma,Sketch,Photoshop, Adobe illustrator,Paint</p>
                     </div>
                </div>
                </div>
            </div> 
            <div className
                ="row">
                <div className="col-md-3 offset-md-4 service-second-card"  data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                     <div className="s-right-design">
                         <img src={design} className="design"/>
                         <h2 className="service-first">React</h2>
                         <p className="service-first-data ">Figma,Sketch,Photoshop, Adobe illustrator,Paint</p>
                     </div>
                </div> 

                <div className="col-md-3 mt-5 service-third-card"  data-aos="flip-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                     <div className="s-right-design">
                         <img src={design} className="design"/>
                         <h2 className="service-first">Developer</h2>
                         <p className="service-first-data">Figma,Sketch,Photoshop, Adobe illustrator,Paint</p>
                     </div>
                </div>   
            </div>
            <div className="row mt-5 ">
                <div className="col-md-1 offset-md-3 achive-card " data-aos="fade-right"
     data-aos-duration="2000">
                        <div className="card">
                        <p> 3+</p>
                        </div>
                       <p className="exper">Month{<br/>}Experience</p>
                </div>
               
                <div className="col-md-1 achive-card" data-aos="fade-up"
     data-aos-duration="2000">
                      <div className="card">
                        <p> 5+</p>
                        </div>
                       <p className="exper">Complete{<br/>}Project</p> 
                </div>
                 
                <div className="col-md-1 achive-card" data-aos="fade-right"
     data-aos-duration="2000">
                       <div className="card">
                        <p> 1+</p>
                        </div>
                       <p className="exper">Companies{<br/>}Work</p>
                </div>
               
            </div>
        
        </div>
     </>
		);
}

export default Service;