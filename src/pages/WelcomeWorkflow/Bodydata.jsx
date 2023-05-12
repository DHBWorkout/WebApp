import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import Footer from "../../components/r_Footer_long";
import '../../ressource/assets/welcomeworkflow.css'
import Logo from '../../ressource/icons/logo.png'

export default function BodyData() {

    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const navigate = useNavigate()

    const handleWeight = (e) => {
        setWeight(e.target.value)
    }

    const handleHeight = (e) => {
        setHeight(e.target.value)
    }

    const handleBack = () => {
        navigate("/welcomeworkflow/gender")
    }

    const handleContinue = () => {
        //daten speichern
        storageData()
        navigate("/welcomeworkflow/calories")
    }

    const handleSkip = () => {
        document.cookie = "weight=" + weight
        document.cookie = "height=" + height
        navigate("/welcomeworkflow/calories")
    }

    const storageData = () => {
        const userdata = {
            "weight": weight,
            "height": height
        }
        document.cookie = "weight=" + weight
        document.cookie = "height=" + height
        console.log(userdata)
    }


    return (
        <div className="fullview">
            <div className="gender-content_container">

                <div className="bubble_container">
                    <div className="bubble">
                        <p className="bubble-text_container aileron-bold-black-24px">Bitte gebe deine Körperdaten an!</p>
                    </div>
                </div>

                <div className="logo_container">
                    <img src={Logo} alt="dhbworkout logo" className="gender-logo" />
                </div>

                <div className="bodydata_container">
                    <div className="data-row_container">
                        <div className="data-label">
                            <p className="aileron-bold-white-18px">Gewicht in kg:</p>
                        </div>
                        <input onChange={handleWeight} placeholder="z.B. 84"/>
                    </div>
                    <div className="data-row_container">
                        <div className="data-label">
                            <p className="aileron-bold-white-18px">Größe in cm:</p>
                        </div>
                        <input onChange={handleHeight} placeholder="z.B. 186"/>
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