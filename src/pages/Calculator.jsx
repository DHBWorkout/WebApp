import React from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import '../ressource/assets/calculator.css'

export default function Calculator() {

    
    
    function calculate(){
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value / 100;

        var ergebnis = weight / (height * height);
        document.getElementById("bmi").innerHTML = "Result: " + ergebnis.toString();
    }
    
    return (
        

        <div>
            <Sidebar />
            <div className='main-content_container'>
                <h1>BMI-Rechner</h1>
                <p>Gebe dein Gewicht in kg an:</p> 
                <input type='text' id='weight'/>
                <p>Gebe deine Größe in cm an:</p> 
                <input type='text' id='height'/>
                <p></p>
                <button onClick={calculate}>Berechne</button>
                <p id='bmi'> Eregbnis: </p>
            </div>
        
            <Footer />
        </div>
    )
}