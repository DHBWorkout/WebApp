import React from 'react'
import { Link } from 'react-router-dom'
import '../ressource/assets/sidebar.css'
import Logo from '../ressource/icons/logo.png'
import HomeIcon from '../ressource/icons/Home.png'
import ProfilIcon from '../ressource/icons/Profil.png'
import PlanIcon from '../ressource/icons/Kalender.png'
import RechnerIcon from '../ressource/icons/Rechner.png'
import ErnaehrungIcon from '../ressource/icons/Ernährung2.png'
import EinstellungenIcon from '../ressource/icons/Einstellungen.png'
import LogoutIcon from '../ressource/icons/LogOut.png'
//1200x675
//width 1/5
//height: 61/675

//margin links 45px



export default function Sidebar() {
    return (
        <div className="sidebar-background">
            <div className="sidebar-mainicon__container">
                <img src={Logo} alt="dhbworkout logo" className="sidebar-mainicon" />
            </div>

            <div className="sidebar-menu">

                <Link to='/home' className="sidebar-button">
                    <div className="sidebar-icon__container">
                        <img src={HomeIcon} alt="home icon" className="sidebar-icon" />
                    </div>
                    <div className="sidebar-string">
                        <span className='aileron-bold-white-18px'>Home</span>
                    </div>
                </Link>



                <div className="sidebar-button">
                    <div className="sidebar-icon__container">
                        <img src={ProfilIcon} alt="profil icon" className="sidebar-icon" />
                    </div>
                    <div className="sidebar-string">
                        <span className='aileron-bold-white-18px'>Profil</span>
                    </div>
                </div>

                <div className="sidebar-button">
                    <div className="sidebar-icon__container">
                        <img src={PlanIcon} alt="trainingsplan icon" className="sidebar-icon" />
                    </div>
                    <div className="sidebar-string">
                        <span className='aileron-bold-white-18px'>Trainingsplan</span>
                    </div>
                </div>

                <div className="sidebar-button">
                    <div className="sidebar-icon__container">
                        <img src={RechnerIcon} alt="rechner icon" className="sidebar-icon" />
                    </div>
                    <div className="sidebar-string">
                        <span className='aileron-bold-white-18px'>BMI-Rechner</span>
                    </div>
                </div>

                <div className="sidebar-button">
                    <div className="sidebar-icon__container">
                        <img src={ErnaehrungIcon} alt="ernährung icon" className="sidebar-icon" />
                    </div>
                    <div className="sidebar-string">
                        <span className='aileron-bold-white-18px'>Ernährung</span>
                    </div>
                </div>

                <div className="sidebar-button">
                    <div className="sidebar-icon__container">
                        <img src={EinstellungenIcon} alt="einstellungen icon" className="sidebar-icon" />
                    </div>
                    <div className="sidebar-string">
                        <span className='aileron-bold-white-18px'>Einstellungen</span>
                    </div>
                </div>

                <Link to='/login' className="sidebar-button">
                    <div className="sidebar-icon__container">
                        <img src={LogoutIcon} alt="logout icon" className="sidebar-icon" />
                    </div>
                    <div className="sidebar-string">
                        <span className='aileron-bold-white-18px'>Logout</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}