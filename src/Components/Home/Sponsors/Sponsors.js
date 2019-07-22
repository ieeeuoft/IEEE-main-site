import React, { PureComponent } from 'react';
import styles from './sponsors.module.scss';
import Sponsor from './Sponsor/Sponsor';

export default class Sponsors extends PureComponent {
    render() {
        return (
            <div className={styles['sponsors-div']}>
                <h2 className={styles['sponsors-div-heading']}>Our Sponsors</h2>
                <div className={styles['sponsors']}>
                    <Sponsor tier="Gold" companyName="sponsor1" />
                    <Sponsor tier="Gold" companyName="sponsor1" />
                    <Sponsor tier="Gold" companyName="sponsor1" />
                </div>
                {/* <div className={styles['dotstyle dotstyle-fillup']}>
                    <ul>
                        <li className={styles['current']}><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                    </ul>
                </div> */}
            </div>
        );
    }
}