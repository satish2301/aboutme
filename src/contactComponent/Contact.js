import React from 'react';
import './contact.css';
const Contact =()=>{
	return(
      <>
       <div className="container-fluid" id="contact">
       <div className="container-fluid">
           <div className="container contact-main">
               <div className="row justify-content-evenly">
                   <div className="col-md-5 left" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                       <h1>Get in Touch</h1>
                       <h1 className="contact-heading">Contact me</h1>
                   </div>
                   <div className="col-md-5" data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                       <div class="mb-3">
                       <label for="exampleFormControlInput1" class="form-label">Name</label>
                       <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
                       <label for="exampleFormControlInput1" class="form-label">Email address</label>
                       <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                   </div>
                   <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Any message</label>
                       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                   </div>
                   <div class="col-auto">
                       <button type="submit" class=" button-85 w-25 btn-primary mb-3">Submit</button>
                   </div>
                   </div>
               </div>
           </div>
       </div>
       </div>
       <div className="container-fluid footer">
                 <div className="row">
                      <div class="col-md-12 mt-3 text-end" data-aos="fade-left" dat-aos-duration="2000">
                         <h1 className="name-heading">Satish Chandra</h1>
                         <h3>Mobile-Num:- 6397921573</h3>
                         <h4>webdevelopersatish@gmail.com</h4>
                      </div>
                 </div>
       </div>
      </>
		);
}

export default Contact;