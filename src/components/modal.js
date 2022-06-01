import React from "react";
import { useForm } from "react-hook-form";
import {BiErrorAlt} from "react-icons/bi";
import './modal.css';
const Modal = ({active, setActive}) =>{

    const {
        register,
        formState : {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm({
        mode : "all"
    });

    const onSubmit = (data) => {
        reset();
        alert(`Thank You ${data.name}. We're recived Your order.Wait for mail on ${data.email}`);
        setActive(false);
    }

    return(
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h1>Pre-Order Form</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="error_contacts">{errors?.name && <p><BiErrorAlt/>{errors?.name?.message || "Error!"}</p>}</div>
                    <input
                    {...register('name', 
                    {required : "Required Field!", minLength : {value : 5, message : "Min 5 symbols!"}})}
                    type='text' name="name" placeholder='Name and Lastname'/>

                    <div className="error_contacts">{errors?.email && <p><BiErrorAlt/>{errors?.email?.message || "Uncorrect E-mail!"}</p>}</div>
                    <input 
                    {...register('email', 
                    {required : "Required Field!", 
                    pattern : /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/})}
                    type='email' name="email" placeholder='example@gmail.com'/>

                    <div className="error_contacts">{errors?.adress && <p><BiErrorAlt/>{errors?.adress?.message || "Uncorrect Address!"}</p>}</div>
                    <input 
                    {...register('adress', 
                    {required : "Required Field!", 
                    pattern : /^\s*\S+(?:\s+\S+){2}/})}
                    type='adress' name="adress" placeholder='Enter Delivery Adress'/>
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