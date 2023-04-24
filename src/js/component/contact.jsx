import React from "react";
import { Link } from "react-router-dom";

//include images into your bundle

//create your first component
const Contact = () => {
  return (
    <div className="container">
      <div className="mb-2 mt-5 text-center text-sm-right">
        <Link className="my-2 mt-sm-5 " to="/form">
          <button className="btn btn-success btn-sm" type="button">
            Add new contact info
          </button>
        </Link>
      </div>

      <div className=" border border-2 rounded-3 ">

        <div className="card ">
          <ul className="list-group list-group-flush ">
            <li className="list-group-item border-2 p-2 border border-2 rounded-3 ">
              <div className="row">
                <div className="col-sm-4 col-md-3 col-lg-3 text-center ">
                  <img
                    src="https://picsum.photos/275/275?grayscale"
                    className="rounded-circle img-fluid"
                    alt="..."
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className="col-sm-8 col-md-9 col-lg-7 d-flex flex-column  ">
                  <div className=" py-2 mb-1">
                    <p className="h4 m-0">Reo Petersen</p>
                  </div>
                  <div className="">
                    <div className="my-1">
                      <i className="fa-solid fa-location-crosshairs fa-lg"></i>
                      <p className="fs-4 d-inline-block ms-2 mb-2">Address</p>
                    </div>
                    <div className="my-1">
                      <i className="fa-solid fa-mobile-screen-button fa-lg"></i>
                      <p className="fs-5 d-inline-block ms-2 mb-2">Phone</p>
                    </div>
                    <div className="my-1">
                      <i className="fa-solid fa-envelope-circle-check fa-lg"></i>
                      <p className="fs-6 d-inline-block ms-2 mb-2">Email</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-2 my-2 py-2">
                  <div className="col-6 col-sm-6 text-center d-inline-block px-1">
                    <button
                      className="btn btn-outline-black btn-sm mx-0 "
                      type="button"
                    >
                      <i className="fa-solid fa-pen fa-lg"></i>
                    </button>
                  </div>
                  <div className="col-6 col-sm-6 text-center d-inline-block px-1">
                    <button
                      className="btn btn-outline-black btn-sm mx-0 "
                      type="button"
                    >
                      <i className="fa-solid fa-trash fa-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
