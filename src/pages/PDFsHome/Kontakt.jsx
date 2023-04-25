import React from 'react'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'
import PDFViewer from '../../components/PDFViewerKontakt';

export default function Kontakt() {
    return (
        <div>
            <Sidebar />
                <PDFViewer/>
            <Footer />
        </div>
    )
}