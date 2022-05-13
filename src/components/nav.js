import React from "react";
import {Link, Outlet} from "react-router-dom";
import logo from "../img/logo.png"
import { CartWidget } from "./cart";
import DataSearch from "./search/search";
import './nav.css'


function Nav(){
    return (
        <React.Fragment>
            <header className="full header">
                <div className="container header_container">
                    <Link to='/'><img src={logo} alt="logo"></img></Link>
                    <nav>
                        <Link to='/'>Main</Link>
                        <Link to='game-store'>Game store</Link>
                        <Link to='about'>About</Link>
                        <Link to='Contacts'>Contacts</Link>
                        <CartWidget/>
                    </nav>
                    <DataSearch/>
                </div>
            </header>
            <Outlet/>
        </React.Fragment>
    )
}

export default Nav;