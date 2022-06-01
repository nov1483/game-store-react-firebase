import React from "react";
import { useForm } from "react-hook-form";
import aboutImage from "../img/about_img.png";
import {ImNewspaper} from "react-icons/im";
import {BiConversation} from "react-icons/bi";
import {RiContactsLine} from "react-icons/ri";
import {BsNewspaper} from "react-icons/bs";
import {ImFacebook2} from "react-icons/im"
import {BsInstagram} from "react-icons/bs"
import {FaTwitterSquare} from "react-icons/fa"
import {BsTwitch} from "react-icons/bs"
import {BiErrorAlt} from "react-icons/bi";
import logo from "../img/logo.png"
import "./about.css"
function About(){

    const {
        register,
        formState : {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm({
        mode : "all"
    });

    const onSubmit = (data) => {
        reset();
        alert(`Thank you, Your e-mail is : ${data.email}`)
      
    }


    return(
        <main className="full about_main">
            <section className="full about_block">
                <div className="container about_container">
                    <h1>About Us</h1>
                </div>
            </section>
            <section className="full about_info">
                <div className="full edge"></div>
                <div className="container about_container_info">
                    <div className="about_image">
                        <img src={aboutImage} alt="about"></img>
                    </div>
                    <div className="about_content">
                        <h2>Forever Physical</h2>
                        <p><span>Game Branch Store</span> is a premium publisher of physical games. 
                            We’re here to bring your favorite digital releases to life
                            on a number of systems — including the Nintendo Switch, 
                            Playstation 4 and 5, retro consoles, and more! Since our 
                            founding in 2015 by Josh Fairhurst and Douglas Bogart, we’Wve 
                            released over 1000 games, including both niche indie games and 
                            big collabs with legends like Konami and LucasArts. 
                        </p>
                        <p>Our bespoke Collector’s Editions have won awards, and we’ve made 
                            tons of great collectibles worthy of primo space on any collector’s 
                            shelf. Though we live in an increasingly digital world, we like to 
                            live by a simple motto: Forever Physical. 
                        </p>
                        <div className="about_contacts">
                            <h3>FOR THE LATEST INFORMATION ON OUR RELEASES</h3>
                            <div className="about_contacts_content">
                                <div className="item about_item">
                                    <div className="image">
                                        <ImNewspaper/>
                                    </div>
                                    <div className="copy">
                                        <span>E-Newsletter</span>
                                        <a href=''>SIGN UP</a>
                                    </div>

                                </div>
                                <div className="item about_item">
                                    <div className="image">
                                        <BiConversation/>
                                    </div>
                                    <div className="copy">
                                        <span>Join the Conversation</span>
                                        <a href=''>OUR DISCORD SERVER</a>
                                    </div>
                                </div>
                                <div className="item about_item">
                                    <div className="image">
                                        <RiContactsLine/>
                                    </div>
                                    <div className="copy">
                                        <span>Connect With Us</span>
                                        <div className="item_contatcs_links">
                                            <a href=''><ImFacebook2/></a>
                                            <a href=''><BsInstagram/></a>
                                            <a href=''><FaTwitterSquare/></a>
                                            <a href=''><BsTwitch/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="item about_item">
                                    <div className="image">
                                        <BsNewspaper/>
                                    </div>
                                    <div className="copy">
                                        <span>Hot Off the Press</span>
                                        <p>LOOK OUT FOR OUR PHYSICAL NEWSLETTERS IN SELECT SHIPMENTS.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="full about_form">
                        <h2>NEVER MISS OUT ON A <img src={logo} alt='logo'></img> RELEASE AGAIN</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="error_contacts">{errors?.email && <p><BiErrorAlt/>{errors?.email?.message || "Uncorrect E-mail!"}</p>}</div>
                            <input  
                            {...register('email', 
                            {required : "Cannot be empty!", 
                            pattern : /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/})} 
                            type='email' name="email" placeholder='Email Address'></input>
                            <button>Submit</button>
                        </form>
                </div>
            </section>
        </main>
    )
}

export default About;