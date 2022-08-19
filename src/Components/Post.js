import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Post extends Component {
    render() {
        return (

            <article id="about">
                <h2 className="major">{this.props.TITLE}</h2>



                <span className="image main">
                    <img
                        src={this.props.IMG}
                        alt=""
                    />
                </span>
                <p>{this.props.POST}</p>
                <button className="border-none ">
                    <Link to="/"> Back</Link>
                </button>

            </article>
        );
    
}
}
export default Post;
