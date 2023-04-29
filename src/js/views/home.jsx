import React from "react";
import { Link } from "react-router-dom";

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <div className="px-3 my-4 bg-light rounded-3 text-center">
      <div className="container-fluid py-3">
        <h1 className="display-5 fw-bold my-3" id="title">
          Welcome My Contect List App!
        </h1>
        <p className="col-md-12 fs-4 mx-auto my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magni
          vel aliquid, natus laudantium a beatae adipisci ab quam soluta
          pariatur, blanditiis totam corrupti sint suscipit! Dolor nam
          perferendis voluptatibus.
        </p>
        <div>
          <Link to="/contact">
            <button
              className="btn btn-info text-white  float-center mt-5 mb-3 mx-1"
              type="button"
            >
              Goto Contact-List
            </button>
          </Link>
          <Link to="/form">
            <button
              className="btn btn-success  float-center mt-5 mb-3 mx-1"
              type="button"
            >
              Add new contact info
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
