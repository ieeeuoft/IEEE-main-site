import React from "react";
import styles from "./copyright.module.scss";

const getYear = () => {
    let today = new Date();
    return today.getFullYear();
};

const Copyright = () => (
    <p className={styles.copyright}>
        {"© " + getYear() + " IEEE University of Toronto Student Branch"}
    </p>
);

export default Copyright;
