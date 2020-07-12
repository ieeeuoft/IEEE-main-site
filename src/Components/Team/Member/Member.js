import React from "react";
import styles from "./member.module.scss";
import Email from "./../../../Assets/Images/team/icons/email.svg";
import LinkedIn from "./../../../Assets/Images/team/icons/linkedin.svg";

const Member = ({ fullName, position, year, emailLink, LinkedInLink, baby, puppy }) => {
    let extension = "/";
    if (baby) {
        extension = "/babies/";
    } else if (puppy) {
        extension = "/puppies/";
    } else if (!puppy && !baby) {
        extension = "/";
    }

    let imgSrc;
    imgSrc = require("./../../../Assets/Images/team/" +
        year +
        extension +
        fullName +
        ".jpg");

    return (
        <div className={styles["card"]}>
            <div className={styles["card-crop"]}>
                <img className={styles["card-crop-img"]} src={imgSrc} alt={fullName} />
            </div>
            <p className={styles["card-title"]}>{position}</p>
            <p className={styles["card-name"]}>{fullName}</p>
            <div className={styles["card-btn"]}>
                {emailLink && (
                    <a
                        href={`mailto:${emailLink}`}
                        className={styles["card-btn-email"]}
                    >
                        <img
                            src={Email}
                            className={styles["card-btn-email-icon"]}
                            alt="Email"
                        />
                    </a>
                )}
                {LinkedInLink && (
                    <a href={LinkedInLink} className={styles["card-btn-linkedin"]}>
                        <img
                            src={LinkedIn}
                            className={styles["card-btn-linkedin-icon"]}
                            alt="LinkedIn"
                        />
                    </a>
                )}
            </div>
        </div>
    );
};

export default Member;
