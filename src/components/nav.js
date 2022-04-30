import React from "react";
import {Link, Outlet} from "react-router-dom";
import logo from "../img/logo.png"
import './nav.css'

function Nav(){
    return (
        <React.Fragment>
            <header>
                <Link to='/'><img src={logo} alt="logo"></img></Link>
                <nav>
                    <Link to='/'>Main</Link>
                    <Link to='game-store'>Game store</Link>
                    <Link to='about'>About</Link>
                    <Link to='Contacts'>Contacts</Link>
                </nav>
                <input type='text' placeholder='Search'></input>
            </header>
            <Outlet/>
        </React.Fragment>
    )
}

export default Nav;