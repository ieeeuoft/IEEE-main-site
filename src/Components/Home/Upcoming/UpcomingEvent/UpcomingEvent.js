import React from "react";
import styles from "./upcomingEvent.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

const UpcomingEvent = ({ link, EventName, EventDate }) => {
    let EventNameChar = EventName;
    if (EventNameChar === "Hello, Con") {
        EventNameChar = "Hello, Con!";
    }

    return (
        <>
            {link === undefined && (
                <ScrollAnimation
                    animateOnce={true}
                    duration={1}
                    offset={80}
                    animateIn="fadeInUp"
                    className={styles["upcoming-event"]}
                >
                    <div style={{ cursor: "default" }}>
                        <div className={styles["upcoming-event-img"]}>
                            <div className={styles["upcoming-event-img-crop"]}>
                                <img
                                    src={require("./../../../../Assets/Images/events/" +
                                        EventName +
                                        ".JPG")}
                                    alt={EventNameChar}
                                    className={styles["upcoming-event-img-crop-src"]}
                                />
                            </div>
                        </div>
                        <h3 className={styles["upcoming-event-name"]}>
                            {EventNameChar}
                        </h3>
                        <p className={styles["upcoming-event-date"]}>{EventDate}</p>
                    </div>
                </ScrollAnimation>
            )}

            {link && (
                <ScrollAnimation
                    animateOnce={true}
                    duration={1}
                    offset={80}
                    animateIn="fadeInUp"
                    className={styles["upcoming-event"]}
                >
                    <a
                        href={"http://" + link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className={styles["upcoming-event-img"]}>
                            <div className={styles["upcoming-event-img-crop"]}>
                                <img
                                    src={require("./../../../../Assets/Images/events/" +
                                        EventName +
                                        ".JPG")}
                                    alt={EventNameChar}
                                    className={styles["upcoming-event-img-crop-src"]}
                                />
                            </div>
                        </div>
                        <h3 className={styles["upcoming-event-name"]}>
                            {EventNameChar}
                        </h3>
                        <p className={styles["upcoming-event-date"]}>{EventDate}</p>
                    </a>
                </ScrollAnimation>
            )}
        </>
    );
};

export default UpcomingEvent;
