import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../ressource/assets/registrationview.css'
import Footer from '../components/r_Footer_long'
import Header from '../ressource/icons/Titel3.png'
import '../ressource/assets/inputfield.css'

export default function RegistrationView() {

    const navigate = useNavigate();
    const [emailSet, setEmailSet] = useState(false)
    const [emailValue, setEmailValue] = useState('')
    const [firstNameSet, setFirstNameSet] = useState(false)
    const [nameSet, setNameSet] = useState(false)
    const [passwordSet, setPasswordSet] = useState(false)
    const [passwordValue, setPasswordValue] = useState('')
    const [passwordCheckSet, setPasswordCheckSet] = useState(false)
    const [passwordCheckValue, setPasswordCheckValue] = useState('')
    const [agbAccepted, setAgbAccepted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase())
    }


    const handleEmailChange = (event) => {
        setEmailValue(event.target.value)
        setEmailSet(event.target.value)
        setErrorMessage('')
    }

    const handleFirstNameChange = event => {
        setFirstNameSet(event.target.value)
        setErrorMessage('')
    }

    const handleNameChange = event => {
        setNameSet(event.target.value)
        setErrorMessage('')
    }

    const handlePasswordChange = event => {
        setPasswordValue(event.target.value)
        setPasswordSet(event.target.value)
        setErrorMessage('')
    }

    const handlePasswordCheckChange = event => {
        setPasswordCheckValue(event.target.value)
        setPasswordCheckSet(event.target.value)
        setErrorMessage('')
    }

    const handleAgbChange = (event) => {
        setAgbAccepted(event.target.checked);
        setErrorMessage('')
    };

    const handleRegistration = (e) => {
        e.preventDefault()
        if (emailSet && firstNameSet && nameSet && passwordSet && passwordCheckSet && agbAccepted && (passwordCheckValue === passwordValue) && isValidEmail(emailValue)) {
            setErrorMessage('')
            navigate('/home')
        } else if ((passwordCheckValue !== passwordValue) && isValidEmail(emailValue)) {
            setErrorMessage('Die Passwörter müssen miteinander übereinstimmen')
        } else if ((passwordCheckValue !== passwordValue) && !isValidEmail(emailValue)) {
            setErrorMessage('Die Passwörter müssen miteinander übereinstimmen und geben Sie eine gültige E-Mail-Adresse ein')
        } else if ((passwordCheckValue === passwordValue) && !isValidEmail(emailValue)) {
            setErrorMessage('Bitte geben Sie eine gültige E-Mail-Adresse ein')
        } else {
            setErrorMessage('Bitte füllen Sie alle Felder aus')
        }
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
                            <InputField placeholder='E-Mail-Adresse' onChange={handleEmailChange} />
                            <InputField placeholder='Vorname' onChange={handleFirstNameChange} />
                            <InputField placeholder='Nachname' onChange={handleNameChange} />
                            <PasswordInputField placeholder='Passwort' onChange={handlePasswordChange} />
                            <PasswordInputField placeholder='Passwort wiederholen' onChange={handlePasswordCheckChange} />
                        </div>
                    </div>
                    <div className='r-AGBcheck_container'>
                        <Checkbox checked={agbAccepted} onChange={handleAgbChange} />
                    </div>
                    <div className="r-error-message_container">
                        {errorMessage && <div className='aileron-bold-dark-red-16px r-error-message'>{errorMessage}</div>}
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
        <label className='aileron-bold-black-16px'>
            <input type='checkbox' checked={checked} onChange={onChange} />
            Ich akzeptiere die allgemeinen Geschäftsbedingungen
        </label>
    )
}

function InputField({ placeholder, onChange }) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
        onChange(event)
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

function PasswordInputField({ placeholder, onChange }) {
    const [displayValue, setDisplayValue] = useState('');

    const handleChange = (event) => {
        setDisplayValue(event.target.value.replace(/./g, '*'));
        onChange(event)
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