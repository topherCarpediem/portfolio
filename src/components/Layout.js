import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import './Design.css';

import Nav from './Nav';
import About from './About';

class Layout extends Component {
    constructor(){
        super();
        this.titles = [
            {
                name: "Home",
                link: "/home",
                icon: <i className="fa fa-home" aria-hidden="true"></i>,
                id: "home-tab"
            },    
            {
                name: "Me",
                link: "/me",
                icon: <i className="fa fa-user" aria-hidden="true"></i>,
                id: "me-tab"
            },
            {
                name: "Contact",
                link: "/contact",
                icon: <i className="fa fa-envelope" aria-hidden="true"></i>,
                id: "contact-tab"
            },
            {
                name: "Skills",
                link: "/skills",
                icon: <i className="fa fa-code" aria-hidden="true"></i>,
                id: "skills-tab"
            },
            {
                name: "Achievements",
                link: "/achievements",
                icon: <i className="fa fa-trophy" aria-hidden="true"></i>,
                id: "achievements-tab"
            },
        ]
    }
    render(){
        return ( 
            <Router>
                <div>
                    <Nav 
                        navitem = {this.titles} 
                    />
                    <div className="page-content-wrapper">
                        <div className="container">
                            <Route path="/:path" component= {Paths} />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

const Paths = ({ match }) => {
    
    if(match.params.path === "home")
    {
        return (
            <Home title = "Hi!"/>
        );
    } else if(match.params.path === "me") {
        return (
            <About />
        );
    } else {
        return (
            <div>
            kjadf jakdhgf jkasd  jkadsf sdkjd     
            </div>
        );
    }
}


export default Layout;

