import React, { Component } from 'react';
import MyRouters from '../../Routers';
import Footer from './Footer'
class HomePage extends Component {
    render() {
        return (
            <div id="main">
                <>
                 <MyRouters/>
                 <Footer/>
                </>
               
            </div>

        );
    }
}
export default HomePage;