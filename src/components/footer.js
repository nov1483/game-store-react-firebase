import React from "react";
import {Link, Outlet} from "react-router-dom"
import logo from "../img/logo.png"
import "./footer.css"


function Footer(){
    return(
        <footer className="full footer">
            <div className="container footer_container">
                <div className="footer_item footer_img">
                    <Link to='/'><img src={logo} alt="logo"></img></Link>
                </div>
                <div className="footer_item footer_nav">
                        <h2>Menu</h2>
                        <Link to='/game-store'>Game Store</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/contacts'>Contacts</Link>
                        <Link to='/about'>Sale</Link>
                </div>
                <div className="footer_item nav_about">
                        <h2>About</h2>
                        <Link to='/contacts'>Support Center</Link>
                        <Link to='/contacts'>Customer Support</Link>
                        <Link to='/contacts'>Get In Touch</Link>
                        <Link to='/about'>App store</Link>
                </div>
                
                <div className="footer_item footer_contacts">
                    <h2>Contact Us</h2>
                    <div className="ico_contacts contacts_mail">
                        <i className="ico ico_mail"></i>
                        <p>Jhonesing567@gmail.com</p>
                    </div>
                    <div className="ico_contacts contacts_mail">
                        <i className="ico ico_mobile"></i>
                        <p>1-888-058-3728</p>
                    </div>
                    <div className="ico_contacts contacts_mail">
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
                        <Link to="/about">Privacy Policy</Link>
                        <a href="https://www.figma.com/file/mwnEwfJbIiL1V5Hq8P8BKH/gamerlandingpage-(Copy)?node-id=0%3A1">Webdesign</a>

                    </div>
                </div>
            </div>
        </footer>
        
    )
}

export default Footer;