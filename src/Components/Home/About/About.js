import React from 'react'
import { Link } from 'react-router-dom';
import styles from './about.module.scss'

import computer from './../../../Assets/Images/misc/computer.png'
import electronics from './../../../Assets/Images/misc/electronics.png'


const About = () => {

    return (
        <div className={styles['about-containter']} id="about">
            <h2 className={styles['computer-heading']}>Computer Chapter</h2>
            <p className={styles['computer-text']}>Focusing on computer science and tech, we work hard to bring coding competitions, software workshops, industry tours and technical talks to the students at UofT. Our aim is to promote industry networking and career professionalism by coordinating with technology companies to provide exposure to new global innovations.</p>
            <img src={computer} className={styles['computer-img']} />
            <div className={styles['computer']}></div>
            <div className={styles['about']}></div>
            <h2 className={styles['about-heading']}>About Us</h2>
            <p className={styles['about-text']}>IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. The UofT Student Branch consists of two chapters: Computer and Electronics. We host numerous events throughout the year, which are designed to help students reach their personal and professional development goals.</p>
            <div className={styles['about-btn-container']}>
                <Link to={'/team'}>
                    <button className={styles['about-btn-container-button']}>our team</button>
                </Link>

                <Link to={'./www.ieee.org'}>
                    <button className={styles['about-btn-container-button']}>visit ieee.org</button>
                </Link>
                
                
            </div>
            <div className={styles['electronics']}></div>
            <h2 className={styles['electronics-heading']}>Electronics Chapter</h2>
            <p className={styles['electronics-text']}>The Electronics Chapter deals with everything hardware, from embedded systems to analog circuits. We aim to help students gain technical expertise and industry exposure in these fields. Among our events are industry tours, the hardware certification workshop, and our flagship, MakeUofT.</p>
            <img src={electronics} className={styles['electronics-img']} />
        </div>
    )
}

export default About;


