import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { motion } from 'framer-motion';
import '../styles/Splash.scss';

function Splash() {
    document.body.style.overflowY = 'visible'
    document.body.style.overflowX = 'hidden'

    const [isHovered, setHovered] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    };

    var rows = [];

    for (var i = 1; i < 9; i++) {
        var path = '../img/projects/splash/screen-' + i + '.png'

        rows.push(
            <motion.img 
                src={path} 
                alt='High-fidelity screen' 
                whileHover={{
                    scale: 1.5,
                    transition: { duration: 1 },
                }} />
        );
    }

    return (
        <div id='Splash'>
            <h1>Splash</h1>
            <h3>Winter'19-Spring'19</h3>
            <Slider id='splash-slides' {...settings}>
                <img src='../img/projects/splash/splash-1.png' alt='Splash advertisement' />
                <img src='../img/projects/splash/splash-2.png' alt='Help make a difference in the world' />
                <img src='../img/projects/splash/splash-3.png' alt='Collect unique aquatic animals' />
            </Slider>
            <div className='intro-container'>
                <div className='about-container'>
                    <h3>About</h3>
                    <p className='about-main'>
                        With <span style={{fontWeight: 'bold', color: '#83c9e5'}}>water </span> comes <span style={{fontWeight: 'bold', color: '#69d1b1'}}>life</span> - It is the 
                        <span style={{fontWeight: 'bold', color: '#dd99c6'}}> main constituent</span> of the Earth’s surface and in most living organisms.  
                    </p>
                    <p>
                        Splash is a mobile app game that is designed to help end the water crisis and promote a healthier lifestyle for users through improving their water intake.
                        The game’s goal is to take care of fish by maintaining the tank water’s purity and unlock new fish characters during this process. 
                    </p>
                </div>
                <div className='tools-container'>
                    <h3>Tools Used</h3>
                    <div className='logo-container'>
                        <img id='react' src='../img/projects/logos/react-logo.png' alt='react logo' />
                        <img id='digital-ocean' src='../img/projects/logos/digital-ocean-logo.svg' alt='digital ocean logo' />
                        <img id='figma' src='../img/projects/logos/figma-logo.png' alt='figma logo' />
                    </div>
                    <p><span style={{fontWeight: 'bold'}}>From left to right:</span> <br/> React (for landing page), Illustrator, Invision</p>
                </div>
            </div>
            <div className='research-container'>
                <h3>Research</h3>
                <h4>Background</h4>
                <p>
                    Almost 844 million people live without access to safe water. This means that nearly 1 in 9 individuals are unable to obtain this necessity 
                    (World Health Organization, 2017). Distance from these developing countries often makes us oblivious to the notion that water is a crisis for many. 
                    On the other hand, even those with access to water do not consume enough water for their health needs. 
                    A 2018 study states that 80% Americans drink less water than the recommended daily amount (Quench USA, 2018). 
                    Splash strives to tackle both of these problems by creating a fun and engaging experience. 
                    Its gameplay encourages users to drink water while giving support to the cause through donations. 
                    Therefore, Splash aims to bring equity and empower its users and the world as a whole. 
                </p>
                <hr/>
                <ol>
                    <li>
                        World Health Organization and UNICEF Joint Monitoring Programme. (2017). 
                        Progress on Drinking Water and Sanitation, 2017 Update and MDG Assessment.
                    </li>
                    <li>
                        Quench USA. (2018). ​Nearly 80% of Working Americans Don't Drink Enough Water. 
                        Retrieved from https://quenchwater.com/press-release/nearly-80-percent-working-americans-say-dont-drink-enough-water-quench-survey/
                    </li>
                </ol>
                <h4>Overview</h4>
                <p>
                    I first collected major countries in differing geographical areas that were suffering from a major water crisis. 
                    With the time constraint of the hackathon, we focused on 7 countries: Ethiopia, Uganda, Kenya, China, Bangladesh, India, Papua New Guinea, and Venezuela. 
                    Then, I researched the native marine life in each country and provided the graphic designers with a list of animals and their images. 
                </p>
            </div>
            <div className='design-container'>
                <h3>Design</h3>
                <p className='design-description'>
                    The main interaction between users and the game is the barcode scanning feature. 
                    As time progresses within the game, the fish tank becomes dirtier and its water needs to be replaced. 
                    Users must consume water and scan the corresponding barcode of the water bottle in order to refresh the tank water and unlock new fish characters. 
                    In return, a relative amount of clean water is donated to the communities in need around the world. 
                    The relationship between the users and the community is further reinforced as the fish characters they unlock are notable inhabitants of the area. 
                    Sponsor companies and organizations receive the data from barcodes and complete the water donation process accordingly.
                </p>
                <div className='design-row'>
                    <div className='challenge-container'>
                        <h4>Challenges</h4>
                        <ul>
                            <li><p>Source of funding</p></li>
                            <li><p>Environmental footprint of plastic water bottle production</p></li>
                            <li><p>Tracking users' water consumption</p></li>
                        </ul>
                    </div>
                    <div className='solution-container'>
                        <h4>Solutions</h4>
                        <ul>
                            <li><p>Sponsorship from notable water companies</p></li>
                            <li><p>Donations from users and water companies</p></li>
                            <li><p>Educating users on the value of healthy water consumption</p></li>
                            <li><p>Championing the games's initiative to relieve the water crisis</p></li>
                        </ul>
                    </div>
                </div>
                <p>
                    <span style={{fontWeight: 'bold'}}>Hover </span>  over the screens to see details.
                </p>
                <div className='high-fidelity-container'>
                    <div className='screen-container'>
                        { rows }
                    </div>
                    <figure>
                        <a href='https://projects.invisionapp.com/prototype/AmazonFresh-ck22gfle7001v8l0134l2c3d4/play/9d324687'  target="_blank" rel="noopener noreferrer">
                            <motion.img 
                                className='high-link' 
                                src='../img/projects/splash/splash-link.png' 
                                alt='Link to invision prototype'
                                whileHover={{
                                    scale: 1.05,
                                    rotate: 15,
                                    transition: { duration: 1 },
                                }} /> 
                        </a>
                        <figcaption><span style={{fontWeight: 'bold'}}>Click </span>  phone above to test prototype. </figcaption>
                    </figure>
                </div>
            </div>
            <div className='links-container'>
                <h3>Links</h3>
                <ul>
                    <li>
                        <span style={{color: '#292929'}}>Github Repository: &nbsp;</span>
                        <a href="https://github.com/jyu98-1661808/winfo2018" target="_blank" rel="noopener noreferrer">
                            https://github.com/jyu98-1661808/winfo2018
                        </a>
                    </li>
                    <li>
                        <span style={{color: '#292929'}}>Landing Page: &nbsp;</span>
                        <a href="https://jyu98-1661808.github.io/winfo2018/" target="_blank" rel="noopener noreferrer">
                            https://jyu98-1661808.github.io/winfo2018/
                        </a>
                    </li>
                    <li>
                        <span style={{color: '#292929'}}>Pitch Document: &nbsp;</span>
                        <a href="https://drive.google.com/file/d/1L4lQo1CEgVgBnNoi6BDmdnPAZ0RhQptn/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            https://drive.google.com/file/d/1L4lQo1CEgVgBnNoi6BDmdnPAZ0RhQptn/view?usp=sharing
                        </a>
                    </li>
                    <li>
                        <span style={{color: '#292929'}}>Prototype: &nbsp;</span>  
                        <a href="https://projects.invisionapp.com/share/MYPY6X5RHA8#/screens/340608481" target="_blank" rel="noopener noreferrer">
                            https://projects.invisionapp.com/share/MYPY6X5RHA8#/screens/340608481
                        </a>
                    </li>
                </ul>
            </div>
            <div className='next-container'>
                <NavLink 
                    id='third-project' 
                    to="/projects/habihero" 
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <motion.img 
                        id='smile-logo'
                        src='../img/projects/smile-logo.png' 
                        alt='smile logo' 
                        whileHover={{
                            rotate: 360,
                            transition: { duration: 1 },
                        }}
                    />
                </NavLink>
                <motion.img 
                    id='next-arrow'
                    src='../img/projects/next-project.png' 
                    alt='Next project' 
                    animate={{ scale: isHovered ? 1.2 : 1 }} 
                    transition={{ duration: 0.35 }}
                />
            </div>
        </div>
    );
}

export default Splash;