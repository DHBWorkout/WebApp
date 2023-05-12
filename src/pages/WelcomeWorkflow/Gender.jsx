import React, { useState } from "react";
import WomenIcon from '../../ressource/icons/Frau.png'
import ManIcon from '../../ressource/icons/Man.png'
import '../../ressource/assets/welcomeworkflow.css'
import Logo from '../../ressource/icons/logo.png'
import Footer from "../../components/r_Footer_long";

import { useNavigate } from 'react-router-dom'

export default function Gender() {

    const navigate = useNavigate()
    const [gender, setGender] = useState("")

    const handleBack = () => {
        navigate("/welcomeworkflow/birthday")
    }

    const handleContinue = () => {
        //daten speichern
        storageData()
        navigate("/welcomeworkflow/bodydata")
    }

    const handleSkip = () => {
        document.cookie = "gender="
        navigate("/welcomeworkflow/bodydata")
    }

    const handleGenderMale = () => {
        setGender("male")
        
    }

    const handleGenderFemale = () => {
        setGender("female")
    }

    const storageData = () => {
        document.cookie = "gender=" + gender
        console.log(gender)
    }


    return (
        <div className="fullview">
            <div className="gender-content_container">
                <div className="bubble_container">
                    <div className="bubble">
                        <p className="bubble-text_container aileron-bold-black-24px">Bitte gebe dein Geschlecht an!</p>
                    </div>
                </div>

                <div className="logo_container">
                    <img src={Logo} alt="dhbworkout logo" className="gender-logo" />
                </div>

                <div className="selection_container">
                    <div className="gender-icons_container">
                        <img onClick={handleGenderMale} src={ManIcon} alt="gender man" className="gender-icon" />
                    </div>
                    <div className="gender-icons_container">
                        <img onClick={handleGenderFemale} src={WomenIcon} alt="gender women" className="gender-icon" />

                    </div>
                </div>
                <div className="ww-button_container">
                    <button onClick={handleBack} className="ww-button aileron-bold-white-16px">Zurück</button>
                    <button onClick={handleSkip} className="ww-button aileron-bold-white-16px">Skip</button>
                    <button onClick={handleContinue} className="ww-button aileron-bold-white-16px">Weiter</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}