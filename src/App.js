import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { motion } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/App.scss';

function App() {
  return (
    <div id="App">
      <Router>
        <header className="navigation">
          <Burger />
          <img className='logo' src='./img/flower-logo.png' alt='logo' />
          <Menu />
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects/:id" />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <footer className='page'>
          <p>by Jiyun Yu.</p>
        </footer>
      </Router>
    </div>
  );
}

function Burger() {
  const [ isBurger, setBurger ] = useState(false)

  const toggleBurger = () => {
    setBurger(!isBurger)
    const newClassName = isBurger === false ? 'burger open' : 'burger'
    document.getElementById('overlay').style.height = isBurger === false ? '100vh' : '0vh'
    document.body.style.overflow = isBurger === false ? 'hidden' : 'visible'
    document.getElementById('burger').className = newClassName
  }

  return (
    <div className='burger-container'>
      <div id='burger' className="burger" onClick={toggleBurger}>
        <div className="icon"></div>
      </div>
      <div id='overlay' className='menu-overlay'>
        <div className='mobile-container'>
          <motion.img 
            className='logo' 
            src='./img/flower-logo.png' alt='logo' 
            animate={{ rotate: isBurger ? 360 : 0 }} 
            transition={{ delay: 0.35, duration: 1.5 }}
          />
          <NavLink id='projects' exact to="/" onClick={toggleBurger}>
            projects
          </NavLink>
          <NavLink id='about' to="/about" onClick={toggleBurger}>
            about me
          </NavLink>
          <NavLink id='contact' to="/contact" onClick={toggleBurger}>
            contact
          </NavLink>
        </div>
        <footer>
          <p>by Jiyun Yu.</p>
        </footer>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className='nav-container'>
      <NavLink id='projects' exact to="/">
        <span className='bullet'>•&nbsp;</span> projects
      </NavLink>
      <NavLink id='about' to="/about">
        <span className='bullet'>•&nbsp;</span> about me
      </NavLink>
      <NavLink id='contact' to="/contact">
        <span className='bullet'>•&nbsp;</span> contact
      </NavLink>
    </div>
  );
}

export default App;
