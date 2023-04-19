import React from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import PDFViewer from '../PDFViewer';
import '../ressource/assets/pdfviewer.css'

export default function Kontakt() {
    return (
        <div>
            <Sidebar />
            <div className="pdfviewer">
                <PDFViewer pdfUrl='./ressource/pdf/Kontakt_de.pdf'/>
            </div>
            <Footer />
        </div>
    )
}