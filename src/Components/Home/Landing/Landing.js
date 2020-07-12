import React from "react";
import styles from "./landing.module.scss";
import skylineOutline from "./../../../Assets/Images/skyline/skyline-outline.svg";
import skylineSolid from "./../../../Assets/Images/skyline/skyline-solid.svg";

const Landing = () => (
    <div style={{ overflowX: "hidden" }}>
        <div className={styles["blue-background"]}>
            <div className={styles["heading"]}>
                <h1 className={styles["heading-title"]}>IEEE</h1>
                <h2 className={styles["heading-subtitle"]}>
                    University of Toronto
                    <br />
                    Student Branch
                </h2>
            </div>
            <img src={skylineSolid} alt="" className={styles["skyline-solid"]} />
        </div>

        <div className={styles["heading-blue"]}>
            <h2 className={styles["heading-blue-title"]}>IEEE</h2>
            <h2 className={styles["heading-blue-subtitle"]}>
                University of Toronto Student Branch
            </h2>
        </div>
        <div className={styles["no-background"]} style={{ overflowX: "hidden" }}>
            <img src={skylineOutline} alt="" className={styles["skyline-outline"]} />
        </div>
    </div>
);

export default Landing;
