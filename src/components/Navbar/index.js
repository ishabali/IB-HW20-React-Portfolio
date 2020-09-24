import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div class="navbar-brand">
        <h1>Isha Bali</h1>
        {/* <h4>Full-Stack Web Developer</h4> */}
        <h4>Full-Stack Web Developer, Chicago - IL</h4>
        {'      '} <a href="http://www.linkedin.com/in/ishabali" target="_blank"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
        {'      '} <a href="https://github.com/ishabali" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true" ></i></a>        
        {'      '} <a href="https://stackoverflow.com/users/13091679/ishabali?tab=profile" target="_blank"><i className="fa fa-stack-overflow fa-2x" aria-hidden="true"></i></a>
      {/* </div>      
      <div> */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/home"
              className={ window.location.pathname === "/" || window.location.pathname === "/home"
                ? "nav-link active" 
                : "nav-link"}
              // className = "disabled-link"
            >
              <h5 style={{color:"Blue"}}>Home</h5>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={window.location.pathname === "/projects"
                ? "nav-link active" 
                : "nav-link"}
            >
              <h5 style={{color:"Blue"}}>Projects</h5>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" 
                ? "nav-link active" 
                : "nav-link"}
            >
              <h5 style={{color:"Blue"}}>Contact</h5>
            </Link>
          </li>
       
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
