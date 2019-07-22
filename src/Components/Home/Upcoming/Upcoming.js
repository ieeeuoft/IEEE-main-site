import React, { PureComponent } from 'react';
import styles from './upcoming.module.scss';
import UpcomingEvent from './UpcomingEvent/UpcomingEvent';

export default class Upcoming extends PureComponent {
    render() {
        return (
            <div className={styles['upcoming-div']}>
                <h2 className={styles['upcoming-div-heading']}>Upcoming Events</h2>
                <div className={styles['upcoming']}>
                    <UpcomingEvent EventName="Blah" EventDate="Blah" img="MakeUofT" link="www.facebook.com" />
                    <UpcomingEvent EventName="Blah" EventDate="Blah" img="MakeUofT" link="www.facebook.com" />
                    <UpcomingEvent EventName="Blah" EventDate="Blah" img="MakeUofT" link="www.facebook.com" />
                </div>
            </div>
        );
    }
}