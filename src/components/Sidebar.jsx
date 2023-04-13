import React from 'react'
import '../ressource/assets/sidebar.css'
import Logo from '../ressource/icons/logo.png'
import HomeIcon from '../ressource/icons/Home.png'
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

                <div className="sidebar-button">
                    <div className="sidebar-icon__container">
                        <img src={HomeIcon} alt="home icon" className="sidebar-icon" />
                    </div>
                    <div className="sidebar-string">
                        <span className='aileron-bold-white-18px'>Home</span>
                    </div>
                </div>

                <div className="sidebar-button">
                    <div className="sidebar-icon__container">
                        <img src={HomeIcon} alt="home icon" className="sidebar-icon" />
                    </div>
                    <div className="sidebar-string">
                        <span className='aileron-bold-white-18px'>Profile</span>
                    </div>
                </div>

                <div className="sidebar-button">
                    <div className="sidebar-icon__container">
                        <img src={HomeIcon} alt="home icon" className="sidebar-icon" />
                    </div>
                    <div className="sidebar-string">
                        <span className='aileron-bold-white-18px'>Plan</span>
                    </div>
                </div>

                <div className="sidebar-button">
                    <div className="sidebar-icon__container">
                        <img src={HomeIcon} alt="home icon" className="sidebar-icon" />
                    </div>
                    <div className="sidebar-string">
                        <span className='aileron-bold-white-18px'>Plan</span>
                    </div>
                </div>

                <div className="sidebar-button">
                    <div className="sidebar-icon__container">
                        <img src={HomeIcon} alt="home icon" className="sidebar-icon" />
                    </div>
                    <div className="sidebar-string">
                        <span className='aileron-bold-white-18px'>Ernährung</span>
                    </div>
                </div>

                <div className="sidebar-button">
                    <div className="sidebar-icon__container">
                        <img src={HomeIcon} alt="home icon" className="sidebar-icon" />
                    </div>
                    <div className="sidebar-string">
                        <span className='aileron-bold-white-18px'>Settings</span>
                    </div>
                </div>

            </div>
        </div>
    )
}