import React, { PureComponent } from 'react';
import styles from './eventEvent.module.scss'
// import imgSrc from './../../../../Assets/Images/events/MakeUofT.png';

export default class EventEvent extends PureComponent {
    render() {
        const {
            EventLink,
            EventName,
            EventDate
        } = this.props

        // let imgSrc = './../../../../Assets/Images/events/' + img + '.png';

        return (
            <a href={"http://" + EventLink} target="_blank" className={styles['events-event']} >
                <div className={styles['events-event-img']}>
                    <div className={styles['events-event-img-crop']}>
                        <div className={styles['dark-gradient']}></div>
                        <img src={require('./../../../../Assets/Images/events/' + EventName + '.png')} alt={EventName} className={styles['events-event-img-crop-src']}/>
                    </div>
                </div>
                <div className={styles['events-event-text']}>
                    <h3 className={styles['events-event-text-name']}>{EventName}</h3>
                    <p className={styles['events-event-text-date']}>{EventDate}</p>
                </div>
            </a>
        );
    }
}
