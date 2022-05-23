import React from "react";
import {Link, Outlet} from "react-router-dom"
import logo from "../img/logo_1.png"
import "./footer.css"


function Footer(){
    return(
        <footer className="full footer">
            <div className="container footer_container">
                <div className="footer_item footer_img">
                    <Link to='/' onClick={() => window.scrollTo(0,0)}><img src={logo} alt="logo"></img></Link>
                </div>
                <div className="footer_item footer_nav">
                        <h2>Menu</h2>
                        <Link to='/game-store'  onClick={() => window.scrollTo(0,0)}>Game Store</Link>
                        <Link to='/about'  onClick={() => window.scrollTo(0,0)}>About</Link>
                        <Link to='/contacts'  onClick={() => window.scrollTo(0,0)}>Contacts</Link>
                        <Link to='/'  onClick={() => window.scrollTo(2400,2400)}>Sale</Link>
                </div>
                <div className="footer_item nav_about">
                        <h2>About</h2>
                        <Link to='/contacts' onClick={() => window.scrollTo(0,0)}>Support Center</Link>
                        <Link to='/contacts'  onClick={() => window.scrollTo(0,0)}>Customer Support</Link>
                        <Link to='/contacts'  onClick={() => window.scrollTo(0,0)}>Get In Touch</Link>
                        <Link to='/about'  onClick={() => window.scrollTo(0,0)}>App store</Link>
                </div>
                
                <div className="footer_item footer_contacts">
                    <h2>Contact Us</h2>
                    <div className="ico_contacts contacts_mail">
                        <i className="ico ico_mail"></i>
                        <p>Game_Branch8314@gmail.com</p>
                    </div>
                    <div className="ico_contacts contacts_mobile">
                        <i className="ico ico_mobile"></i>
                        <p>1-888-058-3728</p>
                    </div>
                    <div className="ico_contacts contacts_phone">
                        <i className="ico ico_phone"></i>
                        <p>1-888-058-3728</p>
                    </div>
                    <div className="social_links">
                        <a href="https://www.facebook.com/"><i className="ico_link ico_fb"></i></a>
                        <a href="https://www.linkedin.com/"><i className="ico_link ico_linked"></i></a>
                        <a href="https://www.instagram.com/"><i className="ico_link ico_insta"></i></a>
                        <a href="https://www.skype.com/"><i className="ico_link ico_skype"></i></a>
                    </div>
                </div>

            </div>
            <div className="full border_footer">
                <div className="container under_border">
                    <div className="copyright">
                        <p>@Copyrignt 2021</p>
                    </div>
                    <div className="under_link">
                        <Link to="/about"  onClick={() => window.scrollTo(0,0)}>Privacy Policy</Link>
                        <a href="https://www.figma.com/file/mwnEwfJbIiL1V5Hq8P8BKH/gamerlandingpage-(Copy)?node-id=0%3A1">Webdesign</a>

                    </div>
                </div>
            </div>
        </footer>
        
    )
}

export default Footer;