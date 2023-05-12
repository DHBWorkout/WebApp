import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import getCookie from "../Cookies";
import '../ressource/assets/profile.css'

export default function Profile() {

    const [prename, setPrename] = useState('');
    const [surname, setSurname] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('')

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (birthday) {
            setAge(calculateAge(birthday));
        }
    }, [birthday]);

    const getData = async () => {
        var obj = {
            Token: getCookie("token")
        };
        const response = await fetch('https://api.dhbworkout.de/v1/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj),
        });

        if (response.ok) {
            const data = await response.json();
            setPrename(data.Response.Prename);
            setSurname(data.Response.Surname);
            setBirthday(data.Response.Birthday);
            setGender(data.Response.Gender);
        }
    };

    const calculateAge = (birthdate) => {
        const today = new Date();
        const birthdateArr = birthdate.split('-');
        const birthYear = parseInt(birthdateArr[0]);
        const birthMonth = parseInt(birthdateArr[1]) - 1; // Month starts from 0 (January is 0)
        const birthDay = parseInt(birthdateArr[2]);

        const age = today.getFullYear() - birthYear;

        if (
            today.getMonth() < birthMonth ||
            (today.getMonth() === birthMonth && today.getDate() < birthDay)
        ) {
            return age - 1;
        }

        return age;
    };


    return (


        <div>
            <Sidebar />
            <div className='main-content_container'>
                <div className="profile-header">
                    <p className=' profile-text-prename aileron-bold-black-48px prename'>Willkommen {prename} {surname}!</p>
                </div>
                <div className="profile-content_container">
                    <div className="profile-content-s_container">

                        <div className="top_container">
                            <div className="stat_container">
                                <div className="name_container">
                                    <p className="profile-text aileron-bold-black-16px">Geburtstag</p>
                                </div>
                                <div className="number_container">
                                    <p className="profile-text aileron-bold-black-24px">{birthday}</p>
                                </div>
                            </div>
                            <div className="stat_container">
                                <div className="name_container">
                                    <p className="profile-text aileron-bold-black-16px">Geschlecht</p>
                                </div>
                                <div className="number_container">
                                    <p className="profile-text aileron-bold-black-24px">{gender}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bottom_container">
                            <div className="stat_container">
                                <div className="name_container">
                                    <p className="profile-text aileron-bold-black-16px">Alter</p>
                                </div>
                                <div className="number_container">
                                    <p className="profile-text aileron-bold-black-24px">{age}</p>
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