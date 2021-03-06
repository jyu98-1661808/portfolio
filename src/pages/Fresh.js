import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import '../styles/Fresh.scss';

function Fresh() {
    document.body.style.overflowY = 'visible'
    document.body.style.overflowX = 'hidden'

    const [isHovered, setHovered] = useState(false)
    const [progress, setProgress] = useState(0)
    const [width, setWidth] = useState(window.innerWidth)

    const { scrollYProgress } = useViewportScroll()
    const yPosAnim1 = useTransform(scrollYProgress, [0, 0.01, 0.018], [75, 20, 0])

    // runs once when page loads
    useEffect(() => {
        window.scrollTo(0, 0)
        document.getElementById('Loaded').style.backgroundImage = "url(../img/backgrounds/background-2.png)"
    }, [])

    scrollYProgress.onChange(setProgress)

    // runs when screen width changes
    useEffect(() => {
        window.addEventListener('resize', () => checkWidth())
    }, [width])

    function checkWidth() {
        setWidth(window.innerWidth)
    }

    var rows = [];

    for (var i = 1; i < 14; i++) {
        var path = '../img/projects/fresh/high-fidelity/screen-' + i + '.png'

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
            <div id='Fresh'>
                <motion.h1
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.25, duration: 1 }} >
                    Amazon Fresh
                </motion.h1>
                <motion.h3
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.25, duration: 1 }} >
                    Fall'19-Winter'20
                </motion.h3>
                <div className='about-container'>
                    <motion.div className='about-image' style={{ y: yPosAnim1 }}>
                        <motion.img src='../img/projects/fresh/floating-phones.png' alt='Floating iphone screens'
                            initial={{ y: 0 }}
                            animate={{ y: 25 }} 
                            transition={{ y: { yoyo: Infinity, duration: 1.15, ease: "linear" } }} />
                    </motion.div>
                    <motion.div className='description-container'
                        initial={{ y: -150, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ y: { type: "spring", stiffness: 200, duration: 1 } }}>
                        <h3>Problem</h3>
                        <p className='about-main'>
                            How might <span style={{fontWeight: 'bold', color: '#2b737c'}}>college students</span> who reside independently with tight schedules achieve 
                            <span style={{fontWeight: 'bold', color: '#bad067'}}> a convenient process </span> of having nutrient packed meals so that they can 
                            <span style={{fontWeight: 'bold', color: '#5789bf'}}> maintain healthier eating habits with more time </span> dedicated to their priorities?
                        </p>
                        <p className='about-description'>
                            In a recent study, 669 college students throughout the US participated in a cross-sectional survey on their diet quality, 
                            in which the average score was evaluated as “needing improvement” (Sunbul et al., 2019). The poor score may be attributed 
                            to common barriers such as time constraints, high prices of healthy food, and greater accessibility to junk food (Sogari et al., 2018).
                            When individuals gain independence for the first time and begin making their own food decisions in college, 
                            eating habits and preferences can be determined during this time (Deshpande et al., 2009). 
                            Therefore, it is critical to establish healthy practices when it comes to eating during these formative years.
                        </p>
                        <hr />
                        <ol>
                            <li>
                                Manal Sunbul, Pradtana Tapanee, Nicole Reeder, Samantha Sockwell, Allie Cowles, Evaluating Diet Quality of College Students Using the Healthy Eating Index, 
                                Journal of Nutrition Education and Behavior, Volume 51, Issue 7, Supplement, 2019, Page S37, ISSN 1499-4046, https://doi.org/10.1016/j.jneb.2019.05.386.
                            </li>
                            <li>
                                Sameer Deshpande, Michael D. Basil &amps; Debra Z. Basil (2009) Factors Influencing Healthy Eating Habits Among College Students: 
                                An Application of the Health Belief Model, Health Marketing Quarterly, 26:2, 145-164, DOI: 10.1080/07359680802619834
                            </li>
                            <li>
                                Sogari G, Velez-Argumedo C, Gómez MI, Mora C. College Students and Eating Habits: A Study Using An Ecological Model for Healthy Behavior. 
                                Nutrients. 2018;10(12):1823. Published 2018 Nov 23. doi:10.3390/nu10121823
                            </li>
                        </ol>
                    </motion.div>
                </div>
                <div className='research-container'>
                    <h3>Research</h3>
                    <p>
                        As for the insights that were gathered upon research, there were two root causes of the problem: money and time. 
                        College students struggled to manage the time it took to prepare and cook meals, along with cleaning up after. 
                        They believed that this time could have been allotted to school, work, and relaxation. As for financial concerns, 
                        healthy foods are viewed as expensive compared to their unhealthy counterpart. On average, students are spending $10+ for every meal.
                    </p>
                    <div className='research-table'>
                        <div className='research-column'>
                            <h4>Pain Points</h4>
                            <ul>
                                <li>&nbsp; Finding tasty alternatives that are affordable and convenient</li>
                                <li>&nbsp; Portion sizes feel small for the price paid</li>
                                <li>&nbsp; Incorporating fresh vegetables into meals</li>
                            </ul>
                        </div>
                        <div className='research-column'>
                            <h4>Opportunities</h4>
                            <ul>
                                <li>&nbsp; Accessibility through delivery</li>
                                <li>&nbsp; Minimal/simple cooking or no cooking at all</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id='fresh-paper'> 
                    <iframe title='Document for AmazonFresh' src="https://drive.google.com/file/d/1d0tWtuhVG2muNdSalIJA7L3_9H0Jwc_c/preview" frameBorder="0" />
                </div>
                <div className='approach-container'>
                    <h3>Approach</h3>
                    <p className='approach-main'>
                        With Amazon’s acquisition of<span><img id='whole-foods' src='../img/projects/fresh/whole-foods-logo.png' alt='Whole Foods' /></span> 
                        and its extension of Amazon <span><img id='amazon-fresh' src='../img/projects/fresh/fresh-logo.png' alt='Fresh' /></span> , the company can launch a line of premade meals.
                    </p>
                    <p>
                        By considering the integral issue of convenience, my solution involves incorporating a subscription meal plan under Amazon that has already established a fast delivery system and a large student population. 
                        From salads to nutrient-packed bowls, the “On-the-Go” line would have a strong emphasis of healthy and balanced foods. This emphasis correlates with the culture and products of Whole Foods, 
                        while the quick 2-hour delivery system can be implemented through AmazonFresh. Additionally, there would be another subscription meal plan feature where AmazonFresh users can have meals delivered weekly with ease. 
                        Therefore, the users can have an optimal experience of quickly receiving nutrient-packed meals without the pain of cooking or cleaning after their meals. 
                    </p>
                </div>
                <div className='initial-design-container'>
                    <h3>Initial Design</h3>
                    <h4>Storyboarding</h4>
                    <p>
                        For the storyboards, the persona I chose was a full-time college student who lived on an urban campus. 
                        The user scenarios revolved around ordering "On-the-Go" Meals on the Amazon Fresh App, subscribing to these meals on the app, and 
                        using Amazon Alexa to order these meals. I wanted to incorporate the mobile app in the user stories to convey the ease and accessibility
                        of ordering the meals. Although I only focused on designing the user interface of the mobile app experience, I thought it was crucial to 
                        show the full experience of the user from the order to the delivery. As for the Amazon Alexa use case, I wanted to showcase the Amazon Echo
                        and its functionality as a personal assistant. If I had more time to develop this project, I would have liked to sketch out a flow chart of 
                        the Alexa commands for ordering the "On-the-Go" Meals. 
                    </p>
                    <div className='design-row'>
                        <figure className='storyboard'>
                            <img src='../img/projects/fresh/fresh-storyboard.png' alt='Storyboard' />
                            <figcaption>
                                <span style={{fontWeight: 'bold'}}>Figure 1: </span> 
                                Storyboard of a college user subscribing to "On-the-Go" meals
                            </figcaption>
                        </figure>
                        <figure className='wireframe'>
                            <div className='wireframe-row'>
                                <img src='../img/projects/fresh/wireframe-1.png' alt='Wireframe of home page' />
                                <img src='../img/projects/fresh/wireframe-2.png' alt='Wireframe of meal page' />
                            </div>
                            <figcaption>
                                <span style={{fontWeight: 'bold'}}>Figure 2: </span> 
                                Paper prototype of the home page and "On-the-Go" meal page
                            </figcaption>
                        </figure>
                    </div>
                    <div className='low-fidelity-container'>
                        <img className='low-fidelity' src='../img/projects/fresh/fresh-low-fidelity.png' alt='Low-fidelity screens' />
                        <div className='low-fidelity-description'>
                            <h4>Low-fidelity Prototype</h4>
                            <p>
                                It was important to maintain the overall layout of the Amazon Fresh app. By keeping the UI of side-scrolling sections,
                                I dedicated an "On-the-Go" Meals section. The meal page would include photos of the meal, the nutrition label, and reviews.
                                Additionally, the page would include options for a one-time purchase or a subscription. These options are located in a toggle box
                                that aligned with the pre-existing subscription option in the Amazon app. The user would be able to review and checkout their carts.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='high-fidelity-container'>
                    <div className='high-fidelity-description'>
                        <h3>High-fidelity Prototype</h3>
                        <p>
                            As for the high-fidelity prototype, I added an initial pop-up message and description page on the "On-the-Go" meal line. I also implemented a "quick add" feature for the meals page. Users can keep track of the meals they have quickly added to their carts at the top of their screen. Lastly, I created a nutrition icon that is attached to the more balanced meal choices.
                                </p>
                        {width > 500 &&
                            <p><span style={{ fontWeight: 'bold' }}>Hover </span>  over the screens to see details.</p>
                        }
                    </div>
                </div>
                <div className='screen-container'>
                    { rows }
                    <a href='https://projects.invisionapp.com/prototype/AmazonFresh-ck22gfle7001v8l0134l2c3d4/play/9d324687' target="_blank" rel="noopener noreferrer">
                        <motion.img
                            className='high-link'
                            src='../img/projects/fresh/high-link.png'
                            alt='Link to invision prototype'
                            initial={{ y: 0 }}
                            animate={{ y: 25 }} 
                            transition={{ y: { yoyo: Infinity, duration: 1.15, ease: "linear" } }}
                            whileHover={{
                                scale: 1.05,
                                rotate: 10,
                                transition: { duration: 0.25 },
                            }} />
                    </a>
                </div>
                <div className='links-container'>
                    <h3>Links</h3>
                    <ul>
                        <li>
                            <span style={{color: '#3abeb3'}}>Pitch Deck: &nbsp;</span>
                            <a href="https://drive.google.com/file/d/1d0tWtuhVG2muNdSalIJA7L3_9H0Jwc_c/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                https://drive.google.com/file/d/1d0tWtuhVG2muNdSalIJA7L3_9H0Jwc_c/view?usp=sharing
                            </a>
                        </li>
                        <li>
                            <span style={{color: '#3abeb3'}}>Prototype: &nbsp;</span>  
                            <a href="https://projects.invisionapp.com/prototype/AmazonFresh-ck22gfle7001v8l0134l2c3d4/play/9d324687" target="_blank" rel="noopener noreferrer">
                                https://projects.invisionapp.com/prototype/AmazonFresh-ck22gfle7001v8l0134l2c3d4/play/9d324687
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='next-container'>
                    <NavLink 
                        id='second-project' 
                        to="/projects/splash" 
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        >
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

export default Fresh;