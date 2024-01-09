import React from "react";
import web from "../src/pics/Home2.jpeg";
import { NavLink } from "react-bootstrap";
import Common from "./Common";
const Home = () => {
   return (
    <>
    <Common name='Grow your business with'
      imgsrc={web}
      visit="/service" 
      btname="Get Started"/> 
    </>
   ); 
};
export default Home;   