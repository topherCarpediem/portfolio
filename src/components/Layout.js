import React, { Component } from 'react';
import Header from './Header';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import './Design.css';

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
                    <Header headerComponents = {this.titles} />
                    <Route path="/:path" component= {Paths} />
                </div>
            </Router>
        );
    }
}

const Paths = ({ match }) => {
    
    if(match.params.path == "home")
    {
     
        return (
            <Home title = "Hello"/>
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

