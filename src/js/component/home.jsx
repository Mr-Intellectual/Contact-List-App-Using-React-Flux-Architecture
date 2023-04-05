import React from "react";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		// <div className="text-center">
		// 	<h1 className="text-center mt-5">Hello Rigo!</h1>
		// 	<p>
		// 		<img src={rigoImage} />
		// 	</p>
		// 	<a href="#" className="btn btn-success">
		// 		If you see this green button... bootstrap is working...
		// 	</a>
		// 	<p>
		// 		Made by{" "}
		// 		<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
		// 		love!
		// 	</p>
		// </div>

	<div className="px-3 my-4 bg-light rounded-3 text-center" >
        <div className="container-fluid py-3">
        <h1 className="display-5 fw-bold my-3" id="title">Welcome My Contect List App!</h1>
        <p className="col-md-12 fs-4 mx-auto my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magni vel aliquid, natus laudantium a beatae adipisci ab quam soluta pariatur, blanditiis totam corrupti sint suscipit! Dolor nam perferendis voluptatibus.
        </p>
        <button className="btn btn-primary btn-lg float-center mt-5 mb-3" type="button">
        Click Here Start Entering Into The ToDo List
        </button>
      </div>
    </div>
	);
};

export default Home;
