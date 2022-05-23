import React, { useState, useContext, useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import { PreContext } from '../App';
import Modal from './modal';
import "./preorder.css"

function PreOrder() {
    const {preDataFind} = useContext(PreContext);
    return(
        <div className="full pre_order_games">
            <div className="container pre_order_container">
                {preDataFind.map(g => {
                    return(
                        <div className="pre_order_game" key={g.id.toString()}>
                            <div className="pre_order_img">
                                <Link to={`${g.id}`} onClick={() => window.scrollTo(0,0)}><img src={g.data.img} alt='preorder game'></img></Link>
                            </div>
                            <div className="pre_order_info">
                            <Link to={`${g.id}`} onClick={() => window.scrollTo(0,0)}><p>{g.data.title}</p></Link>
                                <p>{g.data.genres}</p>
                                <Link to={`${g.id}`}><button>Pre-Order</button></Link>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function PreOrderCard () {
    const [isLoaded, setIsLoaded] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const {preDataFind} = useContext(PreContext)
    const id = useParams()
    const preOrderGame = preDataFind.find(elem => elem.id === id.preOrderId);

    useEffect(() => {
        setIsLoaded(preOrderGame)
    })

    if(!isLoaded){
        
        return(
            <p>Loading...</p>
        )
    }

    return(
        <div className=" full game-card">
        <h1 key={id}>{preOrderGame.data.title}</h1>
        <div className="container game_card_container">
            
            <div className="game-trailer">
                <iframe width="600" height="400" src={preOrderGame.data.trailer} frameBorder="0" allowFullScreen></iframe>
                <p>{preOrderGame.data.text}</p>
                <p>Genres: <span>{preOrderGame.data.genres}</span></p>
                <p>Price: <span>{preOrderGame.data.price}</span></p>
            </div>
            <div className="pre_game_card_info">
                <img src={preOrderGame.data.img} alt='game' className="pre_order_card_img"></img>
                <button onClick={() => setModalActive(true)}>Pre Order</button>
            </div>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    </div>
    )
}

export {PreOrder, PreOrderCard};