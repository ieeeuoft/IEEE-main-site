import React from 'react'
import { Link } from 'react-router-dom';
import styles from './teamNav.module.scss';


const TeamNav = () => {
    return (
        <nav className={styles['team-nav']}>
            <ul className={styles['team-nav-list']}>
                <li className={styles['team-nav-list-item']}>Exec Team</li>
                <li className={styles['team-nav-list-item']}>Marketing & Finance</li>
                <li className={styles['team-nav-list-item']}>Webmasters</li>
                <li className={styles['team-nav-list-item'] + ' ' + styles['computer-nav-item']}>Computer Chapter</li>
                <li className={styles['team-nav-list-item']  + ' ' + styles['electronics-nav-item']}>Electronics Chapter</li>
            </ul>
        </nav>
    )
}

export default TeamNav;