import React from 'react';
import { Link } from 'react-router-dom'
import '../ressource/assets/footer.css';

export default function Footer() {
    return (
        <div className="footer-background-long">
            <div className="footer-button__container">

                <Link to='/pdf/login/kontakt' className='footer-button'>
                    <div className="footer">
                        <div className="footer-label">
                            <p className="aileron-bold-white-16px">Kontakt</p>
                        </div>
                    </div>
                </Link>
                <Link to='/pdf/login/impressum' className='footer-button'>
                    <div className="footer">
                        <div className="footer-label">
                            <p className="aileron-bold-white-16px">Impressum</p>
                        </div>
                    </div>
                </Link>
                <Link to='/pdf/login/datenschutzerklaerung' className='footer-button'>
                    <div className="footer">
                        <div className="footer-label">
                            <p className="aileron-bold-white-16px">Datenschutzerklärung</p>
                        </div>
                    </div>
                </Link>
                <Link to='/pdf/login/agb' className='footer-button'>
                    <div className="footer">
                        <div className="footer-label">
                            <p className="aileron-bold-white-16px">AGBs</p>
                        </div>
                    </div>
                </Link>
                
            </div>
        </div>
    );
}
