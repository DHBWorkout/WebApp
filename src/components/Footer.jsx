import React from 'react';
import '../ressource/assets/footer.css';

export default function Footer() {
    return (
        <div className="footer-background">
            <div className="footer-button__container">
                <div className="footer-button">
                    <div className="footer-label">
                        <span className="aileron-bold-white-12px">Kontakt</span>
                    </div>
                </div>

                <div className="footer-button">
                    <div className="footer-label">
                        <span className="aileron-bold-white-12px">Impressum</span>
                    </div>
                </div>

                <div className="footer-button">
                    <div className="footer-label">
                        <span className="aileron-bold-white-12px">Datenschutzerklärung</span>
                    </div>
                </div>

                <div className="footer-button">
                    <div className="footer-label">
                        <span className="aileron-bold-white-12px">AGBs</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
