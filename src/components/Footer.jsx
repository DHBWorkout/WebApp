import React from 'react';
import { Link } from 'react-router-dom'
import '../ressource/assets/footer.css';

export default function Footer() {
    return (
        <div className="footer-background">
            <div className="footer-button__container">

                <div className="footer-button">
                    <Link to='/pdf/kontakt'>
                        <div className="footer-label">
                            <span className="aileron-bold-white-12px">Kontakt</span>
                        </div>
                    </Link>
                </div>

                <div className="footer-button">
                    <Link to='/pdf/impressum'>
                        <div className="footer-label">
                            <span className="aileron-bold-white-12px">Impressum</span>
                        </div>
                    </Link>
                </div>

                <div className="footer-button">
                    <Link to='/pdf/datenschutzerklaerung'>
                        <div className="footer-label">
                            <span className="aileron-bold-white-12px">Datenschutzerklärung</span>
                        </div>
                    </Link>
                </div>

                <div className="footer-button">
                    <Link to='/pdf/agb'>
                        <div className="footer-label">
                            <span className="aileron-bold-white-12px">AGBs</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
