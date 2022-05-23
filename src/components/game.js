import React, {useContext, useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import { CartContext, GameContext } from "../App";
import "./game.css"


function Game(props){
    const [isLoaded, setIsLoaded] = useState(false);
    const {dataFind} = useContext(GameContext);
    const {cart} = useContext(CartContext);
    const id = useParams()
    const game = dataFind.find(elem => elem.id === id.gameId);
    console.log(game)
    useEffect(() => {
        setIsLoaded(true)
    })

    if(!isLoaded){
        
        return(
            <p>Loading...</p>
        )
    }
    return(
        <div className=" full game-card">
            <h1 key={id}>{game.data.title}</h1>
            <div className="container game_card_container">
                
                <div className="game-trailer">
                    <iframe width="600" height="400" src={game.data.trailer} frameBorder="0" allowFullScreen></iframe>
                    <p>{game.data.text}</p>
                    <p>Genres: <span>{game.data.genres}</span></p>
                    <p>Price: <span>{game.data.price}</span></p>
                </div>
                <div className="game-info">
                    
                    <img src={game.data.img} alt='game'></img>
                    
                    <button onClick={() => props.add(id.gameId)}
                            className={cart.includes(id.gameId) ? 'button disabled_button': 'button button_game_card'}>   
                                {cart.includes(id.gameId) ? 'Added' : 'Add To Cart'}
                    </button>
                </div>
            </div>
        </div>
        
    )
}

function Games(props){
    const { title, genres, price, img, id, add } = props;
    const {cart} = useContext(CartContext);
    return(
      
     
            <div className="game-container">
                <div className="games-img">
                <Link to={`${id}`} onClick={() => window.scrollTo(0,0)}> <img src= {img} alt='game'/></Link>
                </div>
                <Link to={`${id}`} className='game-title' onClick={() => window.scrollTo(0,0)}>{title}</Link>
                <p className="game_genres">{genres}</p>
                <p>{price}</p>
                <button onClick={() => add(id)}
                        className={cart.includes(id) ? 'button disabled_button': 'button store_game_button'}>
                    {cart.includes(id) ? 'Added' : 'Add To Cart'}
                </button>
            </div>
                    
    )
    

}
export {Game, Games}
