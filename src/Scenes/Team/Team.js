import React, { Component } from 'react';
import Footer from './../../Components/General/Footer/Footer.js';
import styles from './team.module.scss';
import skylineLeft from './../../Assets/Images/skyline/skyline-left.svg';
import skylineRight from './../../Assets/Images/skyline/skyline-right.svg';
import baby from './../../Assets/Images/misc/baby.svg';
import dog from './../../Assets/Images/misc/dog.svg';
import Member from './../../Components/Team/Member/Member.js';
import PastTeam from '../../Components/Team/PastTeam/PastTeam';
import memberData from './../../Assets/Lists/members.js';
import Switch from "react-switch";

export default class Team extends Component {
    constructor(props) {
        super(props);
        this.state = { teamKey: "Exec Team", year:"2020-2021", active: 1, checkedBaby: false, checkedDog: false}
    }

    constructRows(memberData) {
        const members = [];
        for (var i = 0; i < memberData["membersList"].length; i++){
            var member = memberData["membersList"][i]
            members.push(<Member fullName={member.fullName} position={member.position} year={this.state.year} LinkedInLink={member.LinkedInLink} emailLink={member.emailLink} baby={this.state.checkedBaby}  puppy={this.state.checkedDog} />)
        }

        var numRows = Math.ceil((members.length - memberData["firstRowSize"]) / 7) * 2 + 1;
        var membersLeft = members.length
        const rows = []
        var ind = 0

        for (i = 0; i < numRows; i++){
            if (membersLeft === 0){
                break;
            } else if (i === 0) { // treat the first row differently
                var obj
                if (memberData["firstRowSize"] === 1) {
                    obj = React.createElement('div', {className:styles['row']},
                    members[ind])
                    ind += 1
                    membersLeft -= 1
                } else if (memberData["firstRowSize"] === 2) {
                    obj = React.createElement('div', {className:styles['row']},
                    members[ind], members[ind + 1])
                    ind += 2
                    membersLeft -= 2
                } else if (memberData["firstRowSize"] === 3) {
                    obj = React.createElement('div', {className:styles['row']},
                    members[ind], members[ind + 1], members[ind + 2])
                    ind += 3
                    membersLeft -= 3
                } else if (memberData["firstRowSize"] === 4) {
                    obj = React.createElement('div', {className:styles['row']},
                    members[ind], members[ind + 1], members[ind + 2], members[ind + 3])
                    ind += 4
                    membersLeft -= 4
                }
            }else if (i % 2 !== 0) {          // 0, 2, 4, ... even row add 4 members
                var obj
                if (membersLeft > 3){
                    obj = React.createElement('div', {className:styles['row']},
                          members[ind], members[ind + 1], members[ind + 2], members[ind + 3])
                    ind += 4
                    membersLeft -= 4
                } else if (membersLeft === 3){
                    obj = React.createElement('div', {className:styles['row']},
                          members[ind], members[ind + 1], members[ind + 2])
                    ind += 3
                    membersLeft -= 3
                } else if (membersLeft === 2){
                    obj = React.createElement('div', {className:styles['row']},
                          members[ind], members[ind + 1])
                    ind += 2
                    membersLeft -= 2
                } else if (membersLeft === 1){
                    obj = React.createElement('div', {className:styles['row']},
                          members[ind])
                    ind += 1
                    membersLeft -= 1
                }
            } 
            else { // 1, 3, 5, ... odd row add 3 members
                var obj
                if (membersLeft >= 3){
                    obj = React.createElement('div', {className:styles['row']},
                          members[ind], members[ind + 1], members[ind + 2])
                    ind += 3
                    membersLeft -= 3
                } else if (membersLeft === 2){
                    obj = React.createElement('div', {className:styles['row']},
                          members[ind], members[ind + 1])
                    ind += 2
                    membersLeft -= 2
                } else if (membersLeft === 1){
                    obj = React.createElement('div', {className:styles['row']},
                          members[ind])
                    ind += 1
                    membersLeft -= 1
                }
            } 
            rows.push(obj)
        }

        return (
            <div className={styles['team-container']}> {/* id="team-2019-20" */}
                {rows}
            </div>
        )
    }

    constructMemberChart() {
        if (this.state.year === "past"){
            return (
                <div>
                    <div className={styles['spacer1']}></div>
                    {PastTeam()}
                    <div className={styles['spacer2']}></div>
                </div>
            )
        }

        if (memberData[this.state.year] === undefined){
            return (
                <div>
                    <div className={styles['spacer2']}></div>
                    <div className={styles['spacer2']}>ERROR 404. Team not found.</div>
                </div>
            )
        }

        return this.constructRows(memberData[this.state.year][this.state.teamKey])

        // Redundant for now, leave in case differentiation needed later
        // switch(this.state.teamKey){
        //     case "Exec Team":
        //         return this.constructRows(memberData[this.state.year][this.state.teamKey])
        //     case "Marketing & Finance":
        //         return this.constructRows(memberData[this.state.year][this.state.teamKey])
        //     case "Computer Chapter":
        //         return this.constructRows(memberData[this.state.year][this.state.teamKey])
        //     case "Electronics Chapter":
        //         return this.constructRows(memberData[this.state.year][this.state.teamKey])
        //     case "Energy/Power Chapter":
        //         return this.constructRows(memberData[this.state.year][this.state.teamKey])   
        //     default:
        //         return this.constructRows(memberData[this.state.year][this.state.teamKey]) 
        // }
    }

    showTeam(group, activeNum) {
        this.setState({
            teamKey: group, active: activeNum
        });

    }

    changeYear = (event) => {
        this.setState({
          year: event.target.value,
          teamKey: "Exec Team",
          active: 1,
          checkedPuppy: false,
          checkedBaby: false
        });
    }

    constructNav() {
        if (this.state.year === "past"){
            return
        }
        if (memberData[this.state.year] === undefined){
            return
        }

        var thisYearsData = Object.keys(memberData[this.state.year])
        var numCategories = thisYearsData.length
        var items = []

        for (var i = 0; i < numCategories; i++){
            var categoryName = thisYearsData[i]
            items.push(this.constructNavListItem(categoryName))
        }

        return ( 
            <nav className={styles['team-nav']}>
                <ul className={styles['team-nav-list']}>
                    {items}
                </ul>
            </nav>       
        )
    }

    constructNavListItem(teamKey) {
        let {active} = this.state
        switch(teamKey){
            case "Exec Team":
                return (<li className={`${styles['team-nav-list-item']} ${active == 1 ? styles['team-nav-list-item-active'] : null}`} onClick={() => this.showTeam("Exec Team",1)}>Exec Team</li>)
            case "Marketing & Finance":
                return (<li className={`${styles['team-nav-list-item']} ${active == 2 ? styles['team-nav-list-item-active'] : null}`} onClick={() => this.showTeam("Marketing & Finance",2)}>Marketing & Finance</li>)
            case "Computer Chapter":
                return (<li className={`${styles['team-nav-list-item']} ${styles['computer-nav-item']} ${active == 3 ? styles['computer-nav-item-active'] : null}`} onClick={() => this.showTeam("Computer Chapter",3)}>Computer Chapter</li>)
            case "Electronics Chapter":
                return (<li className={`${styles['team-nav-list-item']} ${styles['electronics-nav-item']} ${active == 4 ? styles['electronics-nav-item-active'] : null}`} onClick={() => this.showTeam("Electronics Chapter",4)}>Electronics Chapter</li>)
            case "Energy/Power Chapter": 
                return (<li className={`${styles['team-nav-list-item']} ${styles['energy-nav-item']} ${active == 5 ? styles['energy-nav-item-active'] : null}`} onClick={() => this.showTeam("Energy/Power Chapter",5)}>Energy/Power Chapter</li>)
            case "Logistics": 
                return (<li className={`${styles['team-nav-list-item']} ${active == 3 ? styles['team-nav-list-item-active'] : null}`} onClick={() => this.showTeam("Logistics",3)}>Logistics</li>)
            case "External Relations": 
                return (<li className={`${styles['team-nav-list-item']} ${active == 4 ? styles['team-nav-list-item-active'] : null}`} onClick={() => this.showTeam("External Relations",4)}>External Relations</li>)
            case "Tech": 
                return (<li className={`${styles['team-nav-list-item']} ${active == 5 ? styles['team-nav-list-item-active'] : null}`} onClick={() => this.showTeam("Tech",5)}>Tech</li>)
            case "Web": 
                return (<li className={`${styles['team-nav-list-item']} ${active == 6 ? styles['team-nav-list-item-active'] : null}`} onClick={() => this.showTeam("Web",6)}>Web</li>)
            case "Advisors": 
                return (<li className={`${styles['team-nav-list-item']} ${active == 7 ? styles['team-nav-list-item-active'] : null}`} onClick={() => this.showTeam("Advisors",7)}>Advisors</li>)
        }
    }

    contructYearOptions(keys) {
        let options = []
        for (let i = 0; i < keys.length; i++) {
            options.push(<option value={`${keys[i]}`}>{keys[i]}</option>)
        }
        return options
    }

    handleChange(toggleNum) {
        if (toggleNum == 1) { // puppy
            this.setState({checkedDog: !this.state.checkedDog, checkedBaby: false});
        } else if (toggleNum == 2) { // baby
            this.setState({checkedBaby: !this.state.checkedBaby, checkedDog: false}); 
        } 
        
      };

    render() {
        var { teamKey, year } = this.state;
        const yearKeys = Object.keys(memberData);

        return (
            <div className={styles['team']}> 
                <div className={styles['select-year']}>
                    <div className={styles['triangle-down']}></div>
                    <select onChange={this.changeYear} value={this.state.value} className={styles['select-year-div']}>
                        {this.contructYearOptions(yearKeys)}
                        <option value="past">Past Teams</option>
                    </select>
                </div>


                {/* Uncomment for babies and puppies */}
                {/* {(yearKeys.slice(0, -4).includes(year)) && // Checks years 2020-2021 and beyond for baby feature
                    <div className={styles['toggles']}>
                        <div className={styles['baby']}>
                            <label>
                                <Switch onChange={() => this.handleChange(1)} checked={this.state.checkedDog}  onColor={'#00639C'} uncheckedIcon={false} checkedIcon={false}  />
                            </label>
                            <img src={dog} alt="Dog Emoji" className={styles['baby-emoji']} />
                        </div>

                        <div className={styles['baby']}>
                            <label>
                                <Switch onChange={() => this.handleChange(2)} checked={this.state.checkedBaby}  onColor={'#00639C'} uncheckedIcon={false} checkedIcon={false}  />
                            </label>
                            <img src={baby} alt="Baby Emoji" className={styles['baby-emoji']} />
                        </div>
                    </div>
                } */}

                {this.constructNav()}

                {(year != "past") && 
                    <h2 className={styles.teamTitle}>{teamKey}</h2>
                }

                {this.constructMemberChart()}
                
                <div className={styles['skyline-imgs-crop']}>
                    <div className={styles['skyline-imgs']}>
                        <img src={skylineLeft} alt="Skyline" className={styles['skyline-imgs-lr']} />
                        <img src={skylineRight} alt="Skyline" className={styles['skyline-imgs-lr']} />
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}
