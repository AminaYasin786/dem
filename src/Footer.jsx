import React from "react";

const Footer = () => {

    const year = new Date().getFullYear();
    return ( <>
        <footer className= "w-100 bg-light text-center">
            <p>copyright © 2023 .All Right Reserved | Term and context </p>
        </footer>
    </>
    );
};

export default Footer;