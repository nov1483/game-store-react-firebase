import Carousel from 'react-bootstrap/Carousel'
import React, { useState, useContext } from "react";
import {Link} from "react-router-dom";
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
              <Link to="/pre-order"><img src= {d.data.img}/></Link>
              <Carousel.Caption>
                <div className='slider_info'>
                  <h3>{d.data.title}</h3>
                  <p>{d.data.genres}</p>
                </div>
                <button onClick={() => setModalActive(true)}>Pre-Order</button>
              </Carousel.Caption>
            </Carousel.Item>    
                )
              }
            )
          }
          
        </Carousel>
        <Modal active={modalActive} setActive={setModalActive}/>
        </div>
      </div>
    )
}


export {Slider}

