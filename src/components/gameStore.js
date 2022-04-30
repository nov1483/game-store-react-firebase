import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { useState, useRef } from "react";
import db from "../db/db";
import "./game-store.css"

function GameStore() {
    const [data, setData] = useState([]);

  async function getData(){
    const doc = await getDocs(collection(db, "Games"))
    let dataDb = [];
    doc.forEach(d => {
      // console.log(d.id, d.data())
      dataDb.push({
        id : d.id,
        data : d.data(),
      });
    });
    if(data.length === 0){
      setData(dataDb);
    };
    console.log(dataDb);
  };
  getData();
  
    return(
        <section>
            {data.map(d => {
                console.log(d)
                return (
                    <div key={d.id.toString()}>
                        <img src= {d.data.img}/>
                        <p>{d.data.title}</p>
                        <p>{d.data.price}</p>
                    </div>
                    
                );
            })};
        </section>
    );
    
};

export default GameStore;