import React from "react";
import { Link } from "react-router-dom";
import styles from "./about.module.scss";
import computer from "./../../../Assets/Images/misc/computer.png";
import electronics from "./../../../Assets/Images/misc/electronics.png";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
    return (
        <div id="about" className={styles["about-containter"]}>
            <ScrollAnimation
                animateOnce={true}
                duration={1}
                offset={70}
                animateIn="fadeInUp"
                className={styles["computer-heading"]}
            >
                <h2>Computer Chapter</h2>
            </ScrollAnimation>

            <ScrollAnimation
                animateOnce={true}
                duration={1}
                offset={70}
                animateIn="fadeInUp"
                className={styles["computer-text"]}
            >
                <p>
                    Focusing on computer science and tech, we work hard to bring coding
                    competitions, software workshops, industry tours and technical talks
                    to the students at UofT. Our aim is to promote industry networking
                    and career professionalism by coordinating with technology companies
                    to provide exposure to new global innovations.
                </p>
            </ScrollAnimation>

            <ScrollAnimation
                animateOnce={true}
                duration={1}
                offset={70}
                animateIn="fadeInUp"
                className={styles["computer-img"]}
            >
                <img src={computer} alt="Computer Chapter" />
            </ScrollAnimation>

            <ScrollAnimation
                animateOnce={true}
                duration={1}
                offset={70}
                animateIn="fadeInUp"
                className={styles["about-heading"]}
            >
                <h2>About Us</h2>
            </ScrollAnimation>

            <ScrollAnimation
                animateOnce={true}
                duration={1}
                offset={70}
                animateIn="fadeInUp"
                className={styles["about-text"]}
            >
                <p>
                    IEEE is the world's largest technical professional organization
                    dedicated to advancing technology for the benefit of humanity. The
                    UofT Student Branch consists of two chapters: Computer and
                    Electronics. We host numerous events throughout the year, which are
                    designed to help students reach their personal and professional
                    development goals.
                </p>
            </ScrollAnimation>

            <ScrollAnimation
                animateOnce={true}
                duration={1}
                offset={70}
                animateIn="fadeInUp"
                className={styles["about-btn-scroll"]}
            >
                <div className={styles["about-btn-scroll-container"]}>
                    <Link to={"/team"}>
                        <button className={styles["about-btn-scroll-container-button"]}>
                            our team
                        </button>
                    </Link>

                    <a
                        href="http://www.ieee.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className={styles["about-btn-scroll-container-button"]}>
                            visit ieee.org
                        </button>
                    </a>
                </div>
            </ScrollAnimation>

            <ScrollAnimation
                animateOnce={true}
                duration={1}
                offset={70}
                animateIn="fadeInUp"
                className={styles["electronics-heading"]}
            >
                <h2>Electronics Chapter</h2>
            </ScrollAnimation>

            <ScrollAnimation
                animateOnce={true}
                duration={1}
                offset={70}
                animateIn="fadeInUp"
                className={styles["electronics-text"]}
            >
                <p>
                    The Electronics Chapter deals with everything hardware, from
                    embedded systems to analog circuits. We aim to help students gain
                    technical expertise and industry exposure in these fields. Among our
                    events are industry tours, the hardware certification workshop, and
                    our flagship, MakeUofT.
                </p>
            </ScrollAnimation>

            <ScrollAnimation
                animateOnce={true}
                duration={1}
                offset={70}
                animateIn="fadeInUp"
                className={styles["electronics-img"]}
            >
                <img src={electronics} alt="Electronics Chapter" />
            </ScrollAnimation>

            <div className={styles["computer"]}></div>
            <div className={styles["about"]}></div>
            <div className={styles["electronics"]}></div>
        </div>
    );
};

export default About;
