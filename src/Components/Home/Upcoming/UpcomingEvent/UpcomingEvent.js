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
            <a href={link} target="_blank" className={styles['upcoming-event']}>
                <div className={styles['upcoming-event-img']}>
                    <div className={styles['upcoming-event-img-crop']}>
                        <img src={require('./../../../../Assets/Images/events/' + EventName + '.png')} alt={EventName} className={styles['upcoming-event-img-crop-src']}/>
                    </div>
                </div>
                <h3 className={styles['upcoming-event-name']}>{EventName}</h3>
                <p className={styles['upcoming-event-date']}>{EventDate}</p>
            </a>
        );
    }
}


