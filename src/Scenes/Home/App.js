import React, { Component } from "react";
import Landing from "../../Components/Home/Landing/Landing";
import About from "../../Components/Home/About/About";
import Upcoming from "../../Components/Home/Upcoming/Upcoming";
import Events from "../../Components/Home/Events/Events";
import Social from "../../Components/Home/Social/Social";
import Sponsors from "../../Components/Home/Sponsors/Sponsors";
import FooterHome from "../../Components/Home/FooterHome/FooterHome";

export default class App extends Component {
    render() {
        return (
            <div>
                <Landing />
                <About />
                <Upcoming />
                <Events />
                <Social />
                <Sponsors />
                <FooterHome />
            </div>
        );
    }
}

// export default App;
