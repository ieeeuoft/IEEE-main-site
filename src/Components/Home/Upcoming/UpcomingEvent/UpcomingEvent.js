import React, { PureComponent } from 'react';
import styles from './upcomingEvent.module.scss'
import imgSrc from './../../../../Assets/Images/events/MakeUofT.png';

export default class UpcomingEvent extends PureComponent {
    render() {
        const {
            link, 
            // img, 
            EventName,
            EventDate
        } = this.props


        return (
            <div>
                <div className={styles['upcoming-event-img']}>
                    <a className={styles['upcoming-event-img-crop']} href={link} target="_blank">
                        <img src={require('./../../../../Assets/Images/events/' + EventName + '.png')} alt={EventName} className={styles['upcoming-event-img-crop-src']}/>
                    </a>
                </div>
                <h3 className={styles['upcoming-event-name']}>{EventName}</h3>
                <p className={styles['upcoming-event-date']}>{EventDate}</p>
            </div>
        );
    }
}


