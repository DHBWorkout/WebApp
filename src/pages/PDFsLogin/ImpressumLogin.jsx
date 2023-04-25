import React from 'react'
import { Link } from 'react-router-dom'
import FooterLong from '../../components/l_Footer_long'
import PDFViewer from '../../components/PDFViewerImpressum'
import '../../ressource/assets/loginview.css'

import Arrow from '../../ressource/icons/arrow-right-line.png'

export default function ImpressumLogin() {
    return (
        <div className='fullview'>
            <Link to='/login' className='login-sidebar'>
                <div className="icon_container">
                    <img src={Arrow} alt="back arrow" className='arrow' />
                </div>
            </Link>
            <PDFViewer />
            <FooterLong />
        </div>
    )
}