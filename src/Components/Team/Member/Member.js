import React, { PureComponent } from 'react'
import styles from './member.module.scss'
import imgSrc from "./../../../Assets/Images/team/2019_20/Nhien Tran-Nyguen.jpg";
import Email from './../../../Assets/Images/team/icons/email.svg';
import LinkedIn from './../../../Assets/Images/team/icons/linkedin.svg';

export default class Member extends PureComponent {
    render() {
        const {
            fullName, 
            position,
            year,
            emailLink,
            LinkedInLink
        } = this.props;

        // let imgSrc = "./../../../Assets/Images/team/" + year + "/" + fullName + ".jpg";

        return (
            <div className={styles['card']}>
                <div className={styles['card-crop']}>
                    <img className={styles['card-crop-img']} src={imgSrc} alt={fullName} />
                </div>
                <p className={styles['card-title']}>{position}</p>
                <p className={styles['card-name']}>{fullName}</p>
                <div className={styles['card-btn']}>
                    <a href={emailLink} className={styles['card-btn-email']}>
                        <img src={Email} className={styles['card-btn-email-icon']}></img>
                    </a>
                    <a href={LinkedInLink} className={styles['card-btn-linkedin']}>
                        <img src={LinkedIn} className={styles['card-btn-linkedin-icon']}></img>
                    </a>
                </div>
            </div>
        );
    }
}
