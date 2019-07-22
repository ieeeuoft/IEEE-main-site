import React, { PureComponent } from 'react'
import styles from './member.module.scss'

export default class Member extends PureComponent {
    render() {
        let imgSrc = "./../../../Assets/Images/team/" + this.props.year + '/' + this.props.imgName + ".jpg";
        
        return (
            <div className={styles['card']}>
                <div className={styles['card-crop']}>
                    <img className={styles['card-crop-img']} src={imgSrc} alt={this.props.fullName} />
                </div>
                <p className={styles['card-title']}>{this.props.position}</p>
                <p className={styles['card-name']}>{this.props.fullName}</p>
                <div className={styles['card-btn']}>
                    <a href={this.props.emailLink} className={styles['card-btn-email']}>
                        <i src="../images/team/icons/email.svg" className={styles['card-btn-email-icon']}></i>
                    </a>
                    <a href={this.props.LinkedInLink} className={styles['card-btn-linkedin']}>
                        <i src="../images/team/icons/linkedin.svg" className={styles['card-btn-linkedin-icon']}></i>
                    </a>
                </div>
            </div>
        );
    }
}
