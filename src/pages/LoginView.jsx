import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../ressource/assets/loginview.css'
import Footer from '../components/Footer_long'
import Logo from '../ressource/icons/logo.png'
import Header from '../ressource/icons/Titel3.png'
import '../ressource/assets/inputfield.css'

export default function LoginView() {

    const navigate = useNavigate();
    const [emailSet, setEmailSet] = useState(false)
    const [passwordSet, setPasswordSet] = useState(false)

    const handleEmailChange = (event) => {
        setEmailSet(true)
    }

    const handlePasswordChange = (event) => {
        setPasswordSet(true)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        if (emailSet && passwordSet) {
            navigate('/home')
        }
    }




    return (
        <div className="fullview">
            <div className="maincontent-background">
                <div className="maincontent_container">
                    <div className="header_container">
                        <img src={Header} alt="dhbworkout header logo" className='header' />
                    </div>
                    <div className="mainicon__container-big">
                        <img src={Logo} alt="dhbworkout logo" className='mainicon' />
                    </div>
                    <div className="form_container">
                        <div className="submit_container">
                            <InputField placeholder='E-Mail-Adresse' onChange={handleEmailChange}/>
                            <PasswordInputField placeholder='Passwort' onChange={handlePasswordChange}/>
                        </div>
                        <div className="button_container">
                            <Link to='/registration' className='loginbutton_container'>
                                <Button buttonText='Registrieren' />
                            </Link>
                            <Link to='/home' className='loginbutton_container'>
                                <Button buttonText='Anmelden' onClick={handleLogin}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )

}


function InputField({ placeholder, onChange }) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
        onChange()
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
    // const [inputValue, setInputValue] = useState('');    
    const [displayValue, setDisplayValue] = useState('');

    const handleChange = (event) => {
        setDisplayValue(event.target.value.replace(/./g, '*'));
        onChange()
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

function Button({ buttonText, onClick}) {
    return (
        <button id='loginbutton' className='aileron-bold-white-16px' onClick={onClick}>{buttonText}</button>
    )
}