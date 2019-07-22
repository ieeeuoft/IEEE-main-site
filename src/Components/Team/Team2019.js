import React, { PureComponent } from 'react'
import styles from './team.module.scss'
import Member from './Member/Member.js'

export default class Team2019 extends PureComponent {
    render() {
        return (
            <div className={styles['team-container']} id="team-2019-20">
                <div className={styles['row']}>
                    <Member imgName="Nhien" fullName="Nhien Tran-Nyguen" position="Branch Chair" year="2019-20" emailLink="www.youtube.com" LinkedInLink="www.facebook.com"/>
                </div>
                <div className={styles['row']}>
                    <Member name="Fumi" fullName="Nhien Tran-Nyguen" position="Branch Chair" year="2019-20" emailLink="www.youtube.com" LinkedInLink="www.facebook.com"/>
                    <Member name="Maggie" fullName="Nhien Tran-Nyguen" position="Branch Chair" year="2019-20" emailLink="www.youtube.com" LinkedInLink="www.facebook.com"/>
                    <Member name="Sirine" fullName="Nhien Tran-Nyguen" position="Branch Chair" year="2019-20" emailLink="www.youtube.com" LinkedInLink="www.facebook.com"/>
                </div>
            </div>
        );
    }
}

