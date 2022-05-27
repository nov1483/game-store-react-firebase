import Carousel from 'react-bootstrap/Carousel'
import React, { useState, useContext, useEffect } from "react";
import {Link} from "react-router-dom";
import Modal from './modal';
import { PreContext } from '../App';
import Popup from './popUp';
import "./carousel.css"

 function Slider(){
    const [timedPopup, setTimedPopup] = useState(false);
    const {preDataFind} = useContext(PreContext);
    const [modalActive, setModalActive] = useState(false);
  
    useEffect(() => {
      setTimeout(() => {
        setTimedPopup(true)
      }, 3000);
    },[])

    return(
      <div className='full home-slider'>
        
        <div className='container slider'>
        <Carousel>
          {preDataFind.map(d => {
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
        <Popup trigger={timedPopup} setTrigger={setTimedPopup}/>
      </div>
    )
}


export {Slider}

