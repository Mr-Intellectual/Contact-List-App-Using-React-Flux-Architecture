import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

//include images into your bundle

//create your first component
const Form = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <form>
        <legend className="text-center mt-5">
          <h1>Add New Contact Information</h1>
        </legend>
        <div className="m-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            aria-describedby="nameHelp"
            placeholder="Full Name"
          />
        </div>
        <div className="m-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="m-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Phone
          </label>
          <input
            type="phone"
            className="form-control"
            id="exampleInputPhone1"
            placeholder="Enter phone"
          />
        </div>
        <div className="m-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Address
          </label>
          <input
            type="address"
            className="form-control"
            id="exampleInputAddress1"
            placeholder="Enter address"
          />
        </div>
        <div className="d-grid gap-2 m-3">
          <button
            onClick={(e) => actions.saveChangeDetail(e)}
            className="btn btn-primary"
            type="button"
          >
            Save
          </button>
        </div>
        <div className="m-3">
          <Link className="m-0 p-0" to="/contact">
            or get back to contacts
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
