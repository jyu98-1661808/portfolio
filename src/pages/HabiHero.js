import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';
import '../styles/Projects.scss';

function HabiHero() {
    document.body.style.overflowY = 'visible'

    return (
        <div id='Habi-hero'>
            <h1>Habi Hero</h1>
            <h3>Winter'20-Spring'20</h3>
            <div className='movie-container'>
                <iframe src="https://www.youtube.com/embed/SnWm_Rk39J4" frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <div className='about-container'>
                <div className='description-container'>
                    <h3>About</h3>
                    <p className='about-main'>
                        <span><img src='../img/projects/habihero/outlined-logo.png' alt='Habi Hero' /></span> is a <span style={{ color: "#8480B8", fontWeight: "bold" }}>math-based learning game</span>, helping <span style={{ color: "#92BAA4", fontWeight: "bold" }}>1st graders </span> 
                        overcome their numeracy challenges through motivation as they <span style={{ color: "#2E6D8D", fontWeight: "bold" }}>save virtual endangered animals</span>.
                    </p>
                    <p className='about-description'>
                        From basic addition to subtraction, the application utilizes gamification with a focus on saving endangered animals and their habitats. 
                        Each animal represents a topic in the math curricula that is based on the common core standards. Players must solve a variety of 
                        math problems pertaining to that topic in order to restore the animal's threatened environment. From tigers to pandas, 
                        students can progress through each level of the game as they encounter a variety of endangered animals. 
                        Our gameplay allows students to solve relevant math problems that relate to the environment. 
                        By eliminating the threats in the game environment, correct answers give the student the opportunity to be a hero!
                        Habihero aims to instill conservational values at an early age, so future generations can challenge the environmental issues that affect our beloved animals.
                    </p>
                </div>
                <div className='tools-container'>
                    <h3>Tools Used</h3>
                </div>
            </div>
            <div className='research-container'>
                <h3>Research</h3>
                <h4>Background</h4>
                <p>
                    In the first grade, students are stepping into math education and are introduced to fundamental math concepts, such as addition and subtraction. 
                    With approximately 80,000 first grade students enrolled in Washington state in 2019, most schools have developed their math curriculum around the Common Core Standard. 
                    It is understandable that some first graders struggle with the abstract theories of math. This hardship may be attributed to a variety of problems like a lack of 
                    engagement or dyscalculia. However, first grade educators often times allow the student to continue onto the next grade, despite the student’s inability to meet the standard. 
                    As the student progresses onwards, he or she will continue to face difficulties to grasp the increasingly challenging math concepts. From 3rd to 10th grade, 
                    20% of students fail to meet the Common Core Standard set by Washington state. With math being a general requirement for education,
                    it is critical for students to have a strong foundation of math concepts at an early age, so that they can succeed in their future schoolwork. 
                </p>
                <h4>Information Problem</h4>
                <p>
                    One aspect of the problem is student engagement. As students respond well to gamification or game-based learning, 
                    a solution could be a math app that positions problems in the form of a game.  Another aspect of the problem is broadening the student’s toolset in solving math problems. 
                    A technology solution would allow the student to have a greater amount of randomized problems that require the user to solve them in different ways. 
                    Lastly, students may have trouble acquiring resources outside of school that will help fortify their math education. 
                    An online solution would allow them to have access to problems anywhere.
                </p>
                <div id='habihero-paper'> 
                    <iframe src="https://drive.google.com/file/d/19JYGAFIVOcd920waF8Ibto050LlBl9hd/preview" />
                </div>
            </div>
            <div className='design-container'>
                <h3>Design</h3>
                <h4>Value-Sensitive Approach</h4>
                <h4>Process</h4>
                <h4>Solution</h4>
            </div>
            <div className='links-container'>
                <h3>Links</h3>
            </div>
        </div>
    );
}

export default HabiHero;