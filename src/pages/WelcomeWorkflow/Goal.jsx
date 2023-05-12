import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import Footer from "../../components/r_Footer_long";
import '../../ressource/assets/welcomeworkflow.css'
import Logo from '../../ressource/icons/logo.png'
import BuildImg from '../../ressource/icons/image 9.png'
import HoldImg from '../../ressource/icons/image 10.png'
import LoseImg from '../../ressource/icons/image 11.png'

export default function Goal() {

    const [errorMessage, setErrorMessage] = useState("")
    const [goal, setGoal] = useState(0)

    const handleGain = () => {
        setGoal(1)
    }

    const handleLose = () => {
        setGoal(2)
    }

    const handleHold = () => {
        setGoal(3)
    }

    const navigate = useNavigate()

    const handleBack = () => {
        navigate("/welcomeworkflow/calories")
    }

    const handleContinue = () => {
        //daten speichern
        if (goal === "") {
            setErrorMessage("Wähle ein Ziel für dich aus!")
        } else {
            storageData()
            sendDataToAPI()
        }
    }

    const handleSkip = () => {
        document.cookie = "goal=" + goal
        sendDataToAPI()
    }

    const getPropFromCookie = (prop) => {
        const cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].split("=");
            if (cookie[0] === prop) {
                return cookie[1];
            }
        }
        return null; // Cookie wurde nicht gefunden
    };







    const storageData = () => {
        document.cookie = "goal=" + goal
    }

    // const getDataFromCookie = () => {
    //     const data = {
    //         "Birthday": getPropFromCookie("birthday"),
    //         "Gender": getPropFromCookie("gender"),
    //         "Weight": parseInt(getPropFromCookie("weight")),
    //         "Height": parseInt(getPropFromCookie("height")),
    //         "Calories": parseInt(getPropFromCookie("calories")),
    //         "Goal": parseInt(getPropFromCookie("goal"))
    //     }
    //     return data
    // }

    const sendDataToAPI = async () => {
        const data = {
            "Birthday": getPropFromCookie("birthday"),
            "Gender": getPropFromCookie("gender"),
            "Weight": parseInt(getPropFromCookie("weight")),
            "Height": parseInt(getPropFromCookie("height")),
            "Calories": parseInt(getPropFromCookie("calories")),
            "Goal": parseInt(getPropFromCookie("goal"))
        }

        console.log(data)

        try {
            const response = await fetch('https://api.dhbworkout.de/v1/welcomeworkflow', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': getPropFromCookie("token")
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                navigate('/home')
            } else {
                alert(response)
            }
            //   const data = await response.json()
            //   console.log(data)
        } catch (error) {
            console.error(error);
            setErrorMessage('An error occurred while sending data to the server.')
        }
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

                <div className="interaction_container">
                    <div className="goal_container">
                        <div onClick={handleGain} className="specific-goal_container">
                            <div className="goal-image_container">
                                <img src={BuildImg} alt="" className="goal-image" />
                            </div>
                            <div className="goal-label_container">
                                <p className="goal-label aileron-bold-black-18px"> Muskelaufbau</p>
                            </div>
                        </div>
                        <div onClick={handleHold} className="specific-goal_container">
                            <div className="goal-image_container">
                                <img src={HoldImg} alt="" className="goal-image" />
                            </div>
                            <div className="goal-label_container">
                                <p className="goal-label aileron-bold-black-18px">Gewicht halten</p>
                            </div>
                        </div>
                        <div onClick={handleLose} className="specific-goal_container">
                            <div className="goal-image_container">
                                <img src={LoseImg} alt="" className="goal-image" />
                            </div>
                            <div className="goal-label_container">
                                <p className="goal-label aileron-bold-black-18px">Abnehmen</p>
                            </div>
                        </div>
                    </div>
                    <div className="welcomeworkflow-error-message">
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