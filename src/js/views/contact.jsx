import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

//create your first component
const Contact = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="">
      <div className="mb-2 mt-5 d-flex">
        {store.list.length !== 0 ? actions.ranContact() : ""}
        <div
          className={
            store.list.length !== 0 ? "col-6 text-end" : "col-12 text-end"
          }
        >
          <Link className="" to="/form">
            <button className="btn btn-success btn-sm" type="button">
              Add new contact info
            </button>
          </Link>
        </div>
      </div>

      <div className=" border border-0  ">
        <div className="card ">
          <ul className="list-group list-group-flush ">
            {store.list.length !== 0 ? (
              store.list.map((item, index) => (
                <li className="list-group-item p-2 " key={index}>
                  <div className="row">
                    <div className="col-sm-4 col-md-3 col-lg-3 text-center ">
                      <img
                        src="https://picsum.photos/200/200?grayscale"
                        className="rounded-circle img-fluid"
                        alt="..."
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div
                      className="col-sm-8 col-md-9 col-lg-7 d-flex flex-column"
                      id="editBoxes"
                      onClick={(e) => actions.popModal(index, e)}
                    >
                      <div className=" py-1 my-1">
                        <span className="p-1" id="Box1">
                          <p className="h4 m-0 d-inline-block" id="Name">
                            {item["First Name"] + " " + item["Last Name"]}
                          </p>
                        </span>
                      </div>
                      <div className="">
                        <div className="my-1">
                          <span className="p-1" id="Box2">
                            <i className="fa-solid fa-location-crosshairs fa-lg"></i>
                            <p
                              className="fs-4 d-inline-block ms-2 mb-2"
                              id="Address"
                            >
                              {item["Address"]}
                            </p>
                          </span>
                        </div>
                        <div className="my-1">
                          <span className="p-1" id="Box3">
                            <i className="fa-solid fa-mobile-screen-button fa-lg"></i>
                            <p
                              className="fs-5 d-inline-block ms-2 mb-2"
                              id="Phone"
                            >
                              {item["Phone"]}
                            </p>
                          </span>
                        </div>
                        <div className="my-1">
                          <span className="p-1" id="Box4">
                            <i className="fa-solid fa-envelope-circle-check fa-lg"></i>
                            <p
                              className="fs-6 d-inline-block ms-2 mb-2"
                              id="E-Mail"
                            >
                              {item["E-Mail"]}
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-2 my-2 py-2">
                      <div className="col-6 col-sm-6 text-center d-inline-block px-1">
                        <button
                          className="btn btn-outline-black btn-sm mx-0 w-100"
                          type="button"
                          id="editBtn"
                          onClick={(e) => actions.editButton(index, e)}
                        >
                          <i className="fa-solid fa-pen fa-lg" id="editBtn"></i>
                        </button>
                      </div>
                      <div className="col-6 col-sm-6 text-center d-inline-block px-1">
                        <button
                          className="btn btn-outline-black btn-sm mx-0 w-100"
                          type="button"
                          onClick={() => actions.trashIcon(index)}
                        >
                          <i className="fa-solid fa-trash fa-lg"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li className="list-group-item p-2">
                <div className="row">
                  <div className="col d-flex flex-column justify-content-center text-center">
                    <div className=" py-1 my-1">
                      <p className="mt-4 fs-5 ">
                        Nothing Here... Click the Button to Generate A Random
                        Contact
                      </p>
                    </div>
                    <div className="">
                      <button
                        className=" btn btn-outline-dark btn-lg my-1"
                        type="button"
                        id="link"
                        onClick={() => actions.makeNewContact()}
                      >
                        <i className="fa-regular fa-hand-point-right pr-2 m-1 fa-lg"></i>
                        Click Here To Generate A Random Contact
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>

      {actions.addModal()}

      {actions.setToast()}
    </div>
  );
};

export default Contact;
