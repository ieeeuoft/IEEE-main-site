import React, { PureComponent } from 'react';
import styles from './upcoming.module.scss';
import UpcomingEvent from './UpcomingEvent/UpcomingEvent';
import * as eventsList from './../../../Assets/Lists/allEvents';

export default class Upcoming extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { stateIndex: 0, lenList: eventsList.allEvents.length }
    }

    upcoming() { };
    //  {
    //     var today = new Date();
    //     var todayDate = (today.getMonth()+1) + ' '+today.getDate() + ', ' + today.getFullYear();
    //     var d = new Date(eventsList.allEvents);

    //     if (todayDate > )
    // }
    //     //     d1 <  d2; // true
    //     // d1 <= d2; // true
    //     // d1 >  d2; // false
    //     // d1 >= d2; // false

    //     return (
    //         <div className={styles['upcoming-div']} onLoad={() => this.upcoming()}>
    //             <h2 className={styles['upcoming-div-heading']}>Upcoming Events</h2>
    //             <div className={styles['upcoming']}>
    //                 <>
    //                     {eventsList.allEvents.map((eventItem, i) => {
    //                         return (
    //                             { stateIndex === i &&
    //                             <UpcomingEvent EventName={eventItem.EventName} EventDate={eventItem.date} link="www.facebook.com" />
    //                             }
    //                         // } {stateIndex === i && 
    //                         //     <UpcomingEvent EventName={eventItem.EventName} EventDate={eventItem.EventDate} link="www.facebook.com" />
    //                         // } {stateIndex === i && 
    //                         //     <UpcomingEvent EventName={eventItem.EventName} EventDate={eventItem.EventDate} link="www.facebook.com" />
    //                         // }
    //                     )
    //                     })}
    //                 </>
    //             </div>
    //         </div>
    //     )
    // }
    render() {
        const { stateIndex } = this.state;


        return (
            <>
            <div className={styles['upcoming-div']} onLoad={() => this.upcoming()}>
                <h2 className={styles['upcoming-div-heading']}>Upcoming Events</h2>
                <div className={styles['upcoming']}>
                {
                    eventsList.allEvents.map((eventItem, i) => {
                        return (
                            <div className={styles['upcoming-event']}>
                                {stateIndex === i &&
                                    <UpcomingEvent EventName={eventItem.EventName} EventDate={eventItem.date} link="www.facebook.com" />
                                }
                                {stateIndex === i-1 &&
                                    <UpcomingEvent EventName={eventItem.EventName} EventDate={eventItem.date} link="www.facebook.com" />
                                }
                                {stateIndex === i-2 &&
                                    <UpcomingEvent EventName={eventItem.EventName} EventDate={eventItem.date} link="www.facebook.com" />
                                }
                            </div>
                        )
                    })
                }
            </div>
            </div>
            </>
        )
    }
}
