import React, { Component } from 'react'
import Team2019 from '../../Components/Team/Team2019.js'
import Footer from './../../Components/General/Footer/Footer.js'
import styles from './team.module.scss'
import TeamNav from '../../Components/Team/TeamNav/TeamNav.js';
import skylineLeft from './../../Assets/Images/skyline/skyline-left.svg';
import skylineRight from './../../Assets/Images/skyline/skyline-right.svg';
import YearDropdown from './../../Components/Team/YearDropdown/YearDropdown';
import Member from './../../Components/Team/Member/Member.js'
import OldTeam from './../../Components/Team/previousTeam'
// import * as members from './../../Assets/Lists/allMembers'
import memberData from './../../Assets/Lists/members.js'
import { string, object } from 'prop-types';
//import membersJSON from './../../Assets/Lists/members';
//const members = () => JSON.parse(JSON.stringify(membersJSON));


// export default class Team extends Component {
//     render() {
//         return (
//             <div>
//                 <YearDropdown />
//                 {/* <TeamNav /> */}

//                 <Team2019 />
//                 <div className={styles['skyline-imgs']}>
//                     <img src={skylineLeft} alt="Skyline" className={styles['skyline-imgs-lr']} />
//                     <img src={skylineRight} alt="Skyline" className={styles['skyline-imgs-lr']} />
//                 </div>
//                 <Footer />
//             </div>
//         )
//     }
// }

export default class Team extends Component {
    constructor(props) {
        super(props);
        this.state = { teamKey: "execs", year:"2019-2020"}
    }


    showTeam(group) {
        this.setState({teamKey: group});
    }

    constructRows(memberData) {
        const members = []
        for (var i = 0; i < memberData["membersList"].length; i++){
            var member = memberData["membersList"][i]
            members.push(<Member fullName={member.fullName} position={member.position} year={this.state.year} />)
        }

        var numRows = Math.ceil((members.length - memberData["firstRowSize"]) / 7) * 2 + 1;
        var membersLeft = members.length
        const rows = []
        var ind = 0

        for (var i = 0; i < numRows; i++){
            if (membersLeft === 0){
                break;
            } else if (i === 0) { // treat the first row differently
                var obj
                if (memberData["firstRowSize"] === 1) {
                    obj = React.createElement('div', {className:styles['row'], id:"team-2019-20"},
                    members[ind])
                    ind += 1
                    membersLeft -= 1
                } else if (memberData["firstRowSize"] === 2) {
                    obj = React.createElement('div', {className:styles['row'], id:"team-2019-20"},
                    members[ind], members[ind + 1])
                    ind += 2
                    membersLeft -= 2
                } else if (memberData["firstRowSize"] === 3) {
                    obj = React.createElement('div', {className:styles['row'], id:"team-2019-20"},
                    members[ind], members[ind + 1], members[ind + 2])
                    ind += 3
                    membersLeft -= 3
                }
            } else if (i % 2 !== 0){ // 1, 3, 5, ... odd row add 3 members
                var obj
                if (membersLeft >= 3){
                    obj = React.createElement('div', {className:styles['row'], id:"team-2019-20"},
                          members[ind], members[ind + 1], members[ind + 2])
                    ind += 3
                    membersLeft -= 3
                } else if (membersLeft === 2){
                    obj = React.createElement('div', {className:styles['row'], id:"team-2019-20"},
                          members[ind], members[ind + 1])
                    ind += 2
                    membersLeft -= 2
                } else if (membersLeft === 1){
                    obj = React.createElement('div', {className:styles['row'], id:"team-2019-20"},
                          members[ind])
                    ind += 1
                    membersLeft -= 1
                }
            } else {          // 0, 2, 4, ... even row add 4 members
                var obj
                if (membersLeft >= 3){
                    obj = React.createElement('div', {className:styles['row'], id:"team-2019-20"},
                          members[ind], members[ind + 1], members[ind + 2], members[ind + 3])
                    ind += 4
                    membersLeft -= 4
                } else if (membersLeft === 3){
                    obj = React.createElement('div', {className:styles['row'], id:"team-2019-20"},
                          members[ind], members[ind + 1], members[ind + 2])
                    ind += 3
                    membersLeft -= 3
                } else if (membersLeft === 2){
                    obj = React.createElement('div', {className:styles['row'], id:"team-2019-20"},
                          members[ind], members[ind + 1])
                    ind += 2
                    membersLeft -= 2
                } else if (membersLeft === 1){
                    obj = React.createElement('div', {className:styles['row'], id:"team-2019-20"},
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
        // Redundant for now, leave in case differentiation needed later
        switch(this.state.teamKey){
            case "execs":
                return this.constructRows(memberData[this.state.year][this.state.teamKey])
            case "mf":
                return this.constructRows(memberData[this.state.year][this.state.teamKey])
            case "computer":
                return this.constructRows(memberData[this.state.year][this.state.teamKey])
            case "electronics":
                return this.constructRows(memberData[this.state.year][this.state.teamKey])
            case "energypower":
                return this.constructRows(memberData[this.state.year][this.state.teamKey])   
            default:
                return this.constructRows(memberData[this.state.year][this.state.teamKey]) 
        }
    }
    
    constructNavListItems() {
        var thisYearsData = Object.keys(memberData[this.state.year])
        var numCategories = thisYearsData.length
        var items = []

        for (var i = 0; i < numCategories; i++){
            var categoryName = thisYearsData[i]
            items.push(this.constructNavListItem(categoryName))
        }

        return items
    }

    constructNavListItem(teamKey) {
        switch(teamKey){
            case "execs":
                return (<li className={styles['team-nav-list-item']} onClick={() => this.showTeam("execs")}>Exec Team</li>)
            case "mf":
                return (<li className={styles['team-nav-list-item']} onClick={() => this.showTeam("mf")}>Marketing & Finance</li>)
            case "computer":
                return (<li className={styles['team-nav-list-item']+ ' ' + styles['computer-nav-item']} onClick={() => this.showTeam("computer")}>Electronics</li>)
            case "electronics":
                return (<li className={styles['team-nav-list-item']+ ' ' + styles['electronics-nav-item']} onClick={() => this.showTeam("electronics")}>Computer Chapter</li>)
            case "energypower": // TODO: Change 'electronics-nav-item' to 'energypower-nav-item'
                return (<li className={styles['team-nav-list-item']+ ' ' + styles['electronics-nav-item']} onClick={() => this.showTeam("energypower")}>Energy/Power Chapter</li>)
        }

    }

    changeYear = (event) => {
        this.setState({
          year: event.target.value
        });

    }

    render() {

        var { teamKey } = this.state;
        return (
            <div>
                {/*<YearDropdown />*/}
                <div className={styles['select-year']}>
                    <div className={styles['triangle-down']}></div>
                    <select onChange={this.changeYear} value={this.state.value} id="great-names" className={styles['select-year-div']}>
                        <option value="2019-2020">2019-2020</option>

                        <option value="2018-2019">2018-2019</option>

                        <option value="2017-2018">2017-2018</option>

                        <option value="2016-2017">2016-2017</option>

                        <option value="2015-2016">Past Exec Team</option>
                    </select>
                </div>
                {/* <TeamNav /> */}
                <nav className={styles['team-nav']}>
                    <ul className={styles['team-nav-list']}>
                        {this.constructNavListItems()}
                    </ul>
                </nav>
                
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
