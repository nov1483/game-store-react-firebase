import React, {useEffect, useState, useContext} from "react";
import {Link, useParams} from "react-router-dom";
import { CartContext, PromoContext } from "../App";
import Spinner from "./spinner";
import "./promoGames.css"


function GamePromo(props){
    const { title, genres, price, oldPrice, img, id, add } = props;
    const {cart} = useContext(CartContext);
   
      return(             
            <div className="promo_games_container">
                <div className="promo_img">
                    <Link to={`${id}`} onClick={() => window.scrollTo(0,0)}><img src={img}  alt="game_img"></img></Link>
                </div>
                <Link to={`${id}`} onClick={() => window.scrollTo(0,0)}><p>{title}</p></Link>
                <p className="promo_genres">{genres}</p>
                <button onClick={() => add(id)}
                    className={cart.includes(id) ? 'button disabled_button': 'button button_game_card'}>   
                    {cart.includes(id) ? 'Added' : 'Add To Cart'}
                </button>
                <div className="price">
                    <span>-50%</span>
                    <p>{oldPrice}</p>
                    <span>{price}</span>
                </div>                                                    
            </div> 
      );
  };
  
 function PromoGameCard(props){
    const [isLoaded, setIsLoaded] = useState(false);
    const {promoDataFind} = useContext(PromoContext)
    const {cart} = useContext(CartContext);
    const id = useParams();
    const promoGame = promoDataFind.find(g => g.id === id.promoId);

    useEffect( () => {
        setIsLoaded(promoGame)
    });

    if(!isLoaded){
        return(
           <Spinner/>
        );
    };

    return(
      <div className=" full game-card">
            <h1 key={id}>{promoGame.data.title}</h1>
            <div className="container game_card_container">
                
                <div className="game-trailer">
                    <iframe width="600" height="400" src={promoGame.data.trailer} frameBorder="0" allowFullScreen title="trailer"></iframe>
                    <p>{promoGame.data.text}</p>
                    <p>Genres: <span>{promoGame.data.genres}</span></p>
                    <p>Price: <span className="old_price">{promoGame.data.oldPrice}</span> <span className="promo_price"> Promo Price : {promoGame.data.price}</span></p>
                </div>
                <div className="game-info">
                    
                    <img src={promoGame.data.img} alt='game'></img>
                    
                    <button onClick={() => props.add(promoGame.id)}
                            className={cart.includes(promoGame.id) ? 'button disabled_button': 'button button_game_card'}>   
                            {cart.includes(promoGame.id) ? 'Added' : 'Add To Cart'}
                    </button>
                </div>
            </div>
        </div>
    );
    
};


export {GamePromo, PromoGameCard};