import React, {useContext} from "react";
import {Link} from "react-router-dom";
import { CartContext, GameContext, PromoContext } from "../App";
import { BsCart4 } from "react-icons/bs";
import "./cart.css"

function CartWidget(){
    const {cart} = useContext(CartContext);
    return (
        <div className="cart_widget">
            <Link to='cart' className="cart"><BsCart4/></Link>
            <span>{cart.length}</span>
        </div>
    )
}


function Cart(){
    const {cart, setCart} = useContext(CartContext);
    const {dataFind} = useContext(GameContext);
    const {promoDataFind} = useContext(PromoContext);
    const array = [].concat(dataFind, promoDataFind);
    console.log(array);
    const cartData = array.filter( g => cart.includes(g.id));
    const totalPrice = cartData.reduce((sum, item) => sum += parseFloat(item.data.price), 0).toFixed(2);
    console.log(cartData)

    function removeItem(id){
        if (cart.length === 1 && cart[0] === id){
            setCart([]);
            localStorage.setItem('cart', JSON.stringify([]));
        }else{
            setCart([...cart.filter(el => el !== id)]);
        }
    }

    function clearCart(){
        if (cart.length > 0 ){
            setCart([]);
            localStorage.setItem('cart', JSON.stringify([]));}

    }

    return(
        <div className="full game_cart">
            <div className="container cart_container">
                { cartData.length > 0 ? cartData.map((g, i) => {
                    return(
            
                        <div className="added_game" key={i.toString()}>
                            <img src={g.data.img} alt='cart_img'></img>
                            <div className="added_game_info">
                                <p>Game : {g.data.title}</p>
                                <p>Price : {g.data.price}</p>
                                <button onClick={() => removeItem(g.id)}>Remove Game</button>
                            </div>
                        </div>
            )
        }) : <h2 className="empty_cart">Cart is Empty!</h2>}
               <div className="cart_total">
                    <p> Total price : {totalPrice}$</p>
                    <button onClick={() => {clearCart(); window.scrollTo(0,0)}}>Clear Cart</button>
                </div>
            </div>
        </div>
    ) 
}
export {CartWidget}
export default Cart;