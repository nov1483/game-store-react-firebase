import React from "react";
import { Link } from "react-router-dom";
import Slider from "./carousel-box";
import SimpleSlider from "./playingSlider";
import bringImg from "../img/bring_img.png"
import playingBg from "../img/playing_img.jpg"
import "./home.css"
import {GamePromo} from "./promoGames";


function Home(){
    return(
        <div className="home-page">
            <h1>Pre-Order Games</h1>
            <Slider/>
            <div className="full adding">
                <div className="container adding-container">
                    <div className="adding-info">
                        <p>Adding Fun to your Life.</p>
                        <h2>Best games at best price.</h2>
                        <p><span>Why our store?</span> This a 3 important reasons :</p>
                    </div>
                    <div className="adding_column_container">
                        <div className="column perspective">
                            <div className="ico ico_perspective"></div>
                            <h3>Game perspective</h3>
                            <p>Get views on the past, present and future of the world of games.</p>
                        </div> 
                
                        <div className="column interface">
                            <div className="ico ico_interface"></div>
                            <h3>Good interface</h3>
                            <p>Good looking, simple and fast search, pre-order or buying.</p>
                        </div>
                        <div className="column price">
                            <div className="ico ico_price"></div>
                            <h3>Best price</h3>
                            <p>Our tagline: “What's your best price?” We are actually asking!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="full bring_game">
                <div className="container bring_game_container">
                    <div className="bring_img">
                        <img src={bringImg} alt="pic"></img>
                    </div>
                    <div className="bring_info">
                        <p>How it works!<span>See</span></p>
                        <h2>Bringing Game to 
                            Everyone Life!</h2>
                        <p>InnoGames is one of the worldwide leading developers 
                            and publishers of online games. Currently, 
                            more than 400 people from over 30 countries 
                            are working in the office in Hamburg. Community management,
                        </p>
                        <p>development and system administration work seamlessly together. This, 
                            combined with close contact to our players, creates 
                            a strong foundation that promotes the continued
                        </p>
                        <Link to='game-store' className="store_link">To Game Store</Link>
                    </div>
                </div>
                
                
            </div>
            <div className="full playing">
                <div className="container playing_container">
                    <div className="playing_info">
                        <p>Playing is a new Skill<span>play</span></p>
                        <h2>Hold different,Play different</h2>
                        <p>Starting a game store business can be an 
                            exciting way to achieve your entrepreneurial 
                            dreams while doing something that you love.
                        </p>
                        <p>Game stores are highly specialized and interesting 
                            shops selling entertainment products.
                        </p>
                        <SimpleSlider/>
                    </div>
                    <div className="playing_img">
                        <img src={playingBg} alt="pic"></img>
                    </div>
                </div>
            </div>
            <GamePromo />
        </div>
    )
}

export default Home;