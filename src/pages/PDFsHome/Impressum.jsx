import React from 'react'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'
import PDFViewer from '../../components/PDFViewerImpressum';

export default function Impressum() {
    return (
        <div>
            <Sidebar />
                <PDFViewer/>
            <Footer />
        </div>
    )
}