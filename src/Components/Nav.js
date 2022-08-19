import React, { Component } from 'react';
import {Link, Outlet} from "react-router-dom";

let Li = (props) => 
        <li><Link to={"/" + props.Href}>{props.Href}</Link></li> ;
        
class Nav extends Component {
    render() {
        return (
            <>
            <nav>
                <ul>
                    <Li Href="intro"/>
                    <Li Href="work"/>
                    <Li Href="about"/>
                    <Li Href="contact"/>
                    <Li Href="elements"/>
                    <Li Href='TestC'/>
                </ul>
            </nav>
            <Outlet/>
            </>
            
            
        );
    }
}

export default Nav;