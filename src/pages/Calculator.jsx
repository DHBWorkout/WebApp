import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import '../ressource/assets/calculator.css'

export default function Calculator() {


    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
          // Call your function here
          calculate();
        }
      });

    const [feedbackMessage, setFeedbackMessage] = useState('')

    function calculate() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value / 100;

        var ergebnis = weight / (height * height);
        document.getElementById("bmi").innerHTML = "Ergebnis: " + ergebnis.toFixed(2).toString();

        if (ergebnis === null) {
            setFeedbackMessage('')
        } else if (ergebnis < 18.5) {
            setFeedbackMessage('Sie haben Untergewicht.')
        } else if (ergebnis < 25) {
            setFeedbackMessage('Sie haben Normalgewicht.')
        } else if (ergebnis < 23) {
            setFeedbackMessage('Sie haben Übergewicht.')
        } else if (ergebnis < 35) {
            setFeedbackMessage('Sie haben starkes Übergewicht')
        } else if (ergebnis >= 35) {
            setFeedbackMessage('Sie haben Adipositas.')
        }
    }

    return (


        <div>
            <Sidebar />
            <div className='main-content_container'>

                <div className="bmi-title_container">
                    <p className="aileron-bold-black-48px">
                        BMI-Rechner
                    </p>
                </div>

                <div className="bmi-text_container">
                    <p className='aileron-bold-black-24px'>Gebe dein Gewicht in kg an:</p>
                </div>

                <div className="bmi-input_container">
                    <input className='bmi-input-field' type='text' id='weight' />
                </div>
                <p></p>
                <div className="aileron-bold-black-24px bmi-text_container">
                    <p>Gebe deine Größe in cm an:</p>
                </div>
                <div className="bmi-input_container">
                    <input className='bmi-input-field' type='text' id='height' />
                </div>
                <p></p>

                <div className="bmi-button_container">
                    <button className='bmi-button aileron-bold-white-16px' onClick={calculate}>Berechne</button>
                </div>

                <div className="bmi-text_container">
                    <p id='bmi' className='aileron-bold-black-24px'> Ergebnis: </p>
                </div>
                <div className="feedback_container">
                    {feedbackMessage &&
                        <div
                            className='aileron-bold-dark-red-18px error-message'>{feedbackMessage}</div>}
                </div>

            </div>

            <Footer />
        </div>
    )
}