import React from "react";
import styles from "./upcoming.module.scss";
import UpcomingEvent from "./UpcomingEvent/UpcomingEvent";
import allEvents from "./../../../Assets/Lists/allEvents";

const upcomingEvents = () => {
    let today = new Date();
    let todayDate =
        today.getFullYear() +
        "/" +
        ("0" + (today.getMonth() + 1)).slice(-2) +
        "/" +
        ("0" + today.getDate()).slice(-2);
    let upcomingList = [];

    for (let i = 0; i < allEvents.length; i++) {
        if (allEvents[i].date > todayDate) {
            upcomingList.push(allEvents[i]);
            if (upcomingList.length === 3) {
                break;
            }
        }
    }
    return upcomingList;
};

const Upcoming = () => {
    let upcomingList = upcomingEvents();
    let upcomingClass = "";
    let recentHighlights = upcomingList.length === 0 ? true : false;
    if (recentHighlights) {
        // 3 events where the highlightEvent flag is true in allEvents.js
        upcomingList = allEvents.filter((event) => event.highlightEvent).slice(0, 3);
    }

    if (upcomingList.length < 3) {
        upcomingClass = styles.two;
    }

    return (
        <div
            id="events"
            className={`${styles.upcomingDiv}`}
            onLoad={() => upcomingEvents()}
        >
            <h2 className={styles.upcomingDivHeading}>
                {recentHighlights ? "Last Year's Highlights" : "Currently Happening"}
            </h2>
            <div className={`${styles.upcoming} ${upcomingClass}`}>
                {upcomingList.map((eventItem, i) => {
                    return (
                        <UpcomingEvent
                            EventName={eventItem.EventName}
                            EventDate={eventItem.displayDate}
                            link={eventItem.link}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Upcoming;
