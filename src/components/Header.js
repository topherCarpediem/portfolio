import React, { Component } from 'react';
import './Design.css'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
           <div className="topher">
                <ul className="nav flex-column">
                    {this.props.headerComponents.map(item => {
                        return (
                        <li className="nav-item" key={item.name}>
                            <Link to={item.link} className="nav-link" id={item.id}>{item.icon}</Link>
                        </li>
                        )
                    })}
                </ul>
            </div>
           
        )
    }
}