import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

//include images into your bundle

//create your first component
const Form = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container" id="form">
      <form>
        <legend className="text-center mt-5">
          <h1>Add New Contact Information</h1>
        </legend>
        <div className="m-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="First Name"
            aria-describedby="nameHelp"
            placeholder="First Name"
            onChange={(e)=>actions.setContactHolder("First Name", e)}
            onKeyDown={(e) => actions.inputValidation("First Name", e) && actions.keyPress("First Name",e)}
            
          />
        </div>
        <div className="m-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="Last Name"
            aria-describedby="nameHelp"
            placeholder="Last Name"
            onChange={(e)=>actions.setContactHolder("Last Name", e)}
            onKeyDown={(e) => actions.inputValidation("Last Name", e) && actions.keyPress("Last Name",e)}

          />
        </div>
        <div className="m-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e)=>actions.setContactHolder("E-Mail", e)}
            onKeyDown={(e) => actions.inputValidation("E-Mail", e) && actions.keyPress("E-Mail",e)}

          />
        </div>
        <div className="m-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Phone
          </label>
          <input
            type="phone"
            className="form-control"
            id="Phone"
            placeholder="Enter phone"
            onChange={(e)=>actions.setContactHolder("Phone", e)}
            onKeyDown={(e) => actions.inputValidation("Phone", e) && actions.keyPress("Phone", e)}


          />
        </div>
        <div className="m-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Address
          </label>
          <input
            type="address"
            className="form-control"
            id="Address"
            placeholder="Enter address"
            onChange={(e)=>actions.setContactHolder("Address", e)}
            onKeyDown={(e) => actions.inputValidation("Address", e) && actions.keyPress("Address",e)}

          />
        </div>
        <div className="d-grid gap-2 m-3">
          <button
            onClick={(e) => actions.saveButton(e)}
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
      {actions.setToast()}
    </div>

  );
};

export default Form;
