import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return(
			<div className="intro">
				<h1 id="name">{this.props.title}<br/> I'm <b style={{color:"#ffffff"}}>T</b>opher,</h1>
				<h1 id="proffesion"><b>S</b>oftware <b>E</b>ngineer</h1>        
				<Link to="/contact"><button type="button" className="contact-me"><i className="fa fa-envelope" aria-hidden="true"></i> CONTACT ME</button></Link> 
				<a href="https://github.com/topherCarpediem"><button type="button" className="contact-me"><i className="fa fa-github-alt" aria-hidden="true"></i> GITHUB</button></a>
				<a href="https://www.freecodecamp.org/tophercarpediem"><button type="button" className="contact-me"><i className="fa fa-free-code-camp" aria-hidden="true"></i> FFC</button></a>

			</div>
        )
	}
	componentDidMount = () => {
		let home_tab = document.getElementById('home');
		home_tab.setAttribute("style", "color: black;background-color: #2BA1B9;")
	}

	componentWillUnmount = () => {
		let home_tab = document.getElementById('home');
		home_tab.setAttribute("style", "color: white;display: block;padding: 20px;")
	}
}