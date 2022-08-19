import React, { Component } from 'react';
import Nav from '../../Components/Nav';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="logo">
                    <span className="icon fa-gem"></span>
                </div>
                <div className="content">
                    <div className="inner">
                        <h1>Vp3's House</h1>
                        <p>
                            Hi there , i am Phan Van Thien.
                            <br />
                            I am a Computer Science student in <a href ="https://www.uit.edu.vn/">
                                University of Information Technology
                            </a> ,VNU.
                        </p>
                    </div>
                </div>
                <Nav/>
            </header>
        );
    }
}

export default Header;