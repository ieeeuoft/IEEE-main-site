import React, { Component } from 'react'
import styles from './teamNav.module.scss';

export default class TeamNav extends Component {
    constructor(props) {
        super(props);
        this.state = { execs: true, mf: false, web: false, computer: false, electronics: false}
    }

    showTeam(group) {
        this.state.group = true;

        if (group == "execs") {
            this.setState({execs: true});
        } else if (group == "mf") {
            this.setState({mf: true});
        } else if (group == "web") {
            this.setState({web: true});
        } else if (group == "computer") {
            this.setState({computer: true});
        } else if (group == "electronics") {
            this.setState({electronics: true});
        }
    }

    render() {
        return (
            <nav className={styles['team-nav']}>
                <ul className={styles['team-nav-list']}>
                    <li className={styles['team-nav-list-item']} onClick={() => this.showTeam("execs")}>Exec Team</li>
                    <li className={styles['team-nav-list-item']} onClick={() => this.showTeam("mf")}>Marketing & Finance</li>
                    <li className={styles['team-nav-list-item']} onClick={() => this.showTeam("web")}>Webmasters</li>
                    <li className={styles['team-nav-list-item'] + ' ' + styles['computer-nav-item']} onClick={() => this.showTeam("computer")}>Computer Chapter</li>
                    <li className={styles['team-nav-list-item']  + ' ' + styles['electronics-nav-item']} onClick={() => this.showTeam("electronics")}>Electronics Chapter</li>
                </ul>
            </nav>
        )
    }
}
