import React, { useState, useEffect } from 'react';
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
import HabiHero from './pages/HabiHero';
import Fresh from './pages/Fresh';
import Splash from './pages/Splash';
import './styles/App.scss';

function App() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() =>
    window.addEventListener('resize', () => checkWidth())
  )

  function checkWidth() {
    setWidth(window.innerWidth)
  }

  return (
    <div id="App">
      <Router basename={process.env.PUBLIC_URL}>
        <header className="navigation">
          <Burger />
          <img className='logo' src='./img/flower-logo.png' alt='logo' />
          <Menu />
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects/habihero">
            { width <= 500 && <Mobile /> }
            { width > 500 && <HabiHero /> }
          </Route>
          <Route path="/projects/fresh">
            { width <= 500 && <Mobile /> }
            { width > 500 && <Fresh /> }
          </Route>
          <Route path="/projects/splash">
            { width <= 500 && <Mobile /> }
            { width > 500 && <Splash /> }
          </Route>
          <Route path="/about">
            <About width={width} />
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
            src='./img/flower-logo.png' alt='flower logo' 
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

function Mobile() {
  return (
      <div id='Mobile'>
          <motion.img src='./img/projects/out-of-service.png' alt='out of service sign' />
          <h3>Mobile version is under maintenance.</h3>
          <h3>Updating soon!</h3>
          <h3>Check out projects on desktop.</h3>
      </div>
  )
}

export default App;
