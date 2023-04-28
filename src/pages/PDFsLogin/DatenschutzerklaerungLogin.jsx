import React from 'react'
import { Link } from 'react-router-dom'
import FooterLong from '../../components/l_Footer_long'
import PDFViewer from '../../components/PDFViewerDatenschutzerklaerung'
import '../../ressource/assets/loginview.css'

import Arrow from '../../ressource/icons/arrow-right-line.png'
import zuruck from "../../ressource/icons/zuruck-button.png";
import Logo from "../../ressource/icons/logo.png";

export default function DatenschutzerklärungLogin() {
    return (
        <div className='fullview'>
            <Link to='/login' className='login-sidebar'>
                <div className="icon_container">
                    <img src={Logo} alt="Logo" className='logo' />
                </div>
                <div className="icon_container">
                    <img src={zuruck} alt="back arrow" className='arrow' />
                </div>
                <div className="icon_container">
                    <p className="zurucktxt">zurück</p>
                </div>
            </Link>
            <PDFViewer />
            <FooterLong />
        </div>
    )
}