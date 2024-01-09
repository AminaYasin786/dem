import React from "react";
import { Link } from "react-router-dom";

const Menu =()=>{
  return(
    <>
    <Link  to='/'>About Us</Link>
    <Link to='/contact'>Contact Us</Link>
    <br />
      <a href="/"> AboutUs </a>
      <a href="/contact"> Contact </a>  
    </>
  );
};
export default Menu;