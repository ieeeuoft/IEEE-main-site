import React from "react";
import styles from "./upcomingEvent.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

const UpcomingEventContent = ({ name, date }) => {
    let imgSrc;
    try {
        imgSrc = require("./../../../../Assets/Images/events/" + name + ".jpg");
    } catch (err) {
        imgSrc = require("./../../../../Assets/Images/events/Workshops.jpg");
    }

    return (
        <>
            <div className={styles["upcoming-event-img"]}>
                <div className={styles["Crop"]}>
                    <img src={imgSrc} alt={name} className={styles["Crop-src"]} />
                </div>
            </div>
            <h3 className={styles["upcoming-event-name"]}>{name}</h3>
            <p className={styles["upcoming-event-date"]}>{date}</p>
        </>
    );
};
const UpcomingEvent = ({ link, EventName, EventDate }) => (
    <ScrollAnimation
        animateOnce={true}
        duration={1}
        offset={80}
        animateIn="fadeInUp"
        className={`${styles["upcoming-event"]} ${link && styles["upcoming-event-hover"]}`}
    >
        {link === undefined && (
            <div style={{ cursor: "default" }}>
                <UpcomingEventContent name={EventName} date={EventDate} />
            </div>
        )}
        {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
                <UpcomingEventContent name={EventName} date={EventDate} />
            </a>
        )}
    </ScrollAnimation>
);

export default UpcomingEvent;
