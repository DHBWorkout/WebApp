import React from 'react'
import { Link } from 'react-router-dom'
import FooterLong from '../../components/r_Footer_long'
import PDFViewer from '../../components/PDFViewerAGB'
import '../../ressource/assets/loginview.css'
import zuruck from "../../ressource/icons/zuruck-button.png";
import Logo from "../../ressource/icons/logo.png";

export default function AGBsRegistration() {
    return (
        <div className='fullview'>
            <Link to='/registration' className='login-sidebar'>
                <div className="icon_container">
                    <img src={Logo} alt="Logo" className='logo' />
                </div>
                <div className="icon_container">
                    <img src={zuruck} alt="back arrow" className='arrow' />
                </div>
                <div className="icon_container">
                    <p className="aileron-bold-white-24px">zurück</p>
                </div>
            </Link>
            <PDFViewer />
            <FooterLong />
        </div>
    )
}