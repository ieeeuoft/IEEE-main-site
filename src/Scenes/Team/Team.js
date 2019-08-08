import React, { Component } from 'react'
import Footer from './../../Components/General/Footer/Footer.js'
import styles from './team.module.scss'
import skylineLeft from './../../Assets/Images/skyline/skyline-left.svg';
import skylineRight from './../../Assets/Images/skyline/skyline-right.svg';
import Member from './../../Components/Team/Member/Member.js'
import PastTeam from '../../Components/Team/PastTeam/PastTeam'
import memberData from './../../Assets/Lists/members.js'
// import { string, object } from 'prop-types';
// import Team2019 from '../../Components/Team/Team2019.js'
// import * as members from './../../Assets/Lists/allMembers'
// import YearDropdown from './../../Components/Team/YearDropdown/YearDropdown';
// import TeamNav from '../../Components/Team/TeamNav/TeamNav.js';

export default class Team extends Component {
    constructor(props) {
        super(props);
        this.state = { teamKey: "Exec Team", year:"2019-2020"}
    }

    showTeam(group) {
        this.setState({teamKey: group});
    }

    constructRows(memberData) {
        const members = [];
        for (var i = 0; i < memberData["membersList"].length; i++){
            var member = memberData["membersList"][i]
            members.push(<Member fullName={member.fullName} position={member.position} year={this.state.year} LinkedInLink={member.LinkedInLink} emailLink={member.emailLink} />)
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
                }
            } else if (i % 2 !== 0){ // 1, 3, 5, ... odd row add 3 members
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
            } else {          // 0, 2, 4, ... even row add 4 members
                var obj
                if (membersLeft >= 3){
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
            rows.push(obj)
        }

        return (
            <div className={styles['team-container']} id="team-2019-20">
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

        // Redundant for now, leave in case differentiation needed later
        switch(this.state.teamKey){
            case "Exec Team":
                return this.constructRows(memberData[this.state.year][this.state.teamKey])
            case "Marketing & Finance":
                return this.constructRows(memberData[this.state.year][this.state.teamKey])
            case "Computer Chapter":
                return this.constructRows(memberData[this.state.year][this.state.teamKey])
            case "Electronics Chapter":
                return this.constructRows(memberData[this.state.year][this.state.teamKey])
            case "Energy/Power Chapter":
                return this.constructRows(memberData[this.state.year][this.state.teamKey])   
            default:
                return this.constructRows(memberData[this.state.year][this.state.teamKey]) 
        }
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
        switch(teamKey){
            case "Exec Team":
                return (<li className={styles['team-nav-list-item']} onClick={() => this.showTeam("Exec Team")}>Exec Team</li>)
            case "Marketing & Finance":
                return (<li className={styles['team-nav-list-item']} onClick={() => this.showTeam("Marketing & Finance")}>Marketing & Finance</li>)
            case "Computer Chapter":
                return (<li className={styles['team-nav-list-item']+ ' ' + styles['computer-nav-item']} onClick={() => this.showTeam("Computer Chapter")}>Computer Chapter</li>)
            case "Electronics Chapter":
                return (<li className={styles['team-nav-list-item']+ ' ' + styles['electronics-nav-item']} onClick={() => this.showTeam("Electronics Chapter")}>Electronics Chapter</li>)
            case "Energy/Power Chapter": 
                return (<li className={styles['team-nav-list-item']+ ' ' + styles['energy-nav-item']} onClick={() => this.showTeam("Energy/Power Chapter")}>Energy/Power Chapter</li>)
        }

    }

    changeYear = (event) => {
        this.setState({
          year: event.target.value
        });

    }

    render() {
        var { teamKey, year } = this.state;
        return (
            <div>
                <div className={styles['select-year']}>
                    <div className={styles['triangle-down']}></div>
                    <select onChange={this.changeYear} value={this.state.value} className={styles['select-year-div']}>
                        <option value="2019-2020">2019-2020</option>
                        <option value="2018-2019">2018-2019</option>
                        <option value="2017-2018">2017-2018</option>
                        <option value="2016-2017">2016-2017</option>
                        <option value="past">Past Teams</option>
                    </select>
                </div>

                {/* <TeamNav /> */}
                {this.constructNav()}

                {(year != "past") && 
                    <h2 className={styles.teamTitle}>{teamKey}</h2>
                }
                {/* <MemberCharts /> */}
                {this.constructMemberChart()}

                <div className={styles['skyline-imgs']}>
                    <img src={skylineLeft} alt="Skyline" className={styles['skyline-imgs-lr']} />
                    <img src={skylineRight} alt="Skyline" className={styles['skyline-imgs-lr']} />
                </div>
                <Footer />
            </div>
        )
    }
}
