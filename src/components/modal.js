import React from "react";
import './modal.css'
 
const Modal = ({active, setActive}) =>{
 
    return(
       
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
            <h1>Pre-order form</h1>
            <form>
                <input type='text' placeholder='Name and Lastname'/>
                <input type='email' placeholder='example@gmail.com'/>
                <p>Delivery methode</p>
                <select>
                    <option value='Post-delivery'>Post-delivery</option>
                    <option value='DPD'>DPD courier</option>
                    <option value='UPS'>UPS courier</option>
                    <option value='store'>Pick up at the store</option>
                </select>
                <input type='submit' value='Pre-order now' className='input-button'></input>
            </form>
            </div>
        </div>
    )
}

export default Modal;