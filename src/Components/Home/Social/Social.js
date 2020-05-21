import React from "react";
import styles from "./social.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

const Social = () => {
    return (
        <div id="joinus" className={styles["social-containter"]}>
            <ScrollAnimation
                animateOnce={true}
                duration={1}
                offset={80}
                animateIn="fadeInUp"
                className={styles["facebook-heading"]}
            >
                <a href="https://www.facebook.com/ieeeuoft/">Facebook</a>
            </ScrollAnimation>

            <ScrollAnimation
                animateOnce={true}
                duration={1}
                offset={80}
                animateIn="fadeInUp"
                className={styles["facebook-text"]}
            >
                <a href="https://www.facebook.com/ieeeuoft/">
                    Like us on Facebook to get the latest updates on our events and
                    registration.
                </a>
            </ScrollAnimation>

            <ScrollAnimation
                animateOnce={true}
                duration={1}
                offset={80}
                animateIn="fadeInUp"
                className={styles["newsletter-heading"]}
            >
                <a href="http://eepurl.com/7spfT">Newsletter</a>
            </ScrollAnimation>

            <ScrollAnimation
                animateOnce={true}
                duration={1}
                offset={80}
                animateIn="fadeInUp"
                className={styles["newsletter-text"]}
            >
                <a href="http://eepurl.com/7spfT">
                    Sign up for our monthly newsletter. Receive information about IEEE
                    UofT events, updates, and other useful stuff right in your inbox!
                </a>
            </ScrollAnimation>

            <ScrollAnimation
                animateOnce={true}
                duration={1}
                offset={80}
                animateIn="fadeInUp"
                className={styles["membership-heading"]}
            >
                <a href="https://www.ieee.org/content/ieee-org/en/membership/join/">
                    IEEE Membership
                </a>
            </ScrollAnimation>

            <ScrollAnimation
                animateOnce={true}
                duration={1}
                offset={80}
                animateIn="fadeInUp"
                className={styles["membership-text"]}
            >
                <a href="https://www.ieee.org/content/ieee-org/en/membership/join/">
                    More than 80% discount for IEEE memberships and receive various
                    exclusive benefits including job opportunities!
                </a>
            </ScrollAnimation>
            {/*https://goo.gl/forms/dyVbc0fyJAZJ0Bbv1*/}
            <a
                href="https://www.facebook.com/ieeeuoft/"
                className={styles["facebook"]}
                target="_blank"
            ></a>
            <a
                href="http://eepurl.com/7spfT"
                className={styles["newsletter"]}
                target="_blank"
            ></a>
            <a
                href="https://www.ieee.org/membership/join"
                className={styles["membership"]}
                target="_blank"
            ></a>
        </div>
    );
};

export default Social;
