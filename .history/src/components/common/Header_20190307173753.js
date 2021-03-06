import ReactDOM from 'react-dom';
import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

const Header = () =>(
<div>

<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand"  to="/" activeClassName="is-active" exact={true}>My app title</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
     
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">    
    <li class="nav-item">
      <Link className="nav-link" to="/Home" activeClassName="is-active">Home</Link>
      </li>
      <li class="nav-item">

      <Link className="nav-link" to="/Features" activeClassName="is-active">Features</Link>
      </li>
      <li class="nav-item">

      <Link className="nav-link" to="/Pricing" activeClassName="is-active" >Pricing</Link>
      </li>
      <li class="nav-item">

      <Link className="nav-link" to="/About" activeClassName="is-active" >About</Link>
      </li>
      <li>
      <Link className="nav-link" to="/Contact" activeClassName="is-active">Contact us</Link>
      </li>
  </ul>
  </div>
    </nav>
</div>

);

export default Header;
