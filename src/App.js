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
import {GamePromo, PromoGameCard} from "./components/promoGames";
import {Game} from "./components/game";
import 'bootstrap/dist/css/bootstrap.min.css';

export const GameContext = React.createContext();
export const CartContext = React.createContext();
export const PromoContext = React.createContext();
export const PreContext = React.createContext()

function App() {
  const [dataFind, setDataFind] = useState([]);
  const [promoDataFind, setPromoDataFind] = useState([]);
  const [promoData, setPromoData] = useState([]);
  const [preData, setPreData] = useState([])
  const [preDataFind, setPreDataFind] = useState([])
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(data)

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

  async function getPromoData(){
    const docPromo = await getDocs(collection(db, "games-promo"))
    let dataPromo = [];
    docPromo.forEach(d => {
      dataPromo.push({
        id : d.id,
        data : d.data(),
      });
    });
    if(data.length === 0){
      setPromoData(dataPromo);
    };
    localStorage.setItem('games-promo', JSON.stringify(dataPromo));
  };
  // console.log(promoData)
  getPromoData();

  async function getSliderData(){
    const docSlider = await getDocs(collection(db, "games-pre"))
    let dataSlider = [];
    docSlider.forEach(d => {
      // console.log(d.id, d.data())
      dataSlider.push({
        id : d.id,
        data : d.data(),
      });
    });
    if(data.length === 0){
      setPreData(dataSlider);
    };
    // console.log(dataPre);
};
getSliderData();
getData();

  async function getCart(){
    if (cart.length === 0) {
      if (await JSON.parse(localStorage.getItem('cart')).length !== 0 ) {
          setCart([...JSON.parse(localStorage.getItem('cart'))]) 
      }
    } 
  }


  getCart()
  getData();


  function addCart(id){
    console.log(id);

    if (!cart.includes(id)) {
        setCart([...cart, id])
    } 
  }


  useEffect(() => {
    
    if(cart){
     localStorage.setItem('cart', JSON.stringify(cart));
    }
    if(dataFind.length === 0){
        setDataFind(data); 
    }
    if(promoDataFind.length === 0){
      setPromoDataFind(promoData)
    }
    if(preDataFind.length === 0) {
      setPreDataFind(preData)
    }
    console.log(preDataFind)
     })
  
  

  
  return (
    <PreContext.Provider value={{preDataFind, setPreDataFind}}>
      <PromoContext.Provider value={{promoDataFind, setPromoDataFind}}>
        <CartContext.Provider value={{cart, setCart}}>
          <GameContext.Provider value={{dataFind, setDataFind}}>
            <Routes>
              <Route path='/' element={<Nav/>}>
                <Route index element={<Home add={addCart}/>}/> 
                <Route path="/game-store" element={<GameStore add={addCart}/>}/>
                <Route path="/game-store/:gameId" element={<Game add={addCart}/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/Contacts" element={<Contacts/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route index element={<GamePromo add={addCart}/> }/>
                <Route path="/:promoId" element={<PromoGameCard add={addCart}/> }/>
                
              </Route>
            </Routes>
            <Footer/>
          </GameContext.Provider>
        </CartContext.Provider>
      </PromoContext.Provider>
    </PreContext.Provider>
    
    

);
}

export default App;
