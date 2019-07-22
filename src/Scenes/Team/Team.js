import React, { Component } from 'react'
import Team2019 from '../../Components/Team/Team2019.js'
import Footer from './../../Components/General/Footer/Footer.js'
import styles from './team.module.scss'

export default class Team extends Component {
    render() {
        return (
            <div>
                <Team2019 />
                <div className={styles['skyline-imgs']}>
                    <img src="./images/skyline/skyline-left.svg" alt="" className={styles['skyline-imgs-lr']} />
                    <img src="./images/skyline/skyline-right.svg" alt="" className={styles['skyline-imgs-lr']} />
                </div>
                <Footer />
            </div>
        )
    }
}

