import React, { useState } from "react";
import Footer from "./../../Components/General/Footer/Footer.js";
import styles from "./team.module.scss";
import skylineLeft from "./../../Assets/Images/skyline/skyline-left.svg";
import skylineRight from "./../../Assets/Images/skyline/skyline-right.svg";
import Member from "./../../Components/Team/Member/Member.js";
import PastTeam from "../../Components/Team/PastTeam/PastTeam";
import memberData from "./../../Assets/Lists/members.js";
import baby from "./../../Assets/Images/misc/baby.svg";
import dog from "./../../Assets/Images/misc/dog.svg";
import Switch from "react-switch";

const Team = () => {
    const [year, setYear] = useState(Object.keys(memberData)[0]);
    const [teamKey, setTeamKey] = useState("Exec Team");
    const [active, setActive] = useState(0);
    const [checkedBaby, setCheckedBaby] = useState(false);
    const [checkedDog, setCheckedDog] = useState(false);

    const yearKeys = Object.keys(memberData);
    let teamMap = {};
    if (year !== "past") {
        Object.keys(memberData[year]).forEach((team, i) => (teamMap[team] = i));
    }

    const ConstructMemberChart = () => {
        // Decide to show "Past teams", 404, or the correct members of year and team
        if (year === "past") {
            return (
                <div>
                    <div className={styles.spacer1}></div>
                    <PastTeam />
                    <div className={styles.spacer2}></div>
                </div>
            );
        } else if (!memberData.hasOwnProperty(year)) {
            return (
                <div>
                    <div className={styles.spacer2}></div>
                    <div className={styles.spacer2}>ERROR 404. Team not found.</div>
                </div>
            );
        }
        return <ConstructRows />;
    };

    const TeamRow = ({ children }) => <div className={styles.row}>{children}</div>;

    const ConstructRows = () => {
        const team = memberData[year][teamKey];
        const membersArr = team.membersList.map((member) => (
            <Member
                fullName={member.fullName}
                position={member.position}
                year={year}
                LinkedInLink={member.LinkedInLink}
                emailLink={member.emailLink}
                baby={checkedBaby}
                puppy={checkedDog}
            />
        ));

        let numRows =
            Math.ceil((team.membersList.length - team["firstRowSize"]) / 7) * 2 + 1;
        let membersLeft = team.membersList.length;
        const rows = [];
        let ind = 0;

        for (let i = 0; i < numRows; i++) {
            if (membersLeft === 0) {
                break;
            } else if (i === 0) {
                // treat the first row differently
                rows.push(
                    <TeamRow>{membersArr.slice(ind, ind + team.firstRowSize)}</TeamRow>
                );
                ind += team.firstRowSize;
                membersLeft -= team.firstRowSize;
            } else {
                // 0, 2, 4, ... even row add 4 members
                // 1, 3, 5, ... odd row add 3 members
                const slicedArr = membersArr.slice(ind, ind + (i % 2 !== 0 ? 4 : 3));
                rows.push(<TeamRow>{slicedArr}</TeamRow>);
                ind += slicedArr.length;
                membersLeft -= slicedArr.length;
            }
        }
        return <div className={styles.teamContainer}>{rows}</div>;
    };

    const ConstructNav = () => (
        <nav className={styles.teamNav}>
            <ul className={styles.teamNavList}>
                {Object.keys(memberData[year]).map((team) => (
                    <ConstructNavListItem teamKey={team} />
                ))}
            </ul>
        </nav>
    );

    const ConstructNavListItem = (teamKey) => {
        const teamName = teamKey.teamKey;
        const activeNum = teamMap[teamName];
        return (
            <li
                className={`${styles.teamNavListItem} ${
                    active === activeNum && styles.teamNavListItemActive
                }`}
                onClick={() => (setTeamKey(teamName), setActive(activeNum))}
            >
                {teamName}
            </li>
        );
    };

    function HandleChange(toggleNum) {
        if (toggleNum === 1) {
            setCheckedDog(!checkedDog);
            setCheckedBaby(false);
        } else if (toggleNum === 2) {
            setCheckedDog(false);
            setCheckedBaby(!checkedBaby);
        }
    }

    function ChangeYear(event) {
        setTeamKey("Exec Team");
        setYear(event.target.value);
        setActive(0);
        setCheckedBaby(false);
        setCheckedDog(false);
    }

    return (
        <div className={styles.team}>
            <div>
                <div className={styles.selectYear}>
                    <div className={styles.triangleDown}></div>
                    <select
                        onChange={ChangeYear}
                        value={year}
                        className={styles.selectYearDiv}
                    >
                        {yearKeys.map((key) => (
                            <option value={`${key}`}>{key}</option>
                        ))}
                        <option value="past">Past Teams</option>
                    </select>
                </div>

                {yearKeys.slice(0, -5).includes(year) && ( // Checks years 2021-2022 and beyond for baby feature
                    <div className={styles.toggles}>
                        <div className={styles.baby}>
                            <label>
                                <Switch
                                    onChange={() => HandleChange(1)}
                                    checked={checkedDog}
                                    onColor={"#00639C"}
                                    uncheckedIcon={false}
                                    checkedIcon={false}
                                />
                            </label>
                            <img
                                src={dog}
                                alt="Dog Emoji"
                                className={styles.babyEmoji}
                            />
                        </div>

                        <div className={styles.baby}>
                            <label>
                                <Switch
                                    onChange={() => HandleChange(2)}
                                    checked={checkedBaby}
                                    onColor={"#00639C"}
                                    uncheckedIcon={false}
                                    checkedIcon={false}
                                />
                            </label>
                            <img
                                src={baby}
                                alt="Baby Emoji"
                                className={styles.babyEmoji}
                            />
                        </div>
                    </div>
                )}

                {memberData.hasOwnProperty(year) && <ConstructNav />}
                <ConstructMemberChart />
            </div>

            <div>
                <div className={styles.skylineImgsCrop}>
                    <div className={styles.skylineImgs}>
                        <img
                            src={skylineLeft}
                            alt="Skyline"
                            className={styles.skylineImgsLr}
                        />
                        <img
                            src={skylineRight}
                            alt="Skyline"
                            className={styles.skylineImgsLr}
                        />
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Team;
