import React from 'react'
import { Link } from 'react-router-dom'
import FooterLong from '../../components/r_Footer_long'
import PDFViewer from '../../components/PDFViewerAGB'
import '../../ressource/assets/loginview.css'

import Arrow from '../../ressource/icons/arrow-right-line.png'

export default function AGBsRegistration() {
    return (
        <div className='fullview'>
            <Link to='/registration' className='login-sidebar'>
                <div className="icon_container">
                    <img src={Arrow} alt="back arrow" className='arrow' />
                </div>
            </Link>
            <PDFViewer />
            <FooterLong />
        </div>
    )
}