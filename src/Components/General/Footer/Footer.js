import React from "react";
import styles from "./footer.module.scss";
import Copyright from "../../General/Copyright/Copyright";

const Footer = () => {
    return (
        <footer className={`${styles["footer"]} ${styles["small-footer"]}`}>
            <Copyright />
            <a
                className={`${styles["footer-copyright"]} ${styles["email"]}`}
                href="mailto:uoft@ieee.org"
            >
                uoft@ieee.org
            </a>
        </footer>
    );
};

export default Footer;
