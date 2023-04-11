import React from "react";

//include images into your bundle

//create your first component
const Contact = () => {
	return (
        <div className="mt-5 border border-2 rounded-3">

        <div className="card " >
      <ul className="list-group list-group-flush ">
        <li className="list-group-item border-2 ">
          <div className="row">
    
              <img src="https://api.lorem.space/image/face?w=100&h=100" className="col-3 rounded-circle" alt="..." />
          <div className="col-6">
             <div className="col px-1">
              <p>
              For name
              </p>
             </div>
             <div>
              <p className="mb-2">
              <i className="fa-solid fa-location-crosshairs">
                Address 
              </i>
              </p>
              <p className="mb-2">
              <i className="fa-solid fa-mobile-screen-button">
                Phone 
              </i>
              </p>
              <p className="mb-2">
              <i className="fa-solid fa-envelope-circle-check">
                Email
              </i>
              </p>
             </div>
          </div>  
          <div className="col-3">
            <div className="d-flex justify-content-end">
            <i className="fa-solid fa-pen col-3"></i>
            <i className="fa-solid fa-trash col-3"></i>
            </div> 
            
          </div>

          </div>
        </li>
        <li className="list-group-item border-2 ">
        <div className="row">
    
    <img src="https://api.lorem.space/image/face?w=100&h=100" className="col-3 rounded-circle" alt="..." />
    <div className="col-6">
             <div className="col px-1">
              <p>
              For name
              </p>
             </div>
             <div>
              <p className="mb-2">
              <i className="fa-solid fa-location-crosshairs">
                Address 
              </i>
              </p>
              <p className="mb-2">
              <i className="fa-solid fa-mobile-screen-button">
                Phone 
              </i>
              </p>
              <p className="mb-2">
              <i className="fa-solid fa-envelope-circle-check">
                Email
              </i>
              </p>
             </div>
          </div>  
<div className="col-3">
  <i className="fa-solid fa-pen"></i>
  <i className="fa-solid fa-trash"></i>
</div>

</div>
        </li>
        <li className="list-group-item border-2 ">
        <div className="row">
    
    <img src="https://api.lorem.space/image/face?w=100&h=100" className="col-3 rounded-circle" alt="..." />
    <div className="col-6">
             <div className="col px-1">
              <p>
              For name
              </p>
             </div>
             <div>
              <p className="mb-2">
              <i className="fa-solid fa-location-crosshairs">
                Address 
              </i>
              </p>
              <p className="mb-2">
              <i className="fa-solid fa-mobile-screen-button">
                Phone 
              </i>
              </p>
              <p className="mb-2">
              <i className="fa-solid fa-envelope-circle-check">
                Email
              </i>
              </p>
             </div>
          </div>  
<div className="col-3">
  <i className="fa-solid fa-pen"></i>
  <i className="fa-solid fa-trash"></i>
</div>

</div>
        </li>
      </ul>
    </div>
        </div>
    
	
	);
};

export default Contact;
