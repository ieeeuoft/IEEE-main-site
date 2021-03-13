import React from "react";
import styles from "./footer.module.scss";
import Copyright from "../../General/Copyright/Copyright";

const Footer = () => (
    <footer className={`${styles.footer} ${styles.smallFooter}`}>
        <Copyright />
    </footer>
);

export default Footer;
