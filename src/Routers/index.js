import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "../Pages/404/index";
import Header from "../Pages/HomePage/Header";
import Contact from "../Pages/PostPage/Contact";
import Intro from "../Pages/PostPage/Intro";
import Work from "../Pages/PostPage/Work";
import About from "../Pages/PostPage/About";
import Element from "../Pages/PostPage/Element";
import TestC from '../Pages/PostPage/TestC';

class MyRouters extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>

          <Route index element={<Header />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route path="intro" element={<Intro />} />
          <Route path="elements" element={<Element />} />

          <Route path="work" element={<Work />} />
          <Route path="testc" element={<TestC />} />

          <Route path="*" element={<NoPage />} />

        </Routes>
      </BrowserRouter>
    
    );
  }
}

export default MyRouters;
