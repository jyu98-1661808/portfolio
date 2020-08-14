import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';
import '../styles/About.scss';

function About({width}) {
    const isMobile = width <= 500;
    
    useEffect(() => updatingScroll())
    
    function updatingScroll() {
        if (isMobile) {
            document.getElementById('fun-button').style.display = 'none';
            document.body.style.overflowY = 'visible'
            document.body.style.overflowX = 'hidden'
        } else {
            document.getElementById('fun-button').style.display = 'block';
            document.body.style.overflow = 'hidden'
        }
    }

    const [isClicked, setClicked] = useState(false);
    
    function toggleClicked() {
        setClicked(true)
        setTimeout(() => setClicked(false), 8000)
    }

    return (
        <div id='About'>
            <motion.img id='me' src='./img/about/me.png' alt='Photo of Jiyun Yu'  initial={{ y: -150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ y: { type: "spring", stiffness: 200, duration: 1 } }}/>
            <div className='about-container'>
                <motion.h1  
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 1.75 }} >
                    Hi, my name is <img id='my-name' src='./img/about/jiyun.png' alt='Jiyun Yu' />.
                </motion.h1>
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.35, duration: 1.25 }} > 
                    <h3>I'm a &nbsp;
                        <span><img id='front-end' src='./img/about/front-end.png' alt='front-end developer' /></span>
                        &nbsp; in &nbsp;
                        <span><img id='seattle' src='./img/about/seattle.png' alt='seattle, washington' /></span>
                        <br/>
                        focused on web/mobile design.
                    </h3>
                    <p>
                        I created this website to showcase my passion for front-end development, UX/UI design, 
                        and the research that comes along with my projects. I’m also a graduating senior at 
                        the University of Washington in Seattle and I don’t know what else to do with my spare time.
                    </p>
                </motion.div>
                <div className='button-container'>
                    <motion.a href="https://drive.google.com/file/d/1odRMgR3G8UxSf_bmcofdOCwfiDrSaXB3/view?usp=sharing" download
                        whileHover={{
                            rotate: 360,
                            transition: { duration: 1 },
                        }} >
                        <motion.img id='resume' 
                            src='./img/about/resume-button.png' alt='click for resume' 
                            initial={{ x: '50vw' }} 
                            animate={{ x: 0, rotate: 360 }} 
                            transition={{ duration: 1 }}  />
                    </motion.a>
                    <motion.div
                        whileHover={{
                            rotate: 360,
                            transition: { duration: 1 },
                        }} >
                        <NavLink id='contact' to="/contact">
                            <motion.img id='contact' 
                                src='./img/about/contact-button.png' alt='click for contact'
                                initial={{ x: '50vw' }} 
                                animate={{ x: 0, rotate: 360 }} 
                                transition={{ delay: 0.35, duration: 1 }}
                                whileHover={{
                                    rotate: 360,
                                    transition: { duration: 1 },
                                }} />
                        </NavLink>
                    </motion.div>
                    <motion.button id='fun-button'
                        onClick={() => toggleClicked()}
                        whileHover={{
                            rotate: 360,
                            transition: { duration: 1 },
                        }} >
                        <motion.img id='fun' 
                            src='./img/about/fun-button.png' alt='click for fun'
                            initial={{ x: '50vw' }} 
                            animate={{ x: 0, rotate: 360 }} 
                            transition={{ delay: 0.65, duration: 1 }}
                            whileHover={{
                                rotate: 360,
                                transition: { duration: 1 },
                            }} />
                    </motion.button>
                </div>
            </div>
            { isClicked && <SmileWall /> }
        </div>
    );
}

function SmileWall() {
    const smileVariants = {
        visible: i => ({
          opacity: 1,
          rotate: 360,
          y: 1000,
          transition: {
            rotate: { duration: 1, ease: "linear", loop: 8 },
            y: { duration: 4, delay: i * (0.1 + (Math.random() * (0.35 - 0.1))) },
          },
          transitionEnd: { display: "none" }
        }),
        hidden: { opacity: 0, y: -1000 },
    }

    var rows = [];

    for (var i = 0; i < 20; i++) {
        rows.push(
            <motion.img 
                src='./img/about/smile-logo.png' 
                alt='smile logo' 
                custom={i}
                initial="hidden"
                animate="visible"
                variants={smileVariants} />
        );
    }

    return (
        <div id='smile-wall'> 
            { rows }
        </div>
    );
}

export default About;