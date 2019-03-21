import ReactDOM from 'react-dom';
import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

const Header = () =>(
<div>

<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand"  to="/"  exact={true}>My app title</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
     
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">    
    <li className="nav-item">
      <Link className="nav-link" to="/Home" >Home</Link>
      </li>
      <li className="nav-item">

      <Link className="nav-link" to="/Features" >Features</Link>
      </li>
      <li className="nav-item">

      <Link className="nav-link" to="/Pricing"  >Pricing</Link>
      </li>
      <li className="nav-item">

      <Link className="nav-link" to="/About" >About</Link>
      </li>
      <li>
      <Link className="nav-link" to="/Contact" >Contact us</Link>
      </li>
  </ul>
  </div>
    </nav>
</div>

);

export default Header;
