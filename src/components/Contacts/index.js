import React from "react";
import "./style.css";

function Contacts() {
  return (
    // <div className="card side">
      <div className="card-side">
       {/* <div className="col-md-3 col-md-offset-1 sidebar"> */}
        <h1>Connect with Me</h1>        
        <a href="http://www.linkedin.com/in/ishabali" target="_blank"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
        <a href="https://github.com/ishabali" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true" ></i></a> 
        <a href="https://stackoverflow.com/users/13091679/ishabali?tab=profile" target="_blank"><i className="fa fa-stack-overflow fa-2x" aria-hidden="true"></i></a>
    </div>
  );
}

export default Contacts;
