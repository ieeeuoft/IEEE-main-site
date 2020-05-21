import React, { PureComponent } from "react";
import styles from "./yearDropdown.module.scss";

export default class YearDropdown extends PureComponent {
    render() {
        return (
            <div className={styles["select-year"]}>
                <div className={styles["triangle-down"]}></div>
                <select id="great-names" className={styles["select-year-div"]}>
                    <option value="2019-2020">2019-2020</option>

                    <option value="2018-2019">2018-2019</option>

                    <option value="2017-2018">2017-2018</option>

                    <option value="2016-2017">2016-2017</option>

                    <option value="2015-2016">2015-2016</option>

                    <option value="2014-2015">2014-2015</option>
                </select>
            </div>
        );
    }
}
