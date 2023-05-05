import React from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import getCookie from "../Cookies";
import '../ressource/assets/profile.css'

export default function Profile() {



    const getData = async () => {
        var obj = {
            Token: getCookie("token")
        }
        const response = await fetch('https://api.dhbworkout.de/v1/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj),
        });

        if (response.ok) {
            const data = await response.json()
            document.getElementById("prename").innerHTML = data.Response.Prename
            document.getElementById("surname").innerHTML = data.Response.Surname
            document.getElementById("birthday").innerHTML = data.Response.Birthday
            document.getElementById("gender").innerHTML = data.Response.Gender
        }
    };

    getData();
    return (
        

        <div>
            <Sidebar />
            <div className='main-content_container'>
                <div className="profile-header">
                    <p className='aileron-bold-black-16px' id={"prename"}></p>
                    <p className='aileron-bold-black-16px' id={"surname"}></p>
                </div>
                <h1>Profil</h1>
                <p id={"prename"}>Prename</p>
                <p id={"surname"}>Surname</p>
                <p id={"birthday"}>Birthday</p>
                <p id={"gender"}>Gender</p>
            </div>
        
            <Footer />
        </div>
    )
}