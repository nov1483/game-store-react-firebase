import React from "react";
import {Routes, Route} from "react-router-dom";
import About from "./components/about";
import Contacts from "./components/contacts";
import Footer from "./components/footer";
import GameStore from "./components/gameStore";
import Home from "./components/Home";
import Nav from "./components/nav";

function App() {

  GameStore();
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Nav/>}>
        <Route index element={<Home/>}/> 
          <Route path="/game-store" element={<GameStore/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/Contacts" element={<Contacts/>}/>
        </Route>
      </Routes>
      <Footer/>
    </React.Fragment>
    
    

);
}

export default App;
