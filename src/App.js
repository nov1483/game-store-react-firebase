import React from "react";
import {Routes, Route} from "react-router-dom";
import {useEffect, useState} from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "./db/db";
import About from "./components/about";
import Contacts from "./components/contacts";
import Footer from "./components/footer";
import GameStore from "./components/gameStore";
import Home from "./components/Home";
import Nav from "./components/nav";
import Cart from "./components/cart";
import {Game} from "./components/game";
import 'bootstrap/dist/css/bootstrap.min.css';

export const GameContext = React.createContext();

function App() {
  // const [dataFind, setDataFind] = useState([]);
  const [data, setData] = useState([]);

  async function getData(){
    if (data.length === 0) {
      if (localStorage.getItem('games')) {
          setData([...JSON.parse(localStorage.getItem('games'))]) 
      }else{
        const doc = await getDocs(collection(db, "Games"))
        let dataDb = [];
        doc.forEach(d => {
            dataDb.push({
              id : d.id,
              data : d.data(),
            });
          });
        if(data.length === 0){
          localStorage.setItem('games', JSON.stringify(dataDb));
          setData(dataDb);
        };
    
        };
    } 
  }

  useEffect(() => {
    if(data.length === 0){
        setData(data); 
    }
    console.log(data)
     })

  getData();
 GameStore();
  
   
  return (
    <GameContext.Provider value={{data, setData}}>
        <Routes>
          <Route path='/' element={<Nav/>}>
            <Route index element={<Home/>}/> 
            <Route path="/game-store" element={<GameStore/>}/>
            <Route path="game-store/:gameId" element={<Game/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/Contacts" element={<Contacts/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Route>
        </Routes>
        <Footer/>
    </GameContext.Provider>
    
    

);
}

export default App;
