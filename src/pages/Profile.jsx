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
            const prenameElement = document.getElementById('prename')
            prenameElement.textContent = 'Willkommen ' + prenameElement.textContent + ' '
        }
    };

    getData();
    return (


        <div>
            <Sidebar />
            <div className='main-content_container'>
                <div className="profile-header">
                    <p className=' profile-text-prename aileron-bold-black-48px prename' id={'prename'}></p>
                    <p className=' profile-text-surname aileron-bold-black-48px prename' id={'surname'}></p>
                </div>
                <div className="profile-content_container">
                    <div className="profile-content-s_container">

                        <div className="top_container">
                            <div className="stat_container">
                                <div className="name_container">
                                    <p className="profile-text aileron-bold-black-16px">Geburtstag</p>
                                </div>
                                <div className="number_container">
                                    <p id={'birthday'} className="profile-text aileron-bold-black-24px"></p>
                                </div>
                            </div>
                            <div className="stat_container">
                                <div className="name_container">
                                    <p className="profile-text aileron-bold-black-16px">Geschlecht</p>
                                </div>
                                <div className="number_container">
                                    <p id={'gender'} className="profile-text aileron-bold-black-24px"></p>
                                </div>
                            </div>
                        </div>

                        <div className="bottom_container">
                            <div className="stat_container">
                                <div className="name_container">
                                    <p className="profile-text aileron-bold-black-16px">Alter</p>
                                </div>
                                <div className="number_container">
                                    <p className="profile-text aileron-bold-black-24px">38</p>
                                </div>
                            </div>
                            <div className="stat_container">
                                <div className="name_container">
                                    <p className="profile-text aileron-bold-black-16px">KCAL</p>
                                </div>
                                <div className="number_container">
                                    <p className="profile-text aileron-bold-black-24px">2108</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="profile-content-s_container">
                        <div className="weight-history_container">

                        </div>
                    </div>
                </div>

                <div className="profile-content_container">

                </div>
            </div>

            <Footer />
        </div>
    )
}