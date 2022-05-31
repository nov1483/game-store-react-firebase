import React, {useState} from "react";
import {Link, Outlet} from "react-router-dom";
import {MdOutlineArrowDropDown} from "react-icons/md"
import logo from "../img/logo_2.png"
import { CartWidget } from "./cart";
import DataSearch from "./search/search";
import './nav.css'
import "../media.css"


function Nav(){

    const [check, setCheck] = useState(false)
    return (
        <React.Fragment>
            <header className="full header">
                <div className="container header_container">
                        <div className="nav_container">
                                <div className="burger">
                                    <input type="checkbox" checked={check} onChange={() => setCheck(!check)} className="burger__check" id="burger-check" />
                                    <label htmlFor="burger-check">
                                        <span></span>
                                    </label>
                                    <nav className="burger-nav">
                                        <ul>
                                            <li><Link to='/' checked={check} onClick={() => {setCheck(!check); window.scrollTo(0,0);}}>Main</Link></li>
                                            <li><Link to='game-store' checked={check} onClick={() => {setCheck(!check); window.scrollTo(0,0);}}>Game store</Link></li>
                                            <li><Link to='pre-order' checked={check} onClick={() => {setCheck(!check); window.scrollTo(0,0);}}>Pre-Order</Link></li>
                                            <li><Link to='about' checked={check} onClick={() => {setCheck(!check); window.scrollTo(0,0);}}>About</Link></li>
                                            <li><Link to='Contacts' checked={check} onClick={() => {setCheck(!check); window.scrollTo(0,0);}}>Contacts</Link></li>
                                        </ul>
                                        <DataSearch/>
                                    </nav>
                                
                                </div> 
                               
                               
                                
                        </div> 
                        <Link to='/'><img src={logo} alt="logo" className="logo_header"></img></Link> 
                        <div className="nav_header">
                                    <nav className="nav">
                                        <ul>
                                            <li><Link to='/'>Main</Link></li>
                                            <li className="drop_menu"><Link to='game-store'>Store<MdOutlineArrowDropDown/></Link>
                                                <ul className="submenu">
                                                    <li><Link to='game-store'>Game-Store</Link></li>
                                                    <li><Link to='pre-order'>Pre-Order</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to='about'>About</Link></li>
                                            <li><Link to='Contacts'>Contacts</Link></li>
                                        </ul>  
                                    </nav>
                                </div>
                                <CartWidget/>
                        <div className="header_form">
                            <DataSearch/>
                        </div>
                    
                    
                </div>
            </header>
            <Outlet/>
        </React.Fragment>
    )
}

export default Nav;