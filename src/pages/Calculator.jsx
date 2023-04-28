import React from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
//import '../ressource/assets/calculater.css'

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
                <h1>BMI-Calculator</h1>
                <p>Enter your weight in kg</p> 
                <input type='text' id='weight'/>
                <p>Enter your height in cm</p> 
                <input type='text' id='height'/>
                <p></p>
                <button onClick={calculate}>Calculate</button>
                <p id='bmi'> Result: </p>
            </div>
        
            <Footer />
        </div>
    )
}