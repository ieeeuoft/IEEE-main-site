import React from "react";
import styles from "./social.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

const Social = () => (
    <div id="joinus" className={styles["social-containter"]}>
        <ScrollAnimation
            animateOnce={true}
            duration={1}
            offset={80}
            animateIn="fadeInUp"
            className={styles["instagram-heading"]}
        >
            <a href="https://www.instagram.com/ieee_uoft/">Instagram</a>
        </ScrollAnimation>

        <ScrollAnimation
            animateOnce={true}
            duration={1}
            offset={80}
            animateIn="fadeInUp"
            className={styles["instagram-text"]}
        >
            <a href="https://www.instagram.com/ieee_uoft/">
                Like us on Instagram to get the latest updates on our events and
                registration.
            </a>
        </ScrollAnimation>

        <ScrollAnimation
            animateOnce={true}
            duration={1}
            offset={80}
            animateIn="fadeInUp"
            className={styles["discord-heading"]}
        >
            <a href="https://discord.com/invite/7uMVHJtJ6Z">Discord</a>
        </ScrollAnimation>

        <ScrollAnimation
            animateOnce={true}
            duration={1}
            offset={80}
            animateIn="fadeInUp"
            className={styles["discord-text"]}
        >
            <a href="https://discord.com/invite/7uMVHJtJ6Z">
                Join our student branch Discord server to stay up to date with our workshops!
            </a>
        </ScrollAnimation>

        <ScrollAnimation
            animateOnce={true}
            duration={1}
            offset={80}
            animateIn="fadeInUp"
            className={styles["membership-heading"]}
        >
            <a href="https://www.ieee.org/membership/join">
                IEEE Affiliation
            </a>
        </ScrollAnimation>

        <ScrollAnimation
            animateOnce={true}
            duration={1}
            offset={80}
            animateIn="fadeInUp"
            className={styles["membership-text"]}
        >
            <a href="https://www.ieee.org/membership/join">
                The world's largest technical professional organization dedicated to advancing technology for the benefit of humanity!
            </a>
        </ScrollAnimation>
        <a
            href="https://www.instagram.com/ieee_uoft/"
            className={styles["instagram"]}
            target="_blank"
            rel="noopener noreferrer"
        >
            {" "}
        </a>
        <a
            href="https://discord.com/invite/7uMVHJtJ6Z"
            className={styles["discord"]}
            target="_blank"
            rel="noopener noreferrer"
        >
            {" "}
        </a>
        <a
            href="https://www.ieee.org/membership/join"
            className={styles["membership"]}
            target="_blank"
            rel="noopener noreferrer"
        >
            {" "}
        </a>
    </div>
);

export default Social;
