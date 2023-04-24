import React from "react";
import { Link } from "react-router-dom";

//include images into your bundle

//create your first component
const Contact = () => {
  return (
    <>
      <div>
        <Link className="mb-2 mt-5 float-right" to="/form">
          <button className="btn btn-success " type="button">
            Add new contact info
          </button>
        </Link>
      </div>
      <div className=" border border-2 rounded-3 ">
        <div className="card ">
          <ul className="list-group list-group-flush ">
            <li className="list-group-item border-2 p-2 border border-2 rounded-3 ">
              <div className="row">
                <div className="col-3 text-center ">
                  <img
                    src="https://picsum.photos/500/500?grayscale"
                    className="rounded-circle"
                    alt="..."
                    style={{
                      maxWidth: "200px",
                      maxHeight: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className="col-7 d-flex flex-column  pl-0">
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
                <div className="col-2 my-2 py-2">
                  <div className="col-5 text-center d-inline-block px-1">
                    <button
                      className="btn btn-outline-black btn-sm mx-0 "
                      type="button"
                    >
                      <i className="fa-solid fa-pen fa-lg"></i>
                    </button>
                  </div>
                  <div className="col-5 text-center d-inline-block px-1">
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

            <li className="list-group-item border-2 p-2 border border-2 rounded-3 ">
              <div className="row">
                <div className="col-3 text-center ">
                  <img
                    src="https://picsum.photos/500/500?grayscale"
                    className="rounded-circle"
                    alt="..."
                    style={{
                      maxWidth: "200px",
                      maxHeight: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className="col-7 d-flex flex-column  pl-0">
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
                <div className="col-2 my-2 py-2">
                  <div className="col-5 text-center d-inline-block px-1">
                    <button
                      className="btn btn-outline-black btn-sm mx-0 "
                      type="button"
                    >
                      <i className="fa-solid fa-pen fa-lg"></i>
                    </button>
                  </div>
                  <div className="col-5 text-center d-inline-block px-1">
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
    </>
  );
};

export default Contact;
