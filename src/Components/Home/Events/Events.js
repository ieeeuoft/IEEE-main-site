import React, { PureComponent } from 'react';
import styles from './events.module.scss'
import EventEvent from './EventEvent/EventEvent'

export default class Events extends PureComponent {
    render() {
        return (
            <div className={styles['events-div']}>
                <h2 className={styles['events-div-heading']}>All Events</h2>

                <div className={styles['carousel events" id="events-carousel']}>  
                    <EventEvent EventName="Blah" EventDate="Blah" img="MakeUofT" link="www.facebook.com" />
                    <EventEvent EventName="Blah" EventDate="Blah" img="MakeUofT" link="www.facebook.com" />
                    <EventEvent EventName="Blah" EventDate="Blah" img="MakeUofT" link="www.facebook.com" />
                </div>
            </div>
        );
    }
}