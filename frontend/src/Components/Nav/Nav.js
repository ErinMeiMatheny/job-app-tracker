import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";



function Nav() {


  return (
    <nav>
      {/* logo */}
      <Link to="/">
        <img
          className="nav-logo"
          src="https://www.flaticon.com/svg/static/icons/svg/1694/1694787.svg"
          alt="nav-logo"
        />
      </Link>
      {/* search bar */}
      {/* <div className="nav-search">
        <input type="text" className="nav-search-input" />
      </div> */}
      {/* 3 links */}

      <div className="nav-nav">
        {/* 1st link */}
        <Link to="/Signin" className="nav-link">
          <div className="nav-option">
            <span className="nav-option-line-one">Log in</span>
            
          </div>
        </Link>

         {/* 2nd link */}
        <Link to="/Signup" className="nav-link">
          <div className="nav-option">
            <span className="nav-option-line-one">Register Today</span>
           
          </div>
        </Link>
       
        
      </div>
    </nav>
  );
}

export default Nav;