import React from "react";
import {Link, Outlet} from "react-router-dom"
import logo from "../img/logo.png"

function Footer(){
    return(
        <footer>
            <Link to='/'><img src={logo} alt="logo"></img></Link>
            <Outlet/>
        </footer>
        
    )
}

export default Footer;