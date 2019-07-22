import React, { Component } from 'react'
import Team2019 from '../../Components/Team/Team2019.js'
import Footer from './../../Components/General/Footer/Footer.js'
import styles from './team.module.scss'
import TeamNav from '../../Components/Team/TeamNav/TeamNav.js';
import skylineLeft from './../../Assets/Images/skyline/skyline-left.svg';
import skylineRight from './../../Assets/Images/skyline/skyline-right.svg';

export default class Team extends Component {
    render() {
        return (
            <div>
                <TeamNav />
                <Team2019 />
                <div className={styles['skyline-imgs']}>
                    <img src={skylineLeft} alt="Skyline" className={styles['skyline-imgs-lr']} />
                    <img src={skylineRight} alt="Skyline" className={styles['skyline-imgs-lr']} />
                </div>
                <Footer />
            </div>
        )
    }
}

