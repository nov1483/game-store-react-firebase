import React, { useState } from "react";
import './modal.css'
const Modal = ({active, setActive}) =>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [adress, setAdress] = useState('');

    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [adressDirty, setAdressDirty] = useState(false);

    const [nameError, setNameError] = useState('Name cannot be empty');
    const [emailError, setEmailError] = useState('E-mail cannot be empty');
    const [adressError, setAdressError] = useState('Adress cannot be empty');

    const nameHandler = (e) => {
        setName(e.target.value)
        const nameRe = /^[a-zA-Z ]+$/;
        if(!nameRe.test(String(e.target.value).toLowerCase())){
            setNameError('Uncorrect Name')
        }else {
            setNameError('')
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const emailRe = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if(!emailRe.test(String(e.target.value).toLowerCase())){
            setEmailError('Uncorrect E-mail')
        }else {
            setEmailError('')
        }
    }

    const adressHandler = (e) => {
        setAdress(e.target.value)
        const adressRe = /^\s*\S+(?:\s+\S+){2}/;
        if(!adressRe.test(String(e.target.value).toLowerCase())){
            setAdressError('Uncorrect Adress')
        }else {
            setAdressError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name' :
                setNameDirty(true);
                break
            case 'email' :
                setEmailDirty(true);
                break
            case 'adress' :
                setAdressDirty(true);
                break    
        }
    }


    return(
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h1>Pre-Order Form</h1>
                <form>

                    {(nameDirty && nameError) && <div style={{color: 'red'}}>{nameError}</div>}
                    <input onChange={e => nameHandler(e)} onBlur={e => blurHandler(e)} value={name} type='text' name="name" placeholder='Name and Lastname'/>

                    {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                    <input onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} value={email} type='email' name="email" placeholder='example@gmail.com'/>

                    {(adressDirty && adressError) && <div style={{color: 'red'}}>{adressError}</div>}
                    <input onChange={e => adressHandler(e)} onBlur={e => blurHandler(e)} value={adress} type='adress' name="adress" placeholder='Enter Delivery Adress'/>
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