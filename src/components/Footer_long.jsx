import React from 'react';
import { Link } from 'react-router-dom'
import '../ressource/assets/footer.css';

export default function Footer() {
    return (
        <div className="footer-background-long">
            <div className="footer-button__container">

                <div className="footer-button">
                    <Link to='/pdf/kontakt'>
                        <div className="footer-label">
                            <p className="aileron-bold-white-12px">Kontakt</p>
                        </div>
                    </Link>
                </div>

                <div className="footer-button">
                    <Link to='/pdf/impressum'>
                        <div className="footer-label">
                            <p className="footer-text aileron-bold-white-12px">Impressum</p>
                        </div>
                    </Link>
                </div>

                <div className="footer-button">
                    <Link to='/pdf/datenschutzerklaerung'>
                        <div className="footer-label">
                            <p className="aileron-bold-white-12px">Datenschutzerklärung</p>
                        </div>
                    </Link>
                </div>

                <div className="footer-button">
                    <Link to='/pdf/agb'>
                        <div className="footer-label">
                            <p className="aileron-bold-white-12px">AGBs</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
