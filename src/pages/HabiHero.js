import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { motion } from 'framer-motion';
import '../styles/HabiHero.scss';

function HabiHero() {
    document.body.style.overflowY = 'visible'
    document.body.style.overflowX = 'hidden'

    const [isHovered, setHovered] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    var settings = {}

    if (width < 500) {
        settings = {
            arrows: false,
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        };
    } else {
        settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        };
    }

    // runs once when page loads
    useEffect(() => {
        window.scrollTo(0, 0)

        let timer = setTimeout(() => {
            document.getElementById('Loading-1').style.top = '-200%'
            document.getElementById('Habi-hero-loaded').style.display = 'flex'
        }, 1250)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    // runs when screen width changes
    useEffect(() =>
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)

            if (width < 500) {
                settings = {
                    arrows: false,
                    infinite: true,
                    speed: 900,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true
                };
            } else {
                settings = {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true
                };
            }
        })
        , [width])

    return (
        <div id='Habi-hero'>
            <div id='Loading-1'>
                <img src='../img/loaders/loading-1-icon.png' alt='Loading first icon' />
            </div>
            <div id='Habi-hero-loaded'>
                <h1>Habi Hero</h1>
                <h3>Winter'20-Spring'20</h3>
                <div className='movie-container'>
                    <iframe title='Habi Hero Demo Video'
                        src="https://www.youtube.com/embed/SnWm_Rk39J4" frameBorder="0"
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
                        <div className='logo-container'>
                            <img id='react' src='../img/projects/logos/react-logo.png' alt='react logo' />
                            <img id='kotlin' src='../img/projects/logos/kotlin-logo.png' alt='kotlin logo' />
                            <img id='after-effects' src='../img/projects/logos/after-effects-logo.png' alt='after effects logo' />
                            <img id='digital-ocean' src='../img/projects/logos/digital-ocean-logo.svg' alt='digital ocean logo' />
                            <img id='figma' src='../img/projects/logos/figma-logo.png' alt='figma logo' />
                        </div>
                        <p><span style={{ fontWeight: 'bold' }}>From left to right:</span> React, Kotlin (initially), After Effects, Digital Ocean, Figma</p>
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
                        <iframe title='Habi Hero: An Online Math Resource for First Grade Students' src="https://drive.google.com/file/d/19JYGAFIVOcd920waF8Ibto050LlBl9hd/preview" />
                    </div>
                </div>
                <div className='design-container'>
                    <h3>Design</h3>
                    <div className='wireframe-container'>
                        <img className='wireframe' src='../img/projects/habihero/paper-wireframe.png' alt='paper wireframe for Habi Hero' />
                        <div className='wireframe-description'>
                            <h4>Paper Wireframe</h4>
                            <p>
                                In our initial wireframe, users are first taken to a level selection screen where they can choose the Common Core math standard they wish to practice and the endangered animal they will help save.
                        </p>
                            <p>
                                Upon selecting the level, the user is taken to the endangered animal’s environment where they will see various real-world threats to endangered animals.
                                When the user clicks on a threat within the environment a modal will appear with a math problem that they must solve in order to eliminate the threat from the game’s environment.
                                After correctly answering the problem the environmental threat will then disappear from the level’s environment and the user may select and solve other threats until they all are completed.
                        </p>
                        </div>
                    </div>
                    <div className='low-fidelity-container'>
                        <img className='low-fidelity' src='../img/projects/habihero/low-fidelity.png' alt='low-fidelity prototype for Habi Hero' />
                        <div className='low-fidelity-description'>
                            <h4>Low-fidelity Prototype</h4>
                            <p>
                                The main additions that we made to our design in this stage was the addition of a leveling progression and a coin reward system.
                                A leveling system was added to the design to help promote the values of motivation and engagement for first grade users; incentivizing them to continue playing the game in order to level up.
                                Finally, we decided to incorporate a coin reward system in our design to further engage students and maintain their motivation in practicing math. This coin system acts to positively reinforce students
                                to complete math problems so that they may gain in game rewards. Lastly, we decided to opt for a writing-to-text input to reinforce the practice of transcribing numbers.
                                As for the graphics, we used temporary stock images for our characters.
                        </p>
                        </div>
                    </div>
                    <h4>Visual Elements</h4>
                    <p>
                        It was important for us to determine branding that was both appealing to 1st graders and relevant to our secondary mission of environmental impact.
                        We decided to use a color palette that was soft, but simultaenously bright. Shades of green and blue helped tie in our theme of conservation.
                        As for the game characters, it was important for us to keep as much of the endangered animal’s physical features as realistic as possible.
                        We did not want our animal characters to be caricatures and disassociate the Habi Hero environment from the actual world.
                        For our Habi Heroes, we opted for a simple hero design. Both gender and race could be adjusted when creating an account.
                </p>
                    <div className='visual-container'>
                        <div className='visual-columns'>
                            <figure id='habihero-colors'>
                                <img src='../img/projects/habihero/colors.svg' alt='Habi Hero color palette' />
                                <figcaption><span style={{ fontWeight: 'bold' }}>Figure 1:</span> Color Palette</figcaption>
                            </figure>
                            <div className='visual-rows'>
                                <figure id='habihero-logo'>
                                    <img src='../img/projects/habihero/habihero-logo.png' alt='Habi Hero logo' />
                                    <figcaption><span style={{ fontWeight: 'bold' }}>Figure 2:</span> Habi Hero logo</figcaption>
                                </figure>
                                <figure id='habihero-icon'>
                                    <img src='../img/projects/habihero/habihero-icon.png' alt='Habi Hero icon' />
                                    <figcaption><span style={{ fontWeight: 'bold' }}>Figure 3:</span> Habi Hero icon</figcaption>
                                </figure>
                            </div>
                        </div>
                        <figure>
                            <img id='characters' src='../img/projects/habihero/habihero-characters.png' alt='Habi Hero character, Lily Panda, Habi-coin' />
                            <figcaption><span style={{ fontWeight: 'bold' }}>Figure 4:</span> Habi Hero character, Lily Panda, and Habi-coin</figcaption>
                        </figure>
                    </div>
                    <h4>High-fidelity Prototype</h4>
                    <p>
                        Upon reviewing our investigations of the stakeholders' values, value tensions, and value scenario, we made several additions and changes to our design.
                        We decided that Habi Hero should also incorporate a way for teachers to use our design in order to better promote the values of effectiveness, accessibility, and customization in practicing Common Core Standards.
                        Teachers can create and customize lessons, as well as, view student progress and results. In this final prototype, we also gave students ways to customize their hero avatar to further promote engagement with the game.
                        By redeeming their coins through additional customizations for their hero avatar, our game gives them greater motivation to continue playing.
                    </p>
                    <div className='carousel'>
                        <Slides settings={ settings } />
                    </div>
                </div>
                <div className='links-container'>
                    <h3>Links</h3>
                    <ul>
                        <li>
                            <span style={{ color: '#292929' }}>Github Repository: &nbsp;</span>
                            <a href="https://github.com/jyu98-1661808/capstone2020" target="_blank" rel="noopener noreferrer">
                                https://github.com/jyu98-1661808/capstone2020
                        </a>
                        </li>
                        <li>
                            <span style={{ color: '#292929' }}>Landing Page: &nbsp;</span>
                            <a href="https://jyu98-1661808.github.io/capstone2020/" target="_blank" rel="noopener noreferrer">
                                https://jyu98-1661808.github.io/capstone2020
                        </a>
                        </li>
                        <li>
                            <span style={{ color: '#292929' }}>Pitch Deck: &nbsp;</span>
                            <a href="https://drive.google.com/file/d/1EGzGdSX0BvIwRmu-XbCayvh9d28VO5R-/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                https://drive.google.com/file/d/1EGzGdSX0BvIwRmu-XbCayvh9d28VO5R-/view?usp=sharing
                        </a>
                        </li>
                        <li>
                            <span style={{ color: '#292929' }}>Poster Page: &nbsp;</span>
                            <a href="https://drive.google.com/file/d/1mcxTEdq7NL_BfN0iMd1nVTC3hMIe0BeD/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                https://drive.google.com/file/d/1mcxTEdq7NL_BfN0iMd1nVTC3hMIe0BeD/view?usp=sharing
                        </a>
                        </li>
                        <li>
                            <span style={{ color: '#292929' }}>Research Paper: &nbsp;</span>
                            <a href="https://drive.google.com/file/d/19JYGAFIVOcd920waF8Ibto050LlBl9hd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                https://drive.google.com/file/d/19JYGAFIVOcd920waF8Ibto050LlBl9hd/view?usp=sharing
                        </a>
                        </li>
                    </ul>
                </div>
                <div className='next-container'>
                    <NavLink
                        id='first-project'
                        to="/projects/fresh"
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
        </div>
    );
}

function Slides({ settings }) {
    return (
        <Slider {...settings}>
            <img src='../img/projects/habihero/game-main.png' alt='Habi Hero game main page' />
            <img src='../img/projects/habihero/game-environment.png' alt='Habi Hero tiger environment' />
            <img src='../img/projects/habihero/game-modal.png' alt='Habi Hero game modal' />
            <img src='../img/projects/habihero/game-shop.png' alt='Habi Hero game shop' />
            <img src='../img/projects/habihero/teacher-class.png' alt='Habi Hero teacher class view' />
            <img src='../img/projects/habihero/teacher-lessons.png' alt='Habi Hero teacher lesson view' />
        </Slider>
    )
}

export default HabiHero;