import React from 'react';
import Article from "../Article/Article";

const Contacts = () => {
    return (
        <>
            <section className='contacts'>
            <div className="container">
                <h2 className="contacts__title">Contact Us</h2>
                <h3 className="contacts__subtitle">Feel free to contact us with questions, potencial partnerships or media inquiries</h3>
                <form className='form'>
                    <input type='text' placeholder='Name'/>
                    <input type='email' placeholder='Email'/>
                    <textarea placeholder='Your text'/>
                    <button type='submit'>SUBMIT</button>
                </form>
            </div>
        </section>
            <Article/>
        </>

    );
};

export default Contacts;