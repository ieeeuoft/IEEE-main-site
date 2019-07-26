import React, { PureComponent } from 'react';
import styles from './sponsor.module.scss'

export default class Sponsor extends PureComponent {
    render() {
        const {
            tier,
            companyName,
            imgType,
        } = this.props

        return (
            <div className={styles['sponsors-container']}>
                <img src={require('./../../../../Assets/Images/sponsors/' + companyName + imgType)} alt={companyName} className={styles['sponsors-container-img']}/>
                <h3 className={styles['sponsors-container-tier']}>{tier}</h3>
            </div>
        );
    }
}


