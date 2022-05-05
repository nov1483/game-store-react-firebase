import React, {useContext, useEffect} from "react";
import { useState, useRef } from "react";
import {Link, useParams} from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { GameContext } from "../App";
import db from "../db/db";

function Game(){
   
    return(
        <div className="game-card">
            <h2>Game</h2>
            {/* <h1>{d.data.title}</h1>
            <p>{d.data.price}</p> */}
            
        </div>
        
    )
}

function Games(props){
    const { title, price, img, id } = props;
    return(
        <section>
     
            <div className='game-container'>
                <Link to={`${id}`}> <img src= {img}/></Link>
                <Link to={`${id}`}>{title}</Link>
                <p>{price}</p>
                <button>To cart</button>
            </div>
                    
        </section>
    )

}
export {Game, Games}
// export default Game;