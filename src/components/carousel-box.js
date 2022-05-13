import Carousel from 'react-bootstrap/Carousel'
import React from "react";
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import { collection, getDocs } from "firebase/firestore";
import { useState, useRef } from "react";
import db from "../db/db";
import Modal from './modal';
import "./carousel.css"

export default function Slider(){

    const [data, setData] = useState([]);
    const [modalActive, setModalActive] = useState(false);
    async function getData(){
        const doc = await getDocs(collection(db, "games-pre"))
        let dataPre = [];
        doc.forEach(d => {
          // console.log(d.id, d.data())
          dataPre.push({
            id : d.id,
            data : d.data(),
          });
        });
        if(data.length === 0){
          setData(dataPre);
        };
        // console.log(dataPre);
    };
    getData();
    return(
      <div className='full home-slider'>
        <div className='container slider'>
        <Carousel>
          {data.map(d => {
                  // console.log(d)
                  return (
            <Carousel.Item key={d.id.toString()}>  
              <img src= {d.data.img}/>
              <Carousel.Caption>
                <h3>{d.data.title}</h3>
                <p>Pre-Order Now!</p>
                <button onClick={() => setModalActive(true)}>Pre-Order</button>
              </Carousel.Caption>
            </Carousel.Item> 
                  
            )
          })}     
        </Carousel>
        <Modal active={modalActive} setActive={setModalActive}/>
        </div>
      </div>
    )
}

