import React from 'react'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'
import PDFViewer from '../../components/PDFViewerAGB';

export default function AGB() {
    return (
        <div>
            <Sidebar />
                <PDFViewer/>
            <Footer />
        </div>
    )
}