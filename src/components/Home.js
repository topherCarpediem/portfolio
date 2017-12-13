import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return(
			<div className="intro">
				<h1 id="name">{this.props.title}<br/> I'm <b style={{color:"#ffffff"}}>T</b>opher,</h1>
				<h1 id="proffesion"><b>W</b>eb <b>D</b>eveloper</h1>        
				<Link to="/contact"><button className="contact-me">CONTACT ME</button></Link>
			</div>
        )
	}
	componentDidMount = () => {

	}
}