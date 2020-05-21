import React, { Component } from "react";
import styles from "./teamNav.module.scss";

export default class TeamNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            execs: true,
            mf: false,
            web: false,
            computer: false,
            electronics: false,
        };
    }

    showTeam(group) {
        this.state.group = true;

        switch (group) {
            case "execs":
                this.setState({ execs: true });
            case "mf":
                this.setState({ mf: true });
            case "web":
                this.setState({ web: true });
            case "computer":
                this.setState({ computer: true });
            case "electronics":
                this.setState({ electronics: true });
            default:
                return;
        }
    }

    render() {
        return (
            <nav className={styles["team-nav"]}>
                <ul className={styles["team-nav-list"]}>
                    <li
                        className={styles["team-nav-list-item"]}
                        onClick={() => this.showTeam("execs")}
                    >
                        Exec Team
                    </li>
                    <li
                        className={styles["team-nav-list-item"]}
                        onClick={() => this.showTeam("mf")}
                    >
                        Marketing & Finance
                    </li>
                    <li
                        className={styles["team-nav-list-item"]}
                        onClick={() => this.showTeam("web")}
                    >
                        Webmasters
                    </li>
                    <li
                        className={
                            styles["team-nav-list-item"] +
                            " " +
                            styles["computer-nav-item"]
                        }
                        onClick={() => this.showTeam("computer")}
                    >
                        Computer Chapter
                    </li>
                    <li
                        className={
                            styles["team-nav-list-item"] +
                            " " +
                            styles["electronics-nav-item"]
                        }
                        onClick={() => this.showTeam("electronics")}
                    >
                        Electronics Chapter
                    </li>
                </ul>
            </nav>
        );
    }
}
