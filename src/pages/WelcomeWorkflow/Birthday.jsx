import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import Footer from "../../components/r_Footer_long";
import '../../ressource/assets/welcomeworkflow.css'
import Logo from '../../ressource/icons/logo.png'

export default function Birthday() {


    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const [errorMessage, setErrorMessage] = useState("")

    const daysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    };

    const days = Array.from({ length: daysInMonth(month, year) }, (_, i) => {
        const dayValue = i + 1;
        return dayValue < 10 ? '0' + dayValue : dayValue.toString();
    });

    const months = Array.from({ length: 12 }, (_, i) => {
        const monthValue = i + 1;
        return monthValue < 10 ? '0' + monthValue : monthValue.toString();
    });
    const years = Array.from({ length: 100 }, (_, i) => 2023 - i);

    const handleDayChange = (e) => {
        setDay(e.target.value);
    };

    const handleMonthChange = (e) => {
        setMonth(e.target.value);
    };

    const handleYearChange = (e) => {
        setYear(e.target.value);
    };

    // Validating the selected date
    const isValidDate = () => {
        if (day && month && year) {
            const selectedDate = new Date(`${year}-${month}-${day}`);
            if (
                selectedDate.getFullYear() === parseInt(year, 10) &&
                selectedDate.getMonth() + 1 === parseInt(month, 10) &&
                selectedDate.getDate() === parseInt(day, 10)
            ) {
                return true;
            }
        }
        setErrorMessage("Gebe ein korrektes Datum an!")
        return false;
    };


    const navigate = useNavigate()

    const handleBack = () => {
        navigate("/registration")
    }

    const handleContinue = () => {
        //daten speichern
        storageData()
        navigate("/welcomeworkflow/gender")
    }

    const handleSkip = () => {
        document.cookie = "birthday="
        navigate("/welcomeworkflow/gender")
    }

    const storageData = () => {
        const selectedDate = `${year}-${month}-${day}`;
        document.cookie = "birthday=" + selectedDate
        console.log(selectedDate);
    }

    return (
        <div className="fullview">
            <div className="gender-content_container">

                <div className="bubble_container">
                    <div className="bubble">
                        <p className="bubble-text_container aileron-bold-black-24px">Bitte wähle dein Geburtsdatum aus!</p>
                    </div>
                </div>

                <div className="logo_container">
                    <img src={Logo} alt="dhbworkout logo" className="gender-logo" />
                </div>

                <div className="interaction_container">
                    <div className="birthday-selector_container">
                        <div className="selector_container">
                            <div className="selector">
                                <select value={day} onChange={handleDayChange}>
                                    {days.map((day) => (
                                        <option key={day} value={day}>
                                            {day}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="label_container">
                                <p className="aileron-bold-white-18px">Tag</p>
                            </div>
                        </div>

                        <div className="selector_container">
                            <div className="selector">
                                <select value={month} onChange={handleMonthChange}>
                                    {months.map((month) => (
                                        <option key={month} value={month}>
                                            {month}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="label_container">
                                <p className="aileron-bold-white-18px">Monat</p>
                            </div>
                        </div>

                        <div className="selector_container">
                            <div className="selector">
                                <select value={year} onChange={handleYearChange}>
                                    {years.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="label_container">
                                <p className="aileron-bold-white-18px">Jahr</p>
                            </div>
                        </div>




                    </div>

                    <div className="welcomeworkflow-error-message">
                        {errorMessage && !isValidDate() && <p className="aileron-bold-dark-red-24px">{errorMessage}</p>}
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