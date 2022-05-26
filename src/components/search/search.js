import React, {useContext, useRef} from "react";
import { GameContext } from "../../App";
import {useLocation, useNavigate} from "react-router-dom";


function DataSearch(){
    const {dataFind, setDataFind} = useContext(GameContext);
    const inputRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();

    function handleFind(e){
        e.preventDefault();
        let findText = inputRef.current.value;
        let regFind = new RegExp(findText.toLowerCase());
        
        if (findText.length > 0) {
            window.scrollTo( 0, 0 );
            setDataFind([...dataFind.filter(el => {
                return regFind.test(el.data.title.toLowerCase())  
        })])
        }else{
            setDataFind([])
        }

        if(location.pathname !== "/game-store"){
            navigate("/game-store")
        } 
    } 
    
    return (
        <form action="" onSubmit={handleFind}>
            <input ref={inputRef} type="text" onChange={handleFind}/>
            <button type='submit' onClick={() => window.scrollTo(0,0)}>Search</button>
        </form>
    )
  
}

export default DataSearch;

