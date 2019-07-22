import React, { PureComponent } from 'react';
import styles from './sponsors.module.scss'

export default class Sponsors extends PureComponent {
    render() {
        // const {
        //     item1,
        //     item2,
        //     topPlatform,
        //     topPlatformLink,
        //     topPlatformHandle,
        //     topPlatformFollowers
        // } = this.props

        return (
            <div className={styles['sponsors-div']}>
                <h2 className={styles['sponsors-div-heading']}>Our Sponsors</h2>
                <div className={styles['sponsors']}>
                    <div className={styles['sponsors-container']}>
                        <img src="./../../../Assets/Images/sponsors/sponsor4.png" alt="" className={styles['sponsors-container-img']} />
                        <h3 className={styles['sponsors-container-tier']}>Gold</h3>
                    </div>
                    <div className={styles['sponsors-container']}>
                        <img src="./../../../Assets/Images/sponsors/sponsor3.png" alt="" className={styles['sponsors-container-img']} />
                        <h3 className={styles['sponsors-container-tier']}>Gold</h3>
                    </div>
                    <div className={styles['sponsors-container']}>
                        <img src="./../../../Assets/Images/sponsors/sponsor2.png" alt="" className={styles['sponsors-container-img']} />
                        <h3 className={styles['sponsors-container-tier']}>Gold</h3>
                    </div>
                    <div className={styles['sponsors-container current']}>
                        <img src="./../../../Assets/Images/sponsors/sponsor1.png" alt="" className={styles['sponsors-container-img']} />
                        <h3 className={styles['sponsors-container-tier']}>Gold</h3>
                    </div>
                    <div className={styles['sponsors-container']}>
                        <img src="./../../../Assets/Images/sponsors/sponsor5.png" alt="" className={styles['sponsors-container-img']} />
                        <h3 className={styles['sponsors-container-tier']}>Gold</h3>
                    </div>
                    <div className={styles['sponsors-container']}>
                        <img src="./../../../Assets/Images/sponsors/sponsor6.png" alt="" className={styles['sponsors-container-img']} />
                        <h3 className={styles['sponsors-container-tier']}>Gold</h3>
                    </div>
                    <div className={styles['sponsors-container']}>
                        <img src="./../../../Assets/Images/sponsors/sponsor7.png" alt="" className={styles['sponsors-container-img']} />
                        <h3 className={styles['sponsors-container-tier']}>Gold</h3>
                    </div>
                </div>
                <div className={styles['dotstyle dotstyle-fillup']}>
                    <ul>
                        <li className={styles['current']}><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}