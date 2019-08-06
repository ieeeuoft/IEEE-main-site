import React, { PureComponent } from 'react';
import styles from './upcoming.module.scss';
import UpcomingEvent from './UpcomingEvent/UpcomingEvent';
import * as eventsList from './../../../Assets/Lists/allEvents';


export default class Upcoming extends PureComponent {
    upcoming() { 
        var today = new Date();
        var todayDate = (today.getFullYear() + "/" + ("0" + (today.getMonth()+1)).substring(-2) + "/" + ("0" + today.getDate()).substring(-2));
        var upcomingList = [];
        console.log(todayDate);
        
        for (var i = 0; i < eventsList.allEvents.length; i++) {
            if (eventsList.allEvents[i].date > todayDate) {
                upcomingList.push(eventsList.allEvents[i]);
                console.log(todayDate);
                console.log(eventsList.allEvents[i]);
                if (upcomingList.length === 3) {
                    break
                }
            }
        }
        return upcomingList;
    };


    render() {
        var upcomingList = this.upcoming();
        var upcomingDivClass = "";
        var upcomingClass = "";
        
        if (upcomingList.length === 0) {
            upcomingDivClass = styles.none;
        } else if (upcomingList.length < 3) {
            upcomingClass = styles.two;
        } 

        return (
            <div className={`${styles['upcoming-div']} ${upcomingDivClass}`} onLoad={() => this.upcoming()}>
                <h2 className={styles['upcoming-div-heading']}>Upcoming Events</h2>
                <div className={`${styles['upcoming']} ${upcomingClass}`}>
                    {
                        upcomingList.map((eventItem, i) => {
                            return (
                                <UpcomingEvent EventName={eventItem.EventName} EventDate={eventItem.displayDate} link="http://www.facebook.com/ieeeuoft" />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
