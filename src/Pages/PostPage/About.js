import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
    render() {
        return (

            <article id="about">
           <h2 className="major">About</h2>

           
                
                <span className="image main">
                    <img
                     src="https://c4.wallpaperflare.com/wallpaper/109/517/76/anime-anime-girls-ecchi-2d-digital-hd-wallpaper-preview.jpg"
                      alt="" 
                      />
                      </span>
                <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
            
                <button> 
                <Link to="/"> Back</Link>
                </button>

            </article>

        );
    }
}


export default About;