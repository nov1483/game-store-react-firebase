import React from "react";
import {Link, Outlet} from "react-router-dom";
import logo from "../img/logo.png"
import { CartWidget } from "./cart";
import DataSearch from "./search/search";
import './nav.css'
import "../media.css"


function Nav(){
    return (
        <React.Fragment>
            <header className="full header">
                <div className="container header_container">
                    
                    <div className="menu">
                        <div className="nav_container">
                            <div className="burger">
                            <input type="checkbox" className="burger__check" id="burger-check" />
                            <label htmlFor="burger-check">
                                <span></span>
                            </label>
                            <nav className="burger-nav">
                                <ul>
                                    <li><Link to='/'>Main</Link></li>
                                    <li><Link to='game-store'>Game store</Link></li>
                                    <li><Link to='about'>About</Link></li>
                                    <li><Link to='Contacts'>Contacts</Link></li>
                                </ul>
                                <DataSearch/>
                            </nav>
                            
                        </div> 
                        <Link to='/'><img src={logo} alt="logo" className="logo_header"></img></Link> 
                        <div className="nav_header">
                        
                        <nav className="nav">
                            <ul>
                                <li><Link to='/'>Main</Link></li>
                                <li><Link to='game-store'>Store</Link></li>
                                <li><Link to='about'>About</Link></li>
                                <li><Link to='Contacts'>Contacts</Link></li>
                            </ul>
                            
                        </nav>
                        </div>
                        
                       
                    <CartWidget/>
                    </div>
                    <div className="header_form">
                    <DataSearch/>
                    </div>
                    </div>
                    
                </div>
            </header>
            <Outlet/>
        </React.Fragment>
    )
}

export default Nav;