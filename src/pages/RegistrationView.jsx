import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../ressource/assets/registrationview.css'
import Footer from '../components/Footer_long'
import Header from '../ressource/icons/Titel3.png'
import '../ressource/assets/inputfield.css'

export default function RegistrationView() {
    return (
        <div className="r-fullview">
            <div className="r-maincontent-background">

                <div className="r-maincontent_container">
                    <div className="r-header_container">
                        <img src={Header} alt="dhbworkout header logo" className='r-header' />
                    </div>

                    <div className="r-form_container">
                        <div className="r-submit_container">
                            <InputField placeholder='E-Mail-Adresse' />
                            <InputField placeholder='Vorname' />
                            <InputField placeholder='Nachname' />
                            <PasswordInputField placeholder='Passwort' />
                            <PasswordInputField placeholder='Passwort wiederholen' />
                        </div>
                    </div>
                    <div className='r-AGBcheck_container'>
                        <Checkbox />

                    </div>
                    <div className="r-button_container">
                        <Button buttonText='Zurück' />
                        <Button buttonText='Registrieren' />

                    </div>
                </div>

                <div className="test">
                    <Link to='/home'>
                        <Button buttonText='Skip to homepage' />
                    </Link>
                </div>



            </div>
            <Footer />
        </div>

    )

}

function Checkbox() {
    return (
        <label className='aileron-regular-black-16px'>
            <input type='checkbox' />
            Ich akzeptiere die allgemeinen Geschäftsbedingungen
        </label>
    )
}


function InputField({ placeholder }) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div>
            <input
                id='input-field'
                type='text'
                value={inputValue}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </div>
    )
}

function PasswordInputField({ placeholder }) {
    // const [inputValue, setInputValue] = useState('');    
    const [displayValue, setDisplayValue] = useState('');

    const handleChange = (event) => {
        setDisplayValue(event.target.value.replace(/./g, '*'));
        //hier sollte noch der InputValue gespeichert werden
    }

    return (
        <div>
            <input
                id='input-field'
                type='text'
                value={displayValue}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </div>
    )
}

function Button({ buttonText }) {
    return (
        <button id='button' className='aileron-bold-white-16px'>{buttonText}</button>
    )
}