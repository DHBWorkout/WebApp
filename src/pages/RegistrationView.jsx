import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../ressource/assets/registrationview.css'
import Footer from '../components/Footer_long'
import Header from '../ressource/icons/Titel3.png'
import '../ressource/assets/inputfield.css'

export default function RegistrationView() {

    const [emailSet, setEmailSet] = useState(false)
    const [firstNameSet, setFirstNameSet] = useState(false)
    const [nameSet, setNameSet] = useState(false)
    const [passwordSet, setPasswordSet] = useState(false)
    const [passwordCheckSet, setPasswordCheckSet] = useState(false)
    const [agbAccepted, setAgbAccepted] = useState(false);

    const handleEmailChange = event => {
        setEmailSet(true)
    }


    const handleAgbChange = (event) => {
        setAgbAccepted(event.target.checked);
    };

    const handleRegistration = () => {
        if (!agbAccepted) {
            alert('Bitte akzeptieren Sie unsere AGBs');
            return;
        }

        // TODO: handle registration logic
    };

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
                        <Checkbox checked={agbAccepted} onChange={handleAgbChange} />
                    </div>
                    <div className="r-button_container">
                        <Link to='/login' className='r-loginbutton_container'>
                            <Button buttonText='Zurück' />
                        </Link>
                        <Link to='/home' className='r-loginbutton_container'>
                            <Button buttonText='Registrieren' onClick={handleRegistration} />
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )

}

function Checkbox({ checked, onChange }) {
    return (
        <label className='aileron-regular-black-16px'>
            <input type='checkbox' checked={checked} onChange={onChange} />
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

function Button({ buttonText, onClick }) {
    return (
        <button id='button' className='aileron-bold-white-16px' onClick={onClick}>{buttonText}</button>
    )
}