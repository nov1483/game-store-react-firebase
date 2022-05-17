import Carousel from 'react-bootstrap/Carousel'
import React, { useState, useContext } from "react";
import Modal from './modal';
import "./carousel.css"
import { PreContext } from '../App';

 function Slider(){
    const {preDataFind} = useContext(PreContext);
    const [modalActive, setModalActive] = useState(false);

    return(
      <div className='full home-slider'>
        <div className='container slider'>
        <Carousel>
          {preDataFind.map(d => {
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


export {Slider}

