import React, { PureComponent } from "react";
import styles from "./copyright.module.scss";

export default class Copyright extends PureComponent {
    getYear() {
        var today = new Date();
        return today.getFullYear();
    }

    render() {
        let year = this.getYear();
        return (
            <p
                className={styles["copyright"]}
                onLoad={() => {
                    this.getYear();
                }}
            >
                {"© " + year + " IEEE University of Toronto Student Branch"}
            </p>
        );
    }
}
