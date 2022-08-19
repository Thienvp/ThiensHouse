import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NoPage extends Component {
    render() {
        return (
            <>
             <h1> 404 ERROR </h1>
            <p>Sorry, your page is not exist or not working </p>
            <Link to="/" className="button icon solid fa-house-heart">Return Home</Link>
            </>
        );
    }
}

export default NoPage;