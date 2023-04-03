import React from "react";

//include images into your bundle


//create your first component
const Form = () => {
	return (
		<div className="container">
    <form>
        <legend class="text-center mt-5"><h1>Add New Contact Information</h1></legend>
        <div class="m-3">
            <label for="exampleInputEmail1" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Full Name"/>
          </div>
        <div class="m-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div class="m-3">
          <label for="exampleInputPassword1" class="form-label">Phone</label>
          <input type="phone" class="form-control" id="exampleInputPhone1" placeholder="Enter phone"/>
        </div>
        <div class="m-3">
            <label for="exampleInputPassword1" class="form-label">Address</label>
            <input type="address" class="form-control" id="exampleInputAddress1" placeholder="Enter address"/>
          </div>
          <div class="d-grid gap-2 m-3">
            <button class="btn btn-primary" type="button">Save</button>
          </div>
          <div class="m-3">
            <a href="#">or get back to contacts</a>

          </div>
      </form>
		</div>
	);
};

export default Form;