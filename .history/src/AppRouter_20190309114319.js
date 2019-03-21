import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Home from './components/Home/Home';
import Pricing from './components/Pricing/Pricing';
import About from './components/About/About';
import Features from './components/Features/Features';
import Contact from './components/Contact/Contact';
import Header from './components/common/Header';

const NotFoundPage = () => (
  <div>
    404!- <Link to="/">Go to Home </Link>
  </div>
);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact={true}  path="/" component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/Pricing" component={Pricing} />
        <Route path="/About" component={About} />

        <Route path="/Features" component={Features} />
        <Route path="/Contact" component={Contact} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);


export default AppRouter;