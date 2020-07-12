import React from "react";
import styles from "./copyright.module.scss";

const getYear = () => {
    let today = new Date();
    return today.getFullYear();
};

const Copyright = () => {
    let year = getYear();
    return (
        <p
            className={styles["copyright"]}
            onLoad={() => {
                getYear();
            }}
        >
            {"© " + year + " IEEE University of Toronto Student Branch"}
        </p>
    );
};

export default Copyright;
