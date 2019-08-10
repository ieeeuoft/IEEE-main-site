import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { HashRouter as Router, Route } from 'react-router-dom';
import NavBar from './Components/General/NavBar/NavBar.js'
import Team from  './Scenes/Team/Team'
import App from './Scenes/Home/App.js'
import ScrollToTop from './Assets/ScrollToTop'
import ToTop from './Components/General/ToTop/ToTop'
import * as serviceWorker from './serviceWorker';
import { ParallaxProvider } from 'react-scroll-parallax';


class MyApp extends React.PureComponent {
    render() {
        return (
            <div>
                <Router>
                    <ScrollToTop>
                        <NavBar />
                        <Route exact path="/" component={App} />
                        <Route path="/team" component={Team} />
                        <ToTop />
                    </ScrollToTop>
                </Router>

            </div>
        )
    }
}


ReactDOM.render(<MyApp />, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();