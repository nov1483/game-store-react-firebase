import React from "react";
import {Link} from "react-router-dom"
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
                        <ul>
                            <li><Link to='/game-store'  onClick={() => window.scrollTo(0,0)}>Game Store</Link></li>
                            <li><Link to='/about'  onClick={() => window.scrollTo(0,0)}>About</Link></li>
                            <li><Link to='/contacts'  onClick={() => window.scrollTo(0,0)}>Contacts</Link></li>
                            <li><Link to='/'  onClick={() => window.scrollTo(2600,2600)}>Sale</Link></li>
                        </ul>
                </div>
                <div className="footer_item nav_about">
                        <h2>About</h2>
                        <ul>
                        <li><Link to='/contacts' onClick={() => window.scrollTo(0,0)}>Support Center</Link></li>
                        <li><Link to='/contacts'  onClick={() => window.scrollTo(0,0)}>Customer Support</Link></li>
                        <li><Link to='/contacts'  onClick={() => window.scrollTo(0,0)}>Get In Touch</Link></li>
                        <li><Link to='/pre-order'  onClick={() => window.scrollTo(0,0)}>Pre-Order</Link></li>
                        </ul>
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