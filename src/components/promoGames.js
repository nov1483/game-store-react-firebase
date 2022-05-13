import React, {useEffect, useState, useContext} from "react";
import {Link, useParams} from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../db/db";
import "./promoGames.css"
import { CartContext, PromoContext } from "../App";



function GamePromo(){
  let {promoDataFind} = useContext(PromoContext);
  
    // async function getPromoData(){
    //       const doc = await getDocs(collection(db, "games-promo"))
    //       let dataDb = [];
    //       doc.forEach(d => {
    //         // console.log(d.id, d.data())
    //         dataDb.push({
    //           id : d.id,
    //           data : d.data(),
    //         });
    //       });
    //       if(data.length === 0){
    //         setData(dataDb);
    //       };
    //       // console.log(dataDb);
    //       localStorage.setItem('games-promo', JSON.stringify(dataDb));
    //     };

    // getPromoData();
      
      
    // useEffect(() => {
    //     if(data.length === 0){
    //         setData(data); 
    //     }
    //     console.log(data)
    //      })
    // getData();
    
    return(
        <div className="full promo_games">
            <h2>Games On Sale</h2>
            <h3>Starting a game store business can be an exciting way to achieve</h3>
            <div className="container promo_container">
                
               {promoDataFind.map ((g,index) => {
                   return(
                   <div key={index} className="promo_game">
                       
                       <Link to={`${g.id}`}><img src={g.data.img}  alt="game_img"></img></Link>
                       <p>{g.data.title}</p>
                       <p className="promo_genres">{g.data.genres}</p>
                       <button>To Cart</button>
                       <div className="price">
                            <span>-50%</span>
                            <p>{g.data.oldPrice}</p>
                            <span>{g.data.price}</span>
                       </div>
                   </div>
                   )
               })    
               } 
                
            </div> 
        </div>
    )
}

function PromoGameCard(){
    const {promoDataFind} = useContext(PromoContext)
    const {cart, setCart} = useContext(CartContext);
    const id = useParams();
    const promoGame = promoDataFind.find(g => g.id === id.promoId);
    console.log(promoGame)

    function promoAdd(id){
        if(!cart.includes(id)){
            setCart([...promoGame, id])
        }
        
    }

    return(
      <div className=" full game-card">
            <h1 key={id}>{promoGame.data.title}</h1>
            <div className="container game_card_container">
                
                <div className="game-trailer">
                    <iframe width="600" height="400" src={promoGame.data.trailer} frameBorder="0" allowFullScreen></iframe>
                    <p>{promoGame.data.text}</p>
                    <p>Genres: <span>{promoGame.data.genres}</span></p>
                    <p>Price: <span>{promoGame.data.price}</span></p>
                </div>
                <div className="game-info">
                    
                    <img src={promoGame.data.img} alt='game'></img>
                    
                    <button onClick={() => console.log(promoGame)}
                            className={cart.includes(id.gameId) ? 'button disabled_button': 'button button_game_card'}>   
                                {cart.includes(id.gameId) ? 'Added' : 'Add To Cart'}
                    </button>
                </div>
            </div>
        </div>
    )
    
}


export {GamePromo, PromoGameCard};