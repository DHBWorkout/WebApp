import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../ressource/assets/loginview.css'
import Footer from '../components/l_Footer_long'
import Logo from '../ressource/icons/logo.png'
import Header from '../ressource/icons/Titel3.png'
import '../ressource/assets/inputfield.css'

export default function LoginView() {

    const  handleKeyEvent = (event) => {
        if (event.key === "Enter") {
          // Call your function here
          handleLogin();
        }
    }

    const navigate = useNavigate();
    const [emailSet, setEmailSet] = useState(false)
    const [emailValue, setEmailValue] = useState('')
    const [passwordSet, setPasswordSet] = useState(false)
    const [passwordValue, setPasswordValue] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase())
    }

    const handleEmailChange = (event) => {
        setEmailValue(event.target.value)
        setEmailSet(event.target.value)

    }

    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value)
        setPasswordSet(event.target.value)
        setErrorMessage('')
    }

    const handleLogin = () => {
        
        if (!emailSet && passwordSet) {
            setErrorMessage('Bitte geben Sie Ihre E-Mail-Adresse ein')
        } else if (emailSet && isValidEmail(emailValue) && !passwordSet) {
            setErrorMessage('Bitte geben Sie Ihr Passwort ein')
        } else if (emailSet && !isValidEmail(emailValue) && !passwordSet) {
            setErrorMessage('Bitte geben Sie eine gültige E-Mail-Adresse und Ihr Passwort ein')
        } else if (!emailSet && !passwordSet) {
            setErrorMessage('Bitte geben Sie Ihre E-Mail-Adresse und Ihr Passwort ein')
        } else if (emailSet && passwordSet && !isValidEmail(emailValue)) {
            setErrorMessage('Bitte geben Sie eine gültige E-Mail-Adresse ein')
        } else {
            setErrorMessage("Loading...")
            sendDataToAPI(emailValue, passwordValue)
        }
    }

    const sendDataToAPI = async () => {
        var obj = {
            Email: emailValue,
            Password: passwordValue
        }
        const response = await fetch('https://api.dhbworkout.de/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj),
        });

        if (response.ok) {
            setErrorMessage('Connection established')
            document.cookie = "token=" + (await response.json()).Response.Token;
            navigate('/home')
        }
        var error = await response.json();
        setErrorMessage(error.Error.Reason);
    };


    return (
        <div className="fullview">

            <div className="maincontent-background">
                <div className="maincontent_container">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="header_container">
                                    <img src={Header} alt="dhbworkout header logo" className='header'/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mainicon__container-big">
                                    <img src={Logo} alt="dhbworkout logo" className='mainicon'/>
                                </div>
                            </div>
                        </div>
                        <div className="form_container" onKeyUp={handleKeyEvent}>

                            <div className="submit_container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <InputField placeholder='E-Mail-Adresse' onChange={handleEmailChange}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <PasswordInputField placeholder='Passwort' onChange={handlePasswordChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="error-message_container">
                                        {errorMessage &&
                                            <div
                                                className='aileron-bold-dark-red-16px error-message'>{errorMessage}</div>}
                                    </div>
                                </div>
                            </div>

                            <div className="button_container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 loginbutton_container">
                                        <Link to='/registration'>
                                            <Button buttonText='Registrieren'/>
                                        </Link>
                                    </div>
                                    <div className="col-lg-4 loginbutton_container">
                                        <Button buttonText='Anmelden' onClick={handleLogin}/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )

}

function InputField({placeholder, onChange}) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
        onChange(event)
    }

    return (
        <div className="inputField_container">
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

function PasswordInputField({placeholder, onChange}) {
    // const [inputValue, setInputValue] = useState('');    
    const [displayValue, setDisplayValue] = useState('');

    const handleChange = (event) => {
        setDisplayValue(event.target.value);
        onChange(event)
    }

    return (
        <div className="inputField_container">
            <input
                id='input-field'
                type='password'
                value={displayValue}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </div>
    )
}

function Button({buttonText, onClick}) {
    return (
        <button id='loginbutton' className='aileron-bold-white-16px' onClick={onClick}>{buttonText}</button>
    )
}