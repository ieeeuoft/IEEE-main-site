import React, { PureComponent } from 'react';
import styles from './sponsor.module.scss'
// import { stringify } from 'querystring';
import imgSrc from './../../../../Assets/Images/sponsors/sponsor1.png';

export default class Sponsor extends PureComponent {
    render() {
        const {
            tier,
            companyName
        } = this.props

        // let imgSrc = './../../../../Assets/Images/sponsors/' + companyName + '.png';

        return (
            <div className={styles['sponsors-container']}>
                <img src={imgSrc} alt={companyName} className={styles['sponsors-container-img']} />
                <h3 className={styles['sponsors-container-tier']}>{tier}</h3>
            </div>
        );
    }
}


