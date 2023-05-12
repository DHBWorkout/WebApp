import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import Footer from "../../components/r_Footer_long";
import '../../ressource/assets/welcomeworkflow.css'
import Logo from '../../ressource/icons/logo.png'

export default function Calories() {

    const [calories, setCalories] = useState(0)
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()

    const handleCalories = (e) => {
        setCalories(e.target.value)
    }

    const handleBack = () => {
        navigate("/welcomeworkflow/bodydata")
    }

    const handleContinue = () => {
        //daten speichern

        if (calories !== 0) {
            storageData()
            navigate("/welcomeworkflow/goal")
        } else {
            setErrorMessage("Gebe deinen täglichen Kalorienbedarf an!")
        }

    }

    const handleSkip = () => {
        navigate("/welcomeworkflow/goal")
    }

    const storageData = () => {
        console.log(calories)
    }
    return (
        <div className="fullview">
            <div className="gender-content_container">

                <div className="bubble_container">
                    <div className="bubble">
                        <p className="bubble-text_container aileron-bold-black-24px">Bitte gebe deinen Kalorienbedarf an!</p>
                    </div>
                </div>

                <div className="logo_container">
                    <img src={Logo} alt="dhbworkout logo" className="gender-logo" />
                </div>

                <div className="interaction_container">
                    <div className="calories_container">
                        <div className="data-row_container">
                            <div className="data-label">
                                <p className="aileron-bold-white-18px">Täglicher Kalorienbedarf:</p>
                            </div>
                            <input onChange={handleCalories} placeholder="z.B. 2400" />
                        </div>
                    </div>
                    <div className="birthday-error-message">
                        {errorMessage && <p className="aileron-bold-dark-red-24px">{errorMessage}</p>}
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