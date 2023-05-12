import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import Footer from "../../components/r_Footer_long";
import '../../ressource/assets/welcomeworkflow.css'
import Logo from '../../ressource/icons/logo.png'

export default function Goal() {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate("/welcomeworkflow/calories")
    }

    const handleContinue = () => {
        //daten speichern
        storageData()
        navigate("/home")
    }

    const handleSkip = () => {
        navigate("/home")
    }

    const storageData = () => {
        console.log("quatsch mit soße")
    }
    return (
        <div className="fullview">
            <div className="gender-content_container">

                <div className="bubble_container">
                    <div className="bubble">
                        <p className="bubble-text_container aileron-bold-black-24px">Bitte wähle dein Ziel!</p>
                    </div>
                </div>

                <div className="logo_container">
                    <img src={Logo} alt="dhbworkout logo" className="gender-logo" />
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