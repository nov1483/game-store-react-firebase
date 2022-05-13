import React, {useContext} from "react";
import { Games } from "./game";
import {GameContext} from "../App";
import usePagination from "./pagination/pagination";
import "./game-store.css"
import "./pagination/pagination.css"

function GameStore(props) {
    
    const {dataFind} = useContext(GameContext);

    const {
        totalPage,
        nextPage,
        prevPage,
        setPage,
        firstContentIndex,
        lastContentIndex,
        page,
    } = usePagination({
    contentPerPage: 12,
    count: dataFind.length,
})

    return(
        <section className="full game-shop">
           <div className='container games-container'>
           
            {dataFind.slice(firstContentIndex, lastContentIndex).map((game, index) => {
                return (
                  
                  <Games
                  key={index.toString()}
                  img={game.data.img}
                  title={game.data.title}
                  genres={game.data.genres}
                  price={game.data.price}
                  id={game.id}
                  add={props.add}
                  />  
                
                )
            })}
            
            </div>
            <div className="container pagintaion_container">
                <div className="page_pagination">
                    <p className="text">
                        {page}/{totalPage}
                    </p>
                    <button
                        onClick={prevPage}
                        className={`arr ${page === 1 ? 'active' : ''} `}
                        disabled={page === 1}
                    >
                        &larr;
                    </button>
                    {[...Array(totalPage).keys()].map(el => (
                        <button
                            onClick={() => setPage(el + 1)}
                            key={el.toString()}
                            className={`page ${page === el + 1 ? 'active' : ''}`}
                            disabled={page === el + 1}
                        >
                            {el + 1}
                        </button>

                    ))}
                    <button
                        onClick={nextPage}
                        className={`arr ${page === 4 ? 'active' : ''}`}
                        disabled={page === totalPage}
                    >
                        &rarr;
                    </button>
                </div>
            </div>
        </section>
    )
    
};

 

export default GameStore;