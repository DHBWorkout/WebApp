import React from 'react'
import '../ressource/assets/hometext.css'

export default function Text() {
    return (
        <div className='main-content_container'>
            <div className='text_container'>
                <p className='text-header aileron-bold-black-24px'>
                    Willkommen bei DHBWorkout, unserer Trainings- und Ernährungs-App!
                </p>
                <p className="text aileron-regular-black-18px">
                    Mit DHBWorkout können Sie Ihr Training planen, die Nährwerte von Lebensmitteln suchen und Ihre Ernährung tracken.
                    Unsere App bietet außerdem einen BMI-Rechner, mit dem Sie Ihren Body-Mass-Index berechnen können.
                    DHBWorkout lässt Sie Ihr Training individuell planen und anpassen. Sie können Übungen eingeben und zu Ihrem Trainingsplan hinzufügen und Ihre Fortschritte überwachen. <br />
                </p>
                <p className="text aileron-regular-black-18px">
                    Unsere App bietet auch verschiedene Trainingsprogramme, die für Anfänger und Fortgeschrittene geeignet sind.
                    DHBWorkout besitzt auch eine Datenbank mit Nährwertangaben für verschiedene Lebensmittel. Sie können nach bestimmten Lebensmitteln suchen und die Nährwerte, Kalorien und andere wichtige Informationen einsehen.
                    Mit DHBWorkout können Sie auch Ihre tägliche Ernährung tracken und sicherstellen, dass Sie ausreichend Nährstoffe und Kalorien aufnehmen. <br />
                </p>
                <p className="text aileron-regular-black-18px">
                    Probieren Sie DHBWorkout jetzt aus und verbessern Sie Ihre körperliche Fitness und Ernährung. Wir hoffen, dass unsere App Ihnen beim Erreichen Ihrer Fitnessziele hilft.
                </p>
            </div>
        </div>

    )
}