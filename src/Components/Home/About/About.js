import React from "react";
import { Link } from "react-router-dom";
import styles from "./about.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => (
    <div id="about" className={styles["about"]}>
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
                dedicated to advancing technology for the benefit of humanity. We host
                numerous events throughout the year, which are designed to help students
                reach their personal and professional development goals.
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

                <a href="http://www.ieee.org" target="_blank" rel="noopener noreferrer">
                    <button className={styles["about-btn-scroll-container-button"]}>
                        visit ieee.org
                    </button>
                </a>
            </div>
        </ScrollAnimation>
    </div>
);

export default About;
