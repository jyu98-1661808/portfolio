import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import '../styles/Splash.scss';

function Splash() {
    document.body.style.overflowX = 'hidden'
    document.body.style.overflowY = 'visible'
    
    const { scrollYProgress } = useViewportScroll()
    const [progress, setProgress] = useState(0)
    const [isHovered, setHovered] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    const yPosAnim1 = useTransform(scrollYProgress, [0.14, 0.15, 0.18], [25, -25, -100])
    const yPosAnim2 = useTransform(scrollYProgress, [0.23, 0.25, 0.28], [100, 0, -75])

    // runs once when page loads
    useEffect(() => {
        window.scrollTo(0, 0)
        document.getElementById('Loaded').style.backgroundImage = "url(../img/backgrounds/background-3.png)"
    }, [])

    scrollYProgress.onChange(current => {setProgress(current); console.log(current)})


    // runs when screen width changes
    useEffect(() => {
        window.addEventListener('resize', () => checkWidth())
    }, [width])

    function checkWidth() {
        setWidth(window.innerWidth)
    }

    var rows = [];

    for (var i = 1; i < 9; i++) {
        var path = '../img/projects/splash/high-fidelity/screen-' + i + '.png'

        rows.push(
            <motion.img 
                key={i}
                src={path} 
                alt='High-fidelity screen' 
                whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }} />
        );
    }

    return (
        <div id='Splash'>
                <motion.h1
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.25, duration: 1 }} >
                    Splash
                </motion.h1>
                <motion.h3
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.25, duration: 1 }} >
                    Winter'19-Spring'19
                </motion.h3>
                <motion.img id='splash-ad' src='../img/projects/splash/splash-1.png' alt='Splash advertisement'
                    initial={{ y: -150, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ y: { type: "spring", stiffness: 200, duration: 1 } }} />
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
                            <img id='illustrator' src='../img/projects/logos/illustrator-logo.png' alt='ilustrator logo' />
                            <img id='figma' src='../img/projects/logos/figma-logo.png' alt='figma logo' />
                        </div>
                        <p><span style={{fontWeight: 'bold'}}>From left to right:</span> <br/> React (for landing page), Illustrator, Invision</p>
                    </div>
                </div>
                <motion.div id='jellyfish-1' style={{ y: yPosAnim1 }}>
                    <motion.img src='../img/projects/splash/jellyfish.png' alt='jellyfish'
                        initial={{ y: 0 }}
                        animate={{ y: 25 }} 
                        transition={{ y: { yoyo: Infinity, duration: 1.15, ease: "linear" } }} />
                </motion.div>
                <motion.div id='jellyfish-2' style={{ y: yPosAnim2 }}>
                    <motion.img src='../img/projects/splash/jellyfish.png' alt='jellyfish'
                        initial={{ y: 0 }}
                        animate={{ y: 25 }} 
                        transition={{ y: { yoyo: Infinity, duration: 1, ease: "linear" } }} />
                </motion.div>
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
                <div className='approach-container'>
                    <h3>Approach</h3>
                    <p className='approach-description'>
                        With the hackathon's theme for creating lasting impact around the world, we wanted to create a mobile game that engaged younger users to drink more water and
                        and help fight the water crisis. We decided to intertwine the user's water intake to both the functionality of the game and Splash's primary motive to provide 
                        aid for the water crisis in disadvantaged countries. We also considered how the water crisis could be presented in a more approachable way. Therefore, we came to
                        the theme of native marine life as we ushered the importance of water. 
                    </p>
                    <div className='approach-row'>
                        <div className='challenge-container'>
                            <h4>Challenges</h4>
                            <ul>
                                <li>&nbsp; Finding means to alleviate the water crisis</li>
                                <li>&nbsp; Environmental footprint of plastic water bottle production</li>
                                <li>&nbsp; Tracking users' water consumption</li>
                            </ul>
                        </div>
                        <div className='solution-container'>
                            <h4>Solutions</h4>
                            <ul>
                                <li>&nbsp; Sponsorship from notable water companies</li>
                                <li>&nbsp; Donations from users and water companies</li>
                                <li>&nbsp; Educating users on the value of healthy water consumption</li>
                                <li>&nbsp; Championing the games's initiative to relieve the water crisis</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='visual-container'>
                    <h3>Visual Elements</h3>
                    <p>
                        For the visual direction, we took inspiration from the mobile relaxation game "Tap Tap Fish AbyssRium". 
                        We designed pixel sprites of the fish and aquatic animals that were native to the countries we researched.
                        The pixel art reinforced the gamification of healthy water consumption and created an old school, 2D game theme for Splash. 
                        The details of the pixel art were one of the pivotal aspects that won our team the Best Design Award for the Winfo Hackathon. 
                    </p>
                    <div className='visual-row'>
                        <figure id='angelfish'>
                            <img src='../img/projects/splash/angelfish.png' alt='Emperor Angelfish' />
                            <figcaption><span style={{ fontWeight: 'bold' }}>Figure 1:</span> Emperor Angelfish</figcaption>
                        </figure>
                        <figure id='turtle'>
                            <img src='../img/projects/splash/turtle.png' alt='Turtle' />
                            <figcaption><span style={{ fontWeight: 'bold' }}>Figure 2:</span> Sea Turtle</figcaption>
                        </figure>
                        <figure id='glassfish'>
                            <img src='../img/projects/splash/glassfish.png' alt='Glassfish' />
                            <figcaption><span style={{ fontWeight: 'bold' }}>Figure 3:</span> Glassfish</figcaption>
                        </figure>

                    </div>
                </div>
                <div className='design-container'>
                    <h3>High-fidelity Prototype</h3>
                    <p>
                        The main interaction between users and the game is the barcode scanning feature. 
                        As time progresses within the game, the fish tank becomes dirtier and its water needs to be replaced. 
                        Users must consume water and scan the corresponding barcode of the water bottle in order to refresh the tank water and unlock new fish characters. 
                        In return, a relative amount of clean water is donated to the communities in need around the world. 
                        The relationship between the users and the community is further reinforced as the fish characters they unlock are notable inhabitants of the area. 
                        Sponsor companies and organizations receive the data from barcodes and complete the water donation process accordingly.
                    </p>
                    { width > 500 && <p><span style={{fontWeight: 'bold'}}>Hover </span>  over the screens to see details.</p> }
                </div>
                <div className='high-fidelity-container'>
                    <div className='screen-container'>
                        { rows }
                    </div>
                </div>
                <motion.div className='splash-link-container'
                    initial={{ y: 0 }}
                    animate={{ y: 25 }} 
                    transition={{ y: { yoyo: Infinity, duration: 1.15, ease: "linear" } }}>
                    <a href='https://projects.invisionapp.com/prototype/AmazonFresh-ck22gfle7001v8l0134l2c3d4/play/9d324687'  target="_blank" rel="noopener noreferrer">
                    <motion.img 
                        src='../img/projects/splash/splash-link.png' 
                        alt='Link to invision prototype'
                        initial={{ rotate: 79 }}
                        whileHover={{
                            scale: 1.05,
                            rotate: 74,
                            transition: { duration: 1 },
                        }} /> 
                    </a>
                </motion.div>
                <div className='links-container'>
                    <h3>Links</h3>
                    <ul>
                        <li>
                            <span style={{color: '#ac5aa5'}}>Github Repository: &nbsp;</span>
                            <a href="https://github.com/jyu98-1661808/winfo2018" target="_blank" rel="noopener noreferrer">
                                https://github.com/jyu98-1661808/winfo2018
                            </a>
                        </li>
                        <li>
                            <span style={{color: '#ac5aa5'}}>Landing Page: &nbsp;</span>
                            <a href="https://jyu98-1661808.github.io/winfo2018/" target="_blank" rel="noopener noreferrer">
                                https://jyu98-1661808.github.io/winfo2018/
                            </a>
                        </li>
                        <li>
                            <span style={{color: '#ac5aa5'}}>Pitch Document: &nbsp;</span>
                            <a href="https://drive.google.com/file/d/1L4lQo1CEgVgBnNoi6BDmdnPAZ0RhQptn/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                https://drive.google.com/file/d/1L4lQo1CEgVgBnNoi6BDmdnPAZ0RhQptn/view?usp=sharing
                            </a>
                        </li>
                        <li>
                            <span style={{color: '#ac5aa5'}}>Prototype: &nbsp;</span>  
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
                        onMouseLeave={() => setHovered(false)}>
                        <motion.img 
                            id='smile-logo'
                            src='../img/projects/smile-logo.png' 
                            alt='smile logo' 
                            initial={{ rotate: 0 }} 
                            animate={{ rotate: (progress > 0.99) ? 360 : 0 }}
                            transition={{ duration: 0.75 }}
                            whileHover={{
                                rotate: (progress > 0.99) ? 0 : 360,
                                transition: { duration: 1 },
                            }} />
                    </NavLink>
                    <motion.img 
                        id='next-arrow'
                        src='../img/projects/next-project.png' 
                        alt='Next project' 
                        animate={{ scale: isHovered ? 1.2 : 1 }} 
                        transition={{ duration: 0.35 }} />
                </div>
            </div>
    );
}

export default Splash;