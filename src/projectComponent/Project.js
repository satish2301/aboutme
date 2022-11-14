import React from 'react';
import './project.css';
import resto from '../image/resto.png';
import tmu from '../image/tmu.png';
import mobile from '../image/mobile.png';
const Project =()=>{
	return(
        <>
        <div className="container-fluid"  id="project">
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <h1>MY PROJECT</h1>
                    </div>
                </div>
            </div>
        </div>
          <div className="w-50 container mt-4">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={resto} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className=" fw-bold text-primary">Restaurant</h5>
        <p className="text-primary fw-bold">My live project Restaurant online booking system</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={mobile} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="text-primary fw-bold">Mobile Website</h5>
        <p className="text-primary fw-bold">Client Project Mobile reparing system</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={tmu} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>TMU COLLEGE</h5>
        <p>My first website TEERTANKER MAHAVEER UNIVERSITY</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
        </>
		);
}
export default Project;