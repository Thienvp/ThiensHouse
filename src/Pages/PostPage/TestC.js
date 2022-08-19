import React, { Component } from 'react';
import Post from '../../Components/Post';
class TestC extends Component {
    render() {
        return (
            <Post
            TITLE = "Test"
            IMG ="https://live.staticflickr.com/3801/19064449260_b1e4610112_b.jpg"
            POST = "Đây là ảnh gái Anime, Test nhẹ chút xíu, hehe"            
            >

            </Post>
        );
    }
}

export default TestC;