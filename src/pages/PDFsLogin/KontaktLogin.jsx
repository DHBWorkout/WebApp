import React from 'react'
import { Link } from 'react-router-dom'
import FooterLong from '../../components/l_Footer_long'
import PDFViewer from '../../components/PDFViewerKontakt'
import '../../ressource/assets/loginview.css'
import Mainicon from '../../ressource/icons/logo.png'

import Arrow from '../../ressource/icons/arrow-right-line.png'

export default function KontaktLogin() {
    return (
        <div className='fullview'>
            <Link to='/login' className='login-sidebar'>
                <div className="l-mainicon_container">
                    <img src={Mainicon} alt="dhbworkout logo" className='l-mainicon'/>
                </div>
                <div className="icon_container">
                    <img src={Arrow} alt="back arrow" className='arrow' />
                </div>
                <p className='aileron-bold-white-24px'>Zurück</p>
            </Link>
            <PDFViewer />
            <FooterLong />
        </div>
    )
}