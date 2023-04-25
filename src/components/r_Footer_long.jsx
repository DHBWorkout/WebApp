import React from 'react';
import { Link } from 'react-router-dom'
import '../ressource/assets/footer.css';

export default function Footer() {
    return (
        <div className="footer-background-long">
            <div className="footer-button__container">

                <div className="footer-button">
                    <Link to='/pdf/registration/kontakt' className='footer'>
                        <div className="footer-label">
                            <p className="aileron-bold-white-16px">Kontakt</p>
                        </div>
                    </Link>
                </div>

                <div className="footer-button">
                    <Link to='/pdf/registration/impressum' className='footer'>
                        <div className="footer-label">
                            <p className="footer-text aileron-bold-white-16px">Impressum</p>
                        </div>
                    </Link>
                </div>

                <div className="footer-button">
                    <Link to='/pdf/registration/datenschutzerklaerung' className='footer'>
                        <div className="footer-label">
                            <p className="aileron-bold-white-16px">Datenschutzerklärung</p>
                        </div>
                    </Link>
                </div>

                <div className="footer-button">
                    <Link to='/pdf/registration/agb' className='footer'>
                        <div className="footer-label">
                            <p className="aileron-bold-white-16px">AGBs</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
