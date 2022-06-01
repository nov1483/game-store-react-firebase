import React from "react";
import { useForm } from "react-hook-form"
import {ImFacebook2} from "react-icons/im"
import {BsInstagram} from "react-icons/bs"
import {FaTwitterSquare} from "react-icons/fa"
import {BsTwitch} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
import {BiErrorAlt} from "react-icons/bi"
import "./contact.css"

function Contacts(){
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
        alert(`Thank You. We'd call You back  ${data.name}!`)
      
    }

    return(
        <section className="full contacts">
            <div className="container container_contacts">
               <h1>We'd <AiOutlineHeart/> To Help!</h1> 
               <div className="form_contact_container">
                   <div className="form_info">
                        <h2>Drop Us A Line</h2>
                        <p>We love to hear from you on our customer service, merchandise, 
                            website or any topics you want to share with us. Your comments 
                            and suggestions will be appreciated. Please complete the form below. 
                            We’ll try to answer your request as soon as possible.
                        </p>
                        <p>Due to high web traffic and orders we will do our best to get back to you 
                            within two business days. 
                        </p>
                   </div>
                   <div className="get_in_touch_contact">
                       <form onSubmit={handleSubmit(onSubmit)} action="">

                           <div className="error_contacts">{errors?.name && <p><BiErrorAlt/>{errors?.name?.message || "Error!"}</p>}</div>
                           <input 
                           {...register('name', 
                           {required : "Required Field!", minLength : {value : 5, message : "Min 5 symbols!"}})}  
                           type='text' name="name" placeholder='Name and Lastname'></input>
                           
                           <div className="error_contacts">{errors?.email && <p><BiErrorAlt/>{errors?.email?.message || "Uncorrect E-mail!"}</p>}</div>
                           <input 
                           {...register('email', 
                           {required : "Required Field!", 
                           pattern : /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/})} 
                           type='email' name="email" placeholder='Email Address'></input>
                           
                           <div className="error_contacts">{errors?.tel && <p><BiErrorAlt/>{errors?.tel?.message || "Uncorrect Phone Number!"}</p>}</div>
                           <input 
                           {...register('tel', 
                           {required : "Required Field!", 
                           pattern : /^[\+]?([0-9][\s]?|[0-9]?)([(][0-9]{3}[)][\s]?|[0-9]{3}[-\s\.]?)[0-9]{3}[-\s\.]?[0-9]{4,6}$/im})} 
                           type='tel' name="tel" placeholder='Phone number'></input>
                           <button type="submit">Submit</button>
                       </form>
                   </div>
               </div>
               <div className="contacts_info">                   
                    <div className="contact_address">
                        <p>Address : New Jersey, USA</p>
                        <p>E-mail : Jhonesing567@gmail.com</p>
                        <p>Phone Number : 1-888-058-3728</p>
                        <h2>Follow Us on Social Media</h2>
                        <div className="social_contacts_links">
                            <a href=""><ImFacebook2/></a>
                            <a href=""><BsInstagram/></a>
                            <a href=""><FaTwitterSquare/></a>
                            <a href=""><BsTwitch/></a>
                        </div>
                    </div>
                    <div className="contacts_map">
                        <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24552.328065134727!2d-75.45171474366404!3d39.71626110781716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c71de33dcf8557%3A0xad14d06ed1e2d959!2sGame%20Branch!5e0!3m2!1sen!2spl!4v1652533447310!5m2!1sen!2spl" 
                                width="600" height="450" style = {{border:0 , borderRadius : '15px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
               </div>


            </div>
        </section>

        
    )
}

export default Contacts;