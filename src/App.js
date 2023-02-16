import "./App.css";

import React, { Component } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Index from "./components/Index";
import Contact from "./components/Contact";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <Routes>
        <Route exact path ='/' element={<Index/>}/>
        <Route  path ='/Contact' element={<Contact/>}/>
        </Routes>
      </Router>
    );
  }
}

export default App;
