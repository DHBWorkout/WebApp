import React from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
//import '../ressource/assets/calculater.css'

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

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    getData();
    return (
        

        <div>
            <Sidebar />
            <div className='main-content_container'>
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