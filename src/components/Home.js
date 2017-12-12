import React, { Component } from 'react'

export default class Home extends Component {

        
    

    render() {
        
        return(
            <div class="container-fluid">
                <div className="intro">
                    <div className="row">
                        <div className="col">
                            <h1>{this.props.title},<br/> I'm <b>T</b>opher, <br/><b>S</b>oftware <b>E</b>ngineer
                            
                                </h1>
                            <button className="btn btn-info">Contact me</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount = () => {
        let home_tab = document.getElementById('home-tab');
        home_tab.setAttribute("class","nav-link active");
    }

    componentWillUnmount = () => {
        let home_tab = document.getElementById('home-tab');
        home_tab.setAttribute("class","nav-link");
    }
}