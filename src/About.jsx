import React from "react";
import Home from "../src/pics/Home.jpeg";
import { NavLink } from "react-bootstrap";
import Common from "./Common";
const About = () => {
   return (
    <>
    <Common name='Welcome to About page'
      imgsrc={Home}
      visit="/contact" 
      btname="Contact Now" /> 
    </>
  
   ); 
};
export default About;