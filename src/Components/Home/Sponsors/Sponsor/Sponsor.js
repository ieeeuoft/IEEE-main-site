import React, { PureComponent } from 'react';
import styles from './sponsor.module.scss'

export default class Sponsor extends PureComponent {
    render() {
        const {
            tier,
            companyName,
            imgType,
            siteLink
        } = this.props

        return (
            <a className={styles['sponsors-container']} href={siteLink} target="__blank">
                <div className={styles['sponsors-container-img-div']}>
                    <img src={require('./../../../../Assets/Images/sponsors/' + companyName + imgType)} alt={companyName} className={styles['sponsors-container-img']} />   
                </div>
                <h3 className={styles['sponsors-container-tier']}>{tier}</h3>
            </a>
        );
    }
}


