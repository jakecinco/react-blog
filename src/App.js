import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
//import Greeting from './Greeting';
import Home from './Home';
import Compose from './Compose';
import Edit from './Edit';

export default function App() {
  return (
    <Router>
      <div className="main-app-container">
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-app-header">
              <p className="navbar-brand" style={{ textDecoration: 'none' }}>DAILY JOURNAL</p>
            </div>
            {/* <div className="nav-header-links"> */}
            <ul className="nav-app-links">
              <li id="home"><Link to="/" style={{ textDecoration: 'none' }}>HOME</Link></li>
              <li id="about"><Link to="/about" style={{ textDecoration: 'none' }}>ABOUT</Link></li>
              <li id="contact"><Link to="/contact" style={{ textDecoration: 'none' }}>CONTACT</Link></li>
            </ul>
            {/* </div> */}
          </div>
        </nav>



        <hr className="style-one" />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about"><About /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/compose" component={Compose}/>
          <Route path="/edit" component={Edit}/>
        </Switch>
      </div>
      <div className="footer-padding">
        <div className="footer">
          <p>The Waraynon 2019</p>
        </div>
      </div>
    </Router >
  );
}

// You can think of these components as "pages"
// in your app.



function About() {
  return (
    <div>
      <h2 className="switch-header">About</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2 className="switch-header">Contact</h2>
    </div>
  );
}
