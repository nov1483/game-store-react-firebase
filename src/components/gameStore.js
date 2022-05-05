import React, {useContext, useEffect} from "react";
import { collection, getDocs } from "firebase/firestore";
import { useState, useRef } from "react";
import {Link, useParams} from "react-router-dom";
import db from "../db/db";
import { Game, Games } from "./game";
import {GameContext} from "../App";
import "./game-store.css"

function GameStore() {
    
    // const [data, setData] = useState([]);
    // const {data} = useContext(GameContext); - если раскомментировать то появляется ошибка
   

  // async function getData(){
  //   const doc = await getDocs(collection(db, "Games"))
  //   let dataDb = [];
  //   doc.forEach(d => {
  //     // console.log(d.id, d.data())
  //     dataDb.push({
  //       id : d.id,
  //       data : d.data(),
  //     });
  //   });
  //   if(data.length === 0){
  //     setData(dataDb);
  //   };
  //   // console.log(dataDb);
  //   localStorage.setItem('games', JSON.stringify(dataDb));
  // };
  // getData();


  
    return(
        <section className="game-shop">
            {/* {data.map((game, index) => {
                // console.log(d)
                return (
                  <Games
                  key={index.toString()}
                  img={game.img}
                  title={game.title}
                  price={game.price}
                  />  
                )
            })} */}
        </section>
    )
    
};

 

export default GameStore;