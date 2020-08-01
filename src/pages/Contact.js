import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.scss';

function Contact() {
    return (
        <div id='Contact'>
            <motion.div className='contact-container' 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.25, duration: 2 }}>
                <h1>Let's Create.</h1>
                <p>I'm always ready for another project,</p>
                <p>email me at <a href="mailto:jina.yu98@gmail.com">jina.yu98@gmail.com</a></p>
                <p>or connect with me on &nbsp;
                    <a href="https://github.com/jyu98-1661808/">
                        <span className='github'>
                            <motion.img 
                                src='../img/contact/github-icon.png' alt='github icon'
                                whileHover={{
                                    rotate: 360,
                                    transition: { duration: 0.75 },
                                }}
                            />
                        </span>
                    </a>
                </p>
            </motion.div>
            <motion.img 
                className='left-hand' 
                src='../img/contact/left-hand.png' alt='left hand' 
                initial={{ x: '-50vw' }} 
                animate={{ x: 0 }} 
                transition={{ x: { ease: "easeOut", duration: 1 } }}
            />
            <motion.img 
                className='right-hand' 
                src='../img/contact/right-hand.png' 
                alt='right hand' 
                initial={{ x: '50vw' }} 
                animate={{ x: 0 }} 
                transition={{ delay: 0.35, x: { ease: "easeOut", duration: 1 } }}
            />
        </div>
    );
}

export default Contact;