import React from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import PDFViewer from '../components/PDFViewerDatenschutzerklaerung';

export default function Datenschutzerklaerung() {
    return (
        <div>
            <Sidebar />
                <PDFViewer/>
            <Footer />
        </div>
    )
}