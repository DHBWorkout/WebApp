import React from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import PDFViewer from '../PDFViewer';
import '../ressource/assets/pdfviewer.css'

export default function Datenschutzerklaerung() {
    return (
        <div>
            <Sidebar />
            <div className="pdfviewer">
                <PDFViewer pdfUrl='./ressource/pdf/Datenschutzerklärung_de.pdf'/>
            </div>
            <Footer />
        </div>
    )
}