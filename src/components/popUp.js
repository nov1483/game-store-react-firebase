import React, {useState} from "react";
import moreGames from '../img/moreGames.jpg'
import './popUp.css'


function Popup(props) {

    const [email, setEmail] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState('E-mail cannot be empty');

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const emailRe = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if(!emailRe.test(String(e.target.value).toLowerCase())){
            setEmailError('Uncorrect E-mail')
        }else {
            setEmailError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email' :
                setEmailDirty(true);
                break 
        }
    }
    
    return (props.trigger) ? (
        <div className="full popup">
                <div className='popup_inner'>
                    <div className='popup_img'>
                        <img src={moreGames} alt='GAMES'></img>
                    </div>
                    <div className='popup_info'>
                        <h3>Want a Free Random Game?</h3>
                        <p>Left your E-mail address and you got it!</p>
                        <form action="">
                            {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                            <input onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} value={email} type='email' name="email" placeholder='example@gmail.com'/>
                            <button>Got It!</button>
                        </form>
                    </div>
                    <div className="popup_button_close">
                        <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                    </div>
                </div>
                { props.children }
        </div>
    ) : '';

}

export default Popup;